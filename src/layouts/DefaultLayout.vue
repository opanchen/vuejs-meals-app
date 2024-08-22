<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <div class="bg-rose-900 min-h-screen">
        <NavBar />
        <main>
            <router-view />
        </main>
    </div>
</template>