import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";


export const AddRecipe = ({recipes}) => {

    const form = useForm();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors } = formState;

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
        recipes.push(recipe);
        alert("Recipe added succesfully");
        reset();
    };

    const extraIngredients = [];
    const extraInstructions = [];

    const [ingredientArr, setIngredidentArr] = useState(extraIngredients);
    const [instructionArr, setInstructionArr] = useState(extraInstructions);

    const addIngredientInput = () => {
        setIngredidentArr(s => {
            return [
                ...s, {
                    type: "text",
                    value: ""
                }
            ]
        })
    };

    const addInstructionInput = () => {
        setInstructionArr(s => {
            return [
                ...s, {
                    type: "text",
                    value: ""
                }
            ]
        })
    };

    return(
        <div className="container border border-secondary rounded my-2">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add a Recipe</h1>

                <label htmlFor="name">Name: </label>
                <br></br>
                <input type="text" id="name" className="mb-3" {...register("name", {required: {value: true, message:"Recipe name is required."}})}></input>
                <span  style={{color: "red"}}>{errors.name?.message}</span>
                <br></br>
                
                <label htmlFor="description">Description: </label>
                <br></br>
                <input type="text" id="description" className="mb-3" {...register("description", {required: {value: true, message:"Recipe description is required."}})}></input>
                <span  style={{color: "red"}}>{errors.description?.message}</span>
                <br></br>
                
                <label htmlFor="ingredient">Ingredients: </label>
                <br></br>
                <input type="text" id="ingredient" className="my-1" {...register("ingredient", {required: {value: true, message:"At least one ingredient is required."}})}></input>
                <span  style={{color: "red"}}>{errors.ingredients?.message}</span>
                {ingredientArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input id={"ingredient" + i} className="my-1" type={item.type} {...register("ingredient" + i)}></input>
                            <button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" className="btn btn-success mt-1 mb-3" onClick={addIngredientInput}>+</button>
                </div>
        
                <label htmlFor="step">Instructions: </label>
                <br></br>
                <input type="text" id="step" className="my-1" {...register("step", {required: {value: true, message:"At least one instruction is required."}})}></input>
                <span  style={{color: "red"}}>{errors.instructions?.message}</span>
                {instructionArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input id={"step" + i} className="my-1" type={item.type} {...register("step" + i)}></input>
                            <button type="button" className="btn btn-danger mx-1" onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" className="btn btn-success mt-1 mb-3" onClick={addInstructionInput}>+</button>
                </div>
                
                <label htmlFor="pic"> Picture: </label>
                <select id="pic" {...register("pic", {required: {value: true, message:"A picture is required."}})}>
                    <option value="./images/emptyPlate.jfif">Empty Plate</option>
                    <option value="./images/pasta.jfif">Pasta</option>
                    <option value="./images/burger.jfif">Burger</option>
                    <option value="./images/soup.jfif">Soup</option>
                    <option value="./images/salad.jfif">Salad</option>
                    <option value="./images/nachos.jfif">Nachos</option>
                    <option value="./images/sandwich.jfif">Sandwich</option>
                </select>
                <span style={{color: "red"}}>{errors.pic?.message}</span>
                <br></br>
                
                <button className="my-3">Add Recipe</button>
            </form>
            <DevTool control={control}/>
        </div>
      );
}