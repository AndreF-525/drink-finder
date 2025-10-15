import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"

type Category = {}

export type RecipeSliceType = {
  categories: Category[],
  fetchCategories: () => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = () => ({
  categories: [],
  fetchCategories: async () => {
    const categories = await getCategories()
    console.log(categories)
  }
  
})
