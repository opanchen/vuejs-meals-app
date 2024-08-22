<script setup lang="ts">
import { onMounted } from "vue";

import axiosClient from "../axiosClient";
import { ref } from 'vue';
import { MealCategory } from '../store/types';





const categories = ref<MealCategory[]>([])

onMounted(async () => {
    const { data }: { data: { categories: MealCategory[] } } = await axiosClient.get("categories.php");

    categories.value = data.categories

})
</script>

<template>

    <div class="container py-4">
        <h1 class="text-4xl font-bold mb-4 text-orange-600">Categories</h1>

        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            <li v-for="category in categories" :key="category.idCategory"
                class="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-sm transition">
                <router-link :to="{ name: 'byCategory', params: { category: category.strCategory } }"
                    class="inline-flex flex-col w-full h-full group">
                    <div class="w-full h-[320px] md:h-[220px] overflow-hidden">
                        <img :src="category.strCategoryThumb" :alt="category.strCategory"
                            class="h-full w-full object-cover object-center group-hover:scale-110 transition-transform" />
                    </div>

                    <div class="p-3 grow flex flex-col gap-1">
                        <h2 class="font-bold text-[16px] group-hover:text-orange-500 transition-colors">{{
                            category.strCategory }}</h2>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>


</template>