import React from "react";
import recipeData from "../data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <article>
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`} // Navigate to the RecipeDetail page
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              View Details
            </Link>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
