import { IState, Meal } from './types'

export function setSearchedMeals(state: IState, meals: Meal[]) {
  state.searchedMeals.data = meals
}

export function setMealsByLetter(state: IState, meals: Meal[]) {
  state.mealsByLetter.data = meals
}

export function setMealsByIngredient(state: IState, meals: Meal[]) {
  state.mealsByIngredient.data = meals
}
