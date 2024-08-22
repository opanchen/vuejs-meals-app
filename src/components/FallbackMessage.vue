<script setup lang="ts">
type Props = {
    message: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="flex items-center gap-4">
        <img src="/src/assets/meal-logo.png" alt="Logo" class="w-1/2">

        <p class="text-3xl font-bold mb-4 text-orange-600">{{ props.message }}</p>
    </div>
</template>