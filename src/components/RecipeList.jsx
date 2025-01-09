import React from "react";

function RecipeList({ recipes, onSelect }) {
  return (
    <div style={{ display: "flex", justifyContent:"center", flexWrap: "wrap", gap: "20px" }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{display: "flex", justifyContent:"center",flexDirection:"column",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
            width: "600px",
          }}
          onClick={() => onSelect(recipe.id)}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3 style={{ paddingTop:"12px",fontSize: "19px" }}>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
