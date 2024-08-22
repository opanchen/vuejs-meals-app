<script setup lang="ts">
type Props = {
    href: string
}

const props = defineProps<Props>()

</script>

<template>
    <a :href="props.href" target="_blank" rel="nofollow noopener noreferrer"
        class="text-[14px] px-3 py-2 rounded-lg border-2 border-red-600 text-white bg-red-500 hover:bg-red-600 focus-visible:bg-red-600 transition-colors">
        <slot>YouTube</slot>
    </a>
</template>