import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export const RecipeForm = () => {

    const { register, handleSubmit, control, reset } = useForm();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [file, setFile] = useState([]);

    const addToDB = async (formData) => {
        try {
            const response = await axios.post("/api/add", formData);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("picture", file);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("ingredients", ingredients);
        formData.append("instructions", instructions);
        addToDB(formData);
        alert("Recipe added succesfully");
        reset();
    }

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

                <Form.Group>
                    <Form.Label>Ingredients: </Form.Label>
                    <Form.Control 
                        type='text' 
                        name="ingredients" 
                        onChange={(e) => setIngredients(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Instructions: </Form.Label>
                    <Form.Control 
                        type='text' 
                        name="instructions" 
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Picture: </Form.Label>
                    <Form.Control 
                        type='file' 
                        name="picture" 
                        onChange={(e) => setFile(e.target.files[0])} 
                    />
                </Form.Group>

                <br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
        
    )
}
