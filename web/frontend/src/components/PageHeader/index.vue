<template>
    <div class="flex justify-between mb-4">
        <div class="flex-none mr-4">
            <v-btn class="transform-none" color="primary" variant="outlined"
                @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
        </div>
        <div class="text-left flex-1 leading-8">{{ title }}</div>
        <div class="flex-none">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped></style>