import { RecipeList } from './components/Recipes';
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipe } from './components/addRecipe';
import data from './recipedata.json'

export function App() {

  const [recipes, setRecipes] = useState(data);

  useEffect( () => {
    console.log(recipes);
  }, [recipes]);

  const removeRecipes = (recipeName) => {
    let remainingRecipes = [];
    for (let i = 0; i < recipes.length; i++){
      if (recipes[i].name !== recipeName){
        remainingRecipes.push(recipes[i]);
      }
    }
    setRecipes(remainingRecipes);
  };

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} removeRecipes={removeRecipes}/>}></Route>
          <Route path="/add" element={<AddRecipe recipes={recipes}/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;