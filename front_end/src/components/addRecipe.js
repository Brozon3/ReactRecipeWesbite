import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import axios from "axios";
import { FileUploader } from './FileSelect';

export const AddRecipe = ({updateRecipes}) => {

    const form = useForm();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors } = formState;

    const addToDB = async (newRecipe) => {
        try {
            const response = await axios.post("/api/add", {
            recipe: newRecipe
            });
            const recipes = response.data;
            updateRecipes(recipes);
        } catch (error) {
            console.error(error.response.data);
        }
        
    }

    const onSubmit = (data) => {
        let recipe = {
            name: data.name,
            description: data.description,
            picture: data.pic,
            ingredients: [],
            instructions: []
        };
        for (const [key, value] of Object.entries(data)){
            if (key.includes("ingredient") && value !== ""){
                recipe.ingredients.push(value);
            }
            if (key.includes("step") && value !== ""){
                recipe.instructions.push(value);
            }
        };
        addToDB(recipe);
        alert("Recipe added succesfully");
        reset();
    };


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredientArr, setIngredidentArr] = useState([]);
    const [instructionArr, setInstructionArr] = useState([]);
    const [file, setFile] = useState(null);

    const addIngredientInput = () => {
        setIngredidentArr(s => {
            return [
                ...s, {
                    type: "text"
                }
            ]
        })
    };

    const addInstructionInput = () => {
        setInstructionArr(s => {
            return [
                ...s, {
                    type: "text"
                }
            ]
        })
    };

    return(
        <div className="container border border-secondary rounded my-2 w-50">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add a Recipe</h1>

                <label htmlFor="name">Name: </label>
                <br></br>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="mb-3" 
                    {...register
                        ("name", 
                            {required: {value: true, message:"Recipe name is required."}}
                        )
                    }
                />
                <span style={{color: "red"}}> {errors.name?.message} </span>
                <br></br>

                <label htmlFor="description">Description: </label>
                <br></br>
                <input 
                    type="text" 
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                    className="mb-3" 
                    {...register
                        ("description", 
                            {required: {value: true, message:"Recipe description is required."}}
                        )
                    }
                />
                <span style={{color: "red"}}> {errors.description?.message} </span>
                <br></br>

                <label htmlFor="ingredient">Ingredients: </label>
                <br></br>
                <input 
                    type="text" 
                    id="ingredient" 
                    className="my-1" 
                    {...register
                        ("ingredient", 
                            {required: {value: true, message:"At least one ingredient is required."}}
                        )
                    }
                />
                <span style={{color: "red"}}> {errors.ingredients?.message} </span>
                {ingredientArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input 
                                id={"ingredient" + i} 
                                className="my-1" 
                                type={item.type} 
                                {...register("ingredient" + i)}></input>
                            <button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" className="btn btn-success mt-1 mb-3" onClick={addIngredientInput}>+</button>
                </div>
    
                <label htmlFor="step">Instructions: </label>
                <br></br>
                <input 
                    type="text" 
                    id="step" 
                    className="my-1" 
                    {...register
                        ("step", 
                            {required: {value: true, message:"At least one instruction is required."}}
                        )
                    }
                />
                <span style={{color: "red"}}>{errors.instructions?.message}</span>
                {instructionArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input 
                                id={"step" + i} 
                                className="my-1" 
                                type={item.type} 
                                {...register("step" + i)}></input>
                            <button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" className="btn btn-success mt-1 mb-3" onClick={addInstructionInput}>+</button>
                </div>

                <FileUploader onSelect={file => setFile(file)}/>
                <br></br>
                
                <button className="my-3">Add Recipe</button>
            </form>
            <DevTool control={control}/>
        </div>
      );
}