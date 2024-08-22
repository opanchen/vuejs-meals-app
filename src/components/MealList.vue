<script setup lang="ts">
import { Meal } from '../store/types';
import MealItem from './MealItem.vue';

type Props = {
    meals: Meal[]
}

const props = defineProps<Props>()
</script>

<template>
    <ul class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <MealItem v-for="meal in props.meals" :key="meal.idMeal" :meal="meal" />
    </ul>
</template>