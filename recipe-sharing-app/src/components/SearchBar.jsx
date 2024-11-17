import React from "react";
import useRecipeStore from "../components/recipeStore";
function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  function handleSearch(event) {
    const term = event.target.value;
    setSearchTerm(term);
    filterRecipes();
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
