<script setup lang="ts">
import { Meal } from '../store/types';
import YouTubeButton from './YouTubeButton.vue';

type Props = {
    meal: Meal
}

const props = defineProps<Props>()

</script>

<template>
    <li class="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-sm transition">
        <router-link :to="{ name: 'mealDetails', params: { id: props.meal.idMeal } }"
            class="inline-flex flex-col w-full h-full group">
            <div class="w-full h-[320px] md:h-[220px] overflow-hidden">
                <img :src="props.meal.strMealThumb" :alt="props.meal.strMeal"
                    class="h-full w-full object-cover object-center group-hover:scale-110 transition-transform" />
            </div>

            <div class="p-3 grow flex flex-col gap-1">
                <h2 class="font-bold text-[16px] group-hover:text-orange-500">{{ props.meal.strMeal }}</h2>

                <div class="flex items-center justify-between mt-auto">
                    <YouTubeButton v-if="props.meal.strYoutube" :href="props.meal.strYoutube" />
                </div>
            </div>
        </router-link>
    </li>
</template>