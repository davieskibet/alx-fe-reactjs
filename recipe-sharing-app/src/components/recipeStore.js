import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      const filteredRecipes = recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes, filteredRecipes };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const filteredRecipes = recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes, filteredRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((recipe) => recipe.id !== id);
      const filteredRecipes = recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes, filteredRecipes };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes };
    }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));
