import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../components/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const navigate = useNavigate();
  function viewDetails(id) {
    navigate(`/recipes/${id}`);
  }
  return (
    <div>
      {recipes.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h3>{item.description}</h3>
          <button onClick={() => viewDetails(item.id)}>view details</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
