<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealList from '../components/MealList.vue';
import FallbackMessage from '../components/FallbackMessage.vue';

const meals = computed(() => store.state.mealsByIngredient.data)

const route = useRoute()

const id = route.params.ingredient

onMounted(async () => {
    store.dispatch('searchMealsByIngredient', id)
})
</script>

<template>
    <section class="container py-4">
        <template v-if="meals">
            <MealList :meals="meals" />
        </template>
        <template v-else>
            <FallbackMessage :message="'No results for now... Choose another option or try again later.'" />
        </template>
    </section>
</template>