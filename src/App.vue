<template>
  <div>

    <Navbar />

    <main>
      <router-view /> 
    </main>

    <div v-if="$route.path === './'">
      <Hero />
      <Stats />
    </div>

  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Stats from "./components/Stats.vue";
</script>