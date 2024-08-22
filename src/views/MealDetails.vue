<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import { Meal } from '../store/types';
import YouTubeButton from '../components/YouTubeButton.vue';

type FetchMealByIdData = {
    meals: Meal[]
}

const route = useRoute();

const id = route.params.id

const meal = ref<Meal | null>(null)

onMounted(async () => {
    const { data }: { data: FetchMealByIdData } = await axiosClient.get(`lookup.php?i=${id}`)
    console.log(data.meals[0]);
    meal.value = data.meals[0]

})
</script>

<template>
    <template v-if="meal">
        <div class="container py-4">
            <h1 class="text-5xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
            <img :src="meal.strMealThumb" :alt="meal.strMeal">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <p v-if="meal.strCategory" class="flex justify-center">
                    <span class="font-bold text-orange-500 pr-1">Category: </span> {{ meal.strCategory }}
                </p>

                <p v-if="meal.strTags" class="flex justify-center">
                    <span class="font-bold text-orange-500  pr-1">Tags: </span> {{ meal.strTags }}
                </p>

                <p v-if="meal.strArea" class="flex justify-center">
                    <span class="font-bold text-orange-500  pr-1">Area: </span> {{ meal.strArea }}
                </p>
            </div>

            <p v-if="meal.strInstructions" class="instructions relative pl-4 my-4">{{ meal.strInstructions }}</p>


            <div class="grid grid-cols-1 md:grid-cols-2 smOnly:gap-4">
                <div>
                    <h2 class="text-2xl font-semibold text-orange-500  mb-3">Ingredients</h2>

                    <ul>
                        <template v-for="el in 20" :key="el">
                            <li v-if="meal[`strIngredient${el}`]?.trim()" class="pt-1 px-2 border-[1px]">
                                <span class="md:hidden">
                                    {{ el }}.
                                </span>
                                {{ meal[`strIngredient${el}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold text-orange-500  mb-3">Measures</h2>

                    <ul>
                        <template v-for="el in 20" :key="el">
                            <li v-if="meal[`strMeasure${el}`]?.trim()" class="pt-1 px-2 border-[1px]">
                                <span class="md:hidden">
                                    {{ el }}.
                                </span>
                                {{ meal[`strMeasure${el}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="my-4 flex items-center gap-2">
                <YouTubeButton v-if="meal.strYoutube?.trim()" :href="meal.strYoutube">Go to YouTube</YouTubeButton>

                <a v-if="meal.strSource?.trim()" :href="meal.strSource" target="_blank"
                    rel="nofollow noopener noreferrer"
                    class="text-[14px] px-3 py-2 rounded-lg border-2 border-gray-600 text-white bg-gray-500 hover:bg-gray-600 transition-colors">
                    View the original source
                </a>
            </div>

        </div>
    </template>


    <template v-else>
        <p>
            No info
        </p>
    </template>
</template>

<style scoped>
.instructions::before {
    content: "";
    @apply absolute top-0 left-0 h-full w-1 bg-orange-500;
}
</style>