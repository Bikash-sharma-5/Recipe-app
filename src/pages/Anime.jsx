import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import RecipeDetails from "../components/RecipeDetails";
import { searchRecipes } from "./ApiService";

function Anime() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await searchRecipes(query, { diet: "vegetarian" }); // Add filters here if needed
      setRecipes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectRecipe = (id) => {
    setSelectedRecipe(id);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Finder</h1>
      {selectedRecipe ? (
        <RecipeDetails recipeId={selectedRecipe} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
        </>
      )}
    </div>
  );
}

export default Anime;