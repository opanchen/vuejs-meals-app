<script setup lang="ts">
import { useRoute } from 'vue-router';

const links = [
    {
        label: 'Home',
        routeName: 'home',
    },
    {
        label: 'Search',
        routeName: 'byName',
    },
    {
        label: 'Search by letter',
        routeName: 'byLetter',
    },
    {
        label: 'Ingredients',
        routeName: 'ingredients',
    },
]

const route = useRoute();


</script>

<template>
    <header class="bg-rose-800 text-white shadow-md">
        <nav class="container">
            <ul class="relative flex flex-col items-end md:flex-row">
                <li v-for="(link, idx) in links" :key="link.label" class=""
                    :class="{ 'absolute left-0 top-0 md:relative md:mr-auto': idx === 0 }">
                    <router-link :to="{ name: link.routeName }"
                        class="relative inline-flex md:text-center px-3 py-1 md:py-4 hover:bg-orange-500 hover:text-white focus-visible:bg-orange-500 focus-visible:text-white h-full"
                        :class="{ 'nav-link-current': route.name === link.routeName && idx !== 0, 'home-link-current': route.name === link.routeName && idx === 0 }">{{
                            link.label
                        }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.home-link-current::after {
    content: '';
    @apply absolute bottom-0 left-0 w-full h-1 bg-orange-500;
}

.nav-link-current::after {
    content: '';
    @apply absolute bottom-1/2 smOnly:translate-y-1/2 right-0 md:bottom-0 md:left-0 w-1 h-[70%] md:w-full md:h-1 bg-orange-500;
}
</style>