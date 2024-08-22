<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import MealList from '../components/MealList.vue';
import axiosClient from '../axiosClient';
import FallbackMessage from '../components/FallbackMessage.vue';

const meals = ref([])
const route = useRoute()

const category = route.params.category

onMounted(async () => {
    const { data } = await axiosClient.get(`filter.php?c=${category}`)
    meals.value = data.meals
})
</script>

<template>
    <section class="container py-4">
        <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ category }}</h1>

        <template v-if="meals">
            <MealList :meals="meals" />
        </template>
        <template v-else>
            <FallbackMessage :message="'No results for now... Choose another option or try again later.'" />
        </template>
    </section>
</template>