import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'

const HomePage = () => import('../views/Home.vue')
const IngredientsPage = () => import('../views/Ingredients.vue')
const MealsByNamePage = () => import('../views/MealsByName.vue')
const MealsByLetterPage = () => import('../views/MealsByLetter.vue')
const MealsByCategoryPage = () => import('../views/MealsByCategory.vue')
const MealsByIngredientPage = () => import('../views/MealsByIngredient.vue')
const MealDetailsPage = () => import('../views/MealDetails.vue')

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByNamePage
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetterPage
      },
      {
        path: '/by-category/:category',
        name: 'byCategory',
        component: MealsByCategoryPage
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredientPage
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: IngredientsPage
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetailsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
