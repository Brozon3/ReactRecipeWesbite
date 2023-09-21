import './App.css';
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
    setRecipes(recipes.filter(recipe => recipe.name !== recipeName));
    console.log(recipes); 
  };

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} remove={removeRecipes}/>}></Route>
          <Route path="/add" element={<AddRecipe recipes={recipes}/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;