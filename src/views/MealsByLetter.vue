<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import store from '../store';
import MealList from '../components/MealList.vue';
import FallbackMessage from '../components/FallbackMessage.vue';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const route = useRoute()

const meals = computed(() => store.state.mealsByLetter.data)

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
    <section class="container py-4">
        <ul class="flex gap-1 flex-wrap justify-center mb-4">
            <li v-for="letter in letters" :key="letter">
                <router-link :to="{ name: 'byLetter', params: { letter } }"
                    class="inline-block p-1 hover:text-orange-500 hover:scale-125 focus-visible:text-orange-500 focus-visible:scale-125 transition">
                    {{ letter }}
                </router-link>
            </li>
        </ul>

        <template v-if="meals && meals.length > 0">
            <MealList :meals="meals" />
        </template>
        <template v-else-if="!route.params.letter">
            <FallbackMessage :message="'Choose the letter to search meals...'" />
        </template>
        <template v-else>
            <FallbackMessage :message="'No results for now... Choose another option or try again later.'" />
        </template>
    </section>
</template>