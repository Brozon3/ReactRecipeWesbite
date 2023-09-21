import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";


export const AddRecipe = () => {

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
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
            if (key.includes("ingredient")){
                recipe.ingredients.push(value);
            }
            if (key.includes("step")){
                recipe.instructions.push(value);
            }
        };
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
        <div>

            <h1>Add a Recipe</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name: </label>
                <br></br>
                <input type="text" id="name" {...register("name", {required: {value: true, message:"Recipe name is required."}})}></input>
                <span  style={{color: "red"}}>{errors.name?.message}</span>
                <br></br>
                
                <label htmlFor="description">Description: </label>
                <br></br>
                <input type="text" id="description" {...register("description", {required: {value: true, message:"Recipe description is required."}})}></input>
                <span  style={{color: "red"}}>{errors.description?.message}</span>
                <br></br>
                
                <label htmlFor="ingredient">Ingredients: </label>
                <br></br>
                <input type="text" id="ingredient" {...register("ingredient", {required: {value: true, message:"At least one ingredient is required."}})}></input>
                <span  style={{color: "red"}}>{errors.ingredients?.message}</span>
                {ingredientArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input id={"ingredient" + i} type={item.type} {...register("ingredient" + i)}></input>
                            <button onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" onClick={addIngredientInput}>+</button>
                </div>
        
                <label htmlFor="step">Instructions: </label>
                <br></br>
                <input type="text" id="step" {...register("step", {required: {value: true, message:"At least one instruction is required."}})}></input>
                <span  style={{color: "red"}}>{errors.instructions?.message}</span>
                {instructionArr.map((item, i) => {
                    return(
                        <div key={i}>
                            <input id={"step" + i} type={item.type} {...register("step" + i)}></input>
                            <button onClick={e => e.target.parentNode.remove()}>-</button>
                        </div>
                    )
                })}
                <div>
                    <button type="button" onClick={addInstructionInput}>+</button>
                </div>
                
                <label htmlFor="pic">Picture: </label>
                <select id="pic" {...register("pic", {required: {value: true, message:"A picture is required."}})}>
                    <option value="./images/emptyPlate">Empty Plate</option>
                    <option value="./images/pasta">Pasta</option>
                    <option value="./images/burger">Burger</option>
                    <option value="./images/soup">Soup</option>
                    <option value="./images/salad">Salad</option>
                    <option value="./images/nachos">Nachos</option>
                    <option value="./images/sandwich">Sandwich</option>
                </select>
                <span style={{color: "red"}}>{errors.pic?.message}</span>
                <br></br>
                
                <button>Add Recipe</button>
            </form>
            <DevTool control={control}/>
        </div>
      );
}