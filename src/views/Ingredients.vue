<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

import axiosClient from '../axiosClient';
import { Ingredient, IngredientsData } from '../store/types';

const ingredients = ref<Ingredient[]>([])

const keyword = ref('')

const computedIngredients = computed(() => {
    const filteredIngredients = ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
        // || (i.strDescription && i.strDescription.toLowerCase().includes(keyword.value.toLowerCase()))
    )
    return filteredIngredients.length > 0 ? filteredIngredients : ingredients.value
})

onMounted(async () => {
    const { data }: IngredientsData = await axiosClient.get('list.php?i=list')
    ingredients.value = data.meals
})
</script>

<template>
    <section class="container py-4">
        <h1 class="text-4xl font-bold mb-4 text-orange-600">Ingredients</h1>

        <input type="text" class="rounded border-2 border-gray-200 w-full mb-4" placeholder="Search for Ingredients"
            v-model="keyword" />

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li v-for="item in computedIngredients" :key="item.idIngredient"
                class="bg-white rounded mb-3 shadow-lg hover:shadow-sm transition">
                <router-link
                    :to="{ name: 'byIngredient', params: { ingredient: item.strIngredient.toLowerCase().split(' ').join('_') } }"
                    class="block w-full h-full p-3 hover:text-orange-500 focus-visible:text-orange-500 transition-colors">

                    <p class="text-2xl font-bold ">{{ item.strIngredient }}</p>
                </router-link>
            </li>
        </ul>
    </section>
</template>