<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import store from '../store';
import MealList from '../components/MealList.vue';
import FallbackMessage from '../components/FallbackMessage.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals.data)

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    if (typeof route.params.name === 'string') {
        keyword.value = route.params.name
    }

    if (keyword.value) {
        searchMeals()
    }
})

</script>

<template>
    <div class="container py-4">
        <input type="text" class="rounded border-2 border-gray-200 w-full mb-4" placeholder="Search for Meals"
            v-model="keyword" @change="searchMeals" />

        <template v-if="meals && meals.length > 0">
            <MealList :meals="meals" />
        </template>
        <template v-else-if="!route.params.letter">
            <FallbackMessage :message="'Enter your query to search meals...'" />
        </template>
        <template v-else>
            <FallbackMessage :message="'No results for now... Choose another option or try again later.'" />
        </template>
    </div>
</template>
