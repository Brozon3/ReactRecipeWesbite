import { RecipeList } from './components/Recipes';
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipe } from './components/addRecipe';
import axios from 'axios';
import { RecipeForm } from './components/recipeForm';


export function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    const loadRecipes = async () => {
      const response = await axios.get("/api/recipes");
      const newRecipes = response.data;
      setRecipes(newRecipes);
    }

    loadRecipes();
    
  }, [recipes.length]);

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} updateRecipes={recipes => setRecipes(recipes)}/>}></Route>
          <Route path="/add" element={<RecipeForm updateRecipes={recipes => setRecipes(recipes)}/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;