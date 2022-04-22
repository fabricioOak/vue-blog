<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-fluid">
    <nav class="container mt-4">
      <RouterLink class="text-decoration-none text-muted" to="/"
        >Posts</RouterLink
      >
      <RouterLink class="text-decoration-none text-muted" to="/authors"
        >Authors</RouterLink
      >
    </nav>
  </header>
  <RouterView />
</template>
