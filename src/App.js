import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './Recipes';

export function Add() {
  return(
    <div>
      <form>
        <label>Recipe Name</label>
        <input type="text"></input>
      </form>
    </div>
  );
}

export function App() {

  let recipeData = [ 
    {
      name: "Family Pizza Night",
      ingredients: ["a telephone"],
      instructions: ["Google the closest Dominos and order pizza.", "Send mass text to the fam.", "Meet at central location.", "Distribute pizza and cheesy bread.", "Eat until you hate yourself."],
      picture: "./images/family_pizza_night.jfif",
      servingSize: "8"
    }, 
    {
      name: "Chocolate Chip Pancakes",
      ingredients: ["flour", "sugar", "salt", "baking powder", "chocolate chips", "egg", "milk", "oil"],
      instructions: ["Add dry ingredients in one bowl and mix well.", "Mix egg, milk and oil in seperate bowl.", "Combine and mix.", "Ladle onto greased frying pan.", "Add chocolate chips/fruit on top as desired.", "Serve with whip cream and bacon."],
      picture: "./images/chocolate_chip_pancakes.jpg",
      servingSize: "4"
    },
    {
      name: "Beer Can Chicken",
      ingredients: ["whole chicken", "vegetable oil", "salt", "pepper", "chili powder", "cayenne powder", "garlic powder", "can of beer"],
      instructions: ["Remove neck and giblets from chicken and discard. Rince chicken and pat dry. Rub chicken lightly with oil then rub inside and out with dry ingredients. Set aside.", "Open beer can and take several gulps until the can is half full. Set aside.", "Grabbing a chicken leg in each hand, plunk the bird cavity over the beer can. Transfer the bird-on-a-can to your grill and place in the center, balancing with the beer can and the chicken legs.", "Cook the chicken over medium-high, indirect heat until the internal temperature registers 165F or 180F in the thigh.", "Remove from grill and let rest for 10 minutes before carving. Don't drink the rest of the beer."],
      picture: "./images/beer_can_chicken.jfif",
      servingSize: "4-6"
    }
  ];

  const [recipes, setRecipes] = useState(null);

  useEffect ( () => {
    setRecipes(recipeData);
  }, []);

  if (recipes == null) return;

  return (
    <div>
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}