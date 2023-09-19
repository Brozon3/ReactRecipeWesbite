import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './Recipes';
import { Link } from "react-router-dom";

export function App() {

  let recipeData = [ 
    {
      name: "Family Pizza Night",
      ingredients: ["1 smartphone OR", "1 telephone AND a phonebook"],
      instructions: ["Google/Yellow Pages the closest Dominos and order pizza.", "Send mass text to/call the fam.", "Meet at central location.", "Distribute pizza and cheesy bread.", "Eat until absolutelyStuffed equals true."],
      picture: "./images/family_pizza_night.jfif",
      description: "This recipe is not sponsored by Dominos."
    }, 
    {
      name: "Chocolate Chip Pancakes",
      ingredients: ["1 1/4 cup flour", "1 tbsp sugar", "1 pinch salt", "3 tsp baking powder", "1 cup chocolate chips", "1 egg", "1 cup milk", "2 tbsp oil"],
      instructions: ["Add dry ingredients in one bowl and mix well.", "Mix egg, milk and oil in seperate bowl.", "Combine and mix.", "Ladle onto greased frying pan.", "Add desired amount of chocolate chips.", "Flip when browned.", "Serve with maple syrup."],
      picture: "./images/chocolate_chip_pancakes.jpg",
      description: "Legitmately delicious pancakes, if you read this you should try it out."
    },
    {
      name: "Beer Can Chicken",
      ingredients: ["1 whole chicken", "2 tbsp vegetable oil", "2 tsp salt", "2 tsp black pepper", "1 tsp chilli powder", "1 tsp cayenne powder", "1 tsp garlic powder", "1 can of beer"],
      instructions: ["Remove neck and giblets from chicken and discard. Rince chicken and pat dry.", "Rub chicken lightly with oil then rub inside and out with dry ingredients. Set aside.", "Open beer can and take several gulps until the can is half full. Set aside.", "Grabbing a chicken leg in each hand, plunk the bird cavity over the beer can.", "Transfer the bird-on-a-can to your grill and place in the center, balancing the chicken on it's legs and the beer can.", "Cook the chicken over medium-high, indirect heat until the internal temperature registers 165F or 180F in the thigh.", "Remove from grill and let rest for 10 minutes before carving. Don't drink the rest of the beer."],
      picture: "./images/beer_can_chicken.jfif",
      description: "A whole chicken on a beer can on a BBQ. Even better if the beer is Black Horse (this is not sponsored by Molson)."
    }
  ];

  const [recipes, setRecipes] = useState(null);

  useEffect ( () => {
    setRecipes(recipeData);
  }, []);

  if (recipes == null) return;

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/add">Add Recipe</Link> 
      </nav>
      <h1>Welcome to Pat's Recipe Website</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}