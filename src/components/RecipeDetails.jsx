import React, { useEffect, useState } from "react";
import { getRecipeDetails } from "../pages/ApiService";

function RecipeDetails({ recipeId, onBack }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getRecipeDetails(recipeId);
        setRecipe(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [recipeId]);

  if (loading) return <p>Loading recipe details...</p>;

  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <button onClick={onBack} style={{ width: "100px", marginBottom: "20px" }}>
        Back
      </button>
      <h1>{recipe.title}</h1>
     <div style={{}}> <img
        src={recipe.image}
        alt={recipe.title}
        style={{ height:"500px", width: "600px", borderRadius: "8px" }}
      /></div>
      <h3 style={{ paddingTop:"10px"}}>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} style={{ fontSize:"40px" }}>{ingredient.original}</li>
        ))}
      </ul>
      <h3 style={{ fontSize:"40px", marginTop:"20px" }}>Instructions:</h3>
      <p style={{ fontSize:"25px" }}>{recipe.instructions || "No instructions available."}</p>
      <h3 style={{ fontSize:"40px", marginTop:"20px" }}>Ready in {recipe.readyInMinutes} minutes</h3>
    </div>
  );
}

export default RecipeDetails;
