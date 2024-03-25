<script setup>
import { RouterView } from 'vue-router'
import WelcomeNavBar from './components/NavBar/WelcomeNavBar.vue'
import Layout from './components/Layout/index.vue'
</script>

<template>
  <Layout>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </Layout>
</template>

<style scoped></style>
