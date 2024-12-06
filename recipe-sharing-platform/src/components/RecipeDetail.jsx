import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the recipe by ID
    const recipeDetails = recipeData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    if (recipeDetails) {
      setRecipe(recipeDetails);
    } else {
      navigate("/"); // Redirect if recipe not found
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
