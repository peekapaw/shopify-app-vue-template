<template>
  <div class="w-full inline-block cursor-pointer rounded-md p-2 hover:bg-gray-100">
    <div>
      <div class="flex">
        <div class="flex-none w-20 h-20 relative">
          <div class="w-12 h-12 mt-0 pt-1 text-center rounded-md absolute top-0 right-0 bottom-0 left-0 bg-gray-200">
            <slot name="icon"></slot>
          </div>
        </div>
        <div class="flex-1">
          <div class="text-primary text-sm font-bold">{{ title }}</div>
          <div v-if="description">{{ description }}</div>
          <div v-else><slot></slot></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style lang="scss" scoped></style>
