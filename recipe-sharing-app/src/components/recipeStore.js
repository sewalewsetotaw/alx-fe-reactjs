import { create } from "zustand";
const useRecipeStore =create(set=>({
    recipes:[],
    addRecipe:(newRecipe)=>set(state=>({recipes:[...state.recipes,newRecipe]})),
    updateRecipe:(updateRecipe)=>set(state=>
        ({recipes:state.recipes.map((recipe)=>recipe.id===updateRecipe.id?{...recipe,...updateRecipe}:recipe),})),  
    deleteRecipe:(id)=>set(state=>
        ({recipes:state.recipes.filter((recipe)=>recipe.id!==id)})),
    setRecipes:(recipes)=>set({recipes}),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )})),
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
          favorites: state.favorites.filter(id => id !== recipeId)
        })),
    recommendations: [],
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
}));
export default useRecipeStore;