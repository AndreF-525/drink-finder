import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeServices"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
  categories: Categories,
  drinks: Drinks,
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
  selectRecipe: (id: Drink['idDrink']) => Promise<void>,
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  },
  searchRecipes: async (searchFilters) => {
    const drinks = await getRecipes(searchFilters)
    set({
      drinks
    })
  },
  selectRecipe: async (id) => { 
    const selectedRecipe = await getRecipeById(id)
    console.log(selectedRecipe)
  },
})
