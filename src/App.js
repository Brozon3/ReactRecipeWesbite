import './App.css';
import { RecipeList } from './components/Recipes';
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipe } from './components/addRecipe';
import data from './recipedata.json'

export function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    setRecipes(data)
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
          <Route path="/add" element={<AddRecipe />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;