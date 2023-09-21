export function RecipeList({recipes, remove}){

    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} picture={recipe.picture} description={recipe.description} remove={remove}/>
        })
    )
};

function Recipe ( {name, ingredients, instructions, picture, description, remove} ){

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
        
        <div name={name} className="container border border-secondary rounded my-2">
            <br></br>
            <img src={picture} height={200} width={250} alt=""></img>
            <h3>{name}</h3>
            <h5>{description}</h5>
            <p>Ingredients:</p>
            <ul>
                {ingredientObjects.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.title}</li>
                ))}
            </ul>
            <p>Instructions:</p>
            <ul>
                {instructionObjects.map(instruction => (
                    <li key={instruction.id} type="1">{instruction.text}</li>
                ))}
            </ul>
            <button className="mb-3">Remove</button>
            <br></br>
        </div>   
    )
};

