<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <div class="bg-gray-100 min-h-screen">
        <NavBar />
        <main>
            <router-view />
        </main>
    </div>
</template>