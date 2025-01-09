import axios from "axios";

const API_KEY = "c80b5c4f93a540f195bd7a045cf4a6ab"; // Replace with your API key
const BASE_URL = "https://api.spoonacular.com/recipes";

export const searchRecipes = async (query, filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        ...filters, // Filters like vegetarian, low-carb, etc.
        number: 10, // Limit results
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};
