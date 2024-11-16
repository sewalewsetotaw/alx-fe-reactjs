import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import useRecipeStore from "../components/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h3>{item.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
