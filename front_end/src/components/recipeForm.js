import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import axios from 'axios';

export const RecipeForm = ({updateRecipes}) => {

    const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([[]]);
    const [instructions, setInstructions] = useState([[]]);
    const [file, setFile] = useState([]);

    const addToDB = async (formData) => {
        try {
            const response = await axios.post("/api/add", formData);
            const recipes = response.data;
            updateRecipes(recipes);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        let recipeIngredients = [];
        let recipeInstructions = [];
        for (const [key, value] of Object.entries(data)){
            if (key.includes("ingredient") && value !== ""){
                recipeIngredients.push(value);
            }
            if (key.includes("instruction") && value !== ""){
                recipeInstructions.push(value);
            }
        };

        const formData = new FormData();
        formData.append("picture", file);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("ingredients", JSON.stringify(recipeIngredients));
        formData.append("instructions", JSON.stringify(recipeInstructions));
        
        addToDB(formData);
        alert("Recipe added succesfully");
        reset();
        setIngredients([]);
        setInstructions([]);
    }

    const addIngredientInput = () => {
        setIngredients(s => {
            return [...s, {}]
        })
    };

    const addInstructionInput = () => {
        setInstructions(s => {
            return [...s, {}]
        })
    };

    return (

        <Container className='container border border-secondary rounded my-2 w-50'>
            <h1>Add a recipe: </h1>
            <Form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>

                <Form.Group>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control 
                        type='text' 
                        name="name" 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control 
                        type='text' 
                        name="description" 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Group>

                <p>Ingredients: </p>
                {ingredients.map((item, i) => {
                    return(
                        <InputGroup className='mb-3'>
                                <Form.Control 
                                    type='text' 
                                    name={"ingredient" + i}
                                    id={"ingredient" + i} 
                                    {...register("ingredient" + i)} 
                                />
                            <Button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</Button>
                        </InputGroup>
                    )
                })}
                <Button type="button" size="sm" className="btn btn-success mx-1" onClick={addIngredientInput}>+</Button>


                <p>Instructions: </p>
                {instructions.map((item, i) => {
                    return(
                        <InputGroup className='mb-3'>
                            <Form.Control 
                                type='text' 
                                name={"instruction" + i} 
                                id={"instruction" + i}
                                {...register("instruction" + i)}
                            />
                            
                            <Button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</Button>
                        </InputGroup>
                    )
                })}
                <Button type="button" size="sm" className="btn btn-success mx-1" onClick={addInstructionInput}>+</Button>

                <Form.Group>
                    <Form.Label>Picture: </Form.Label>
                    <Form.Control 
                        type='file' 
                        name="picture" 
                        onChange={(e) => setFile(e.target.files[0])} 
                    />
                </Form.Group>

                <br></br>
                <Button className="my-2"type="submit">Submit</Button>
            </Form>
        </Container>
        
    )
}
