import React from "react";
import useRecipeStore from "../components/recipeStore";
import { useNavigate } from "react-router-dom";
function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          deleteRecipe(recipeId);
          navigate("/");
        }}
      >
        Delete Recipe
      </button>
    </>
  );
}

export default DeleteRecipeButton;
