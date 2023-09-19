export function RecipeList( props ){

    return (
        props.recipes.map((recipe, i) => {
            return <Recipe name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} picture={recipe.picture} servingSize={recipe.servingSize}/>
        })
    )
};

function Recipe ( {name, ingredients, instructions, picture, servingSize} ){

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
    

    return(
        <div>
            <img src={picture} height={200} width={250} alt=""></img>
            <p>Recipe: {name}</p>
            <p>Ingredients:</p>
            <ul>
                {ingredientObjects.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.title}</li>
                ))}
            </ul>
            <p>Instructions:</p>
            <ul>
                {instructionObjects.map(instruction => (
                    <li key={instruction.id}>{instruction.text}</li>
                ))}
            </ul>
            <p>Serving Size: {servingSize}</p>
            <br></br>
        </div>   
    )
};

