export type Meal = {
  idMeal: string
  strMeal: string
  strInstructions?: string
  strYoutube?: string
  strMealThumb: string
  strCategory?: string
  strArea?: string
  strTags?: string
  strSource?: string
  [key: string]: any
}

export type Ingredient = {
  idIngredient: string
  strDescription: string | null
  strIngredient: string
  strType: string | null
}

export type IngredientsData = {
  data: {
    meals: Ingredient[]
  }
}

export type MealCategory = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface IState {
  searchedMeals: {
    data: Meal[]
  }
  mealsByLetter: {
    data: Meal[]
  }
  mealsByIngredient: {
    data: Meal[]
  }
}
