import React from "react";
import axios from 'axios';

export function RecipeList({recipes}){

    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} picture={recipe.picture} description={recipe.description}/>
        })
    )
};

function Recipe ( {name, ingredients, instructions, picture, description} ){

    const ingredientObjects = ingredients.map(
        (ingredient, i) => ({
            id: i,
            title: ingredient
        })
    );

    const instructionObjects = instructions.map(
        (instruction, i) => ({
            id: i,
            text: instruction
        })
    );

    const removeRecipe = async (name) => {
        await axios.post("/api/removeRecipe", name);
    }

    return(
        
        <div name={name} className="container border border-secondary rounded my-2 w-50" style={{justifyContent: "center"}}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img src={picture} height={200} width={250} alt=""></img>
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3>{name}</h3>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h5>{description}</h5>
                </div>
            </div>
            
            
            <div className="row">
                <div className="col-12">
                    <p>Ingredients:</p>
                    <ul>
                        {ingredientObjects.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p>Instructions:</p>
                    <ul>
                        {instructionObjects.map(instruction => (
                            <li key={instruction.id} type="1">{instruction.text}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <button className="mb-3" onClick={() => removeRecipe(name)}>Remove</button>
                </div>
            </div>
            
    
        </div>   
    )
};

