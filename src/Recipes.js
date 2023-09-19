export function RecipeList( {recipes} ){

    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} picture={recipe.picture} description={recipe.description}/>
        })
    )
};

function Recipe ( {id, name, ingredients, instructions, picture, description} ){

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
        <div id={id}>
            <br></br>
            <img src={picture} height={200} width={250} alt=""></img>
            <p>{name}</p>
            <p>{description}</p>
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
            <button onClick={e => e.target.parentNode.style.display="none"}>Remove</button>
            <br></br>
        </div>   
    )
};

