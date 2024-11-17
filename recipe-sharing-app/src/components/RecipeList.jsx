// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useRecipeStore from "../components/recipeStore";
// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);
//   const navigate = useNavigate();
//   function viewDetails(id) {
//     navigate(`/recipes/${id}`);
//   }
//   return (
//     <div>
//       {recipes.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <h3>{item.description}</h3>
//           <button onClick={() => viewDetails(item.id)}>view details</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
import React from "react";
import useRecipeStore from "../components/recipeStore";
import { useNavigate } from "react-router-dom";
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes
  const navigate = useNavigate();
  function viewDetails(id) {
    navigate(`/recipes/${id}`);
  }
  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "20px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => viewDetails(recipe.id)}>view details</button>
          </div>
        ))
      ) : (
        <p>No recipes found. Try searching for something else!</p>
      )}
    </div>
  );
};

export default RecipeList;
