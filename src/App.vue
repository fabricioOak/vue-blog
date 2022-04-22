<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-fluid">
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink class="navbar-item" to="/">Posts</RouterLink>
        <RouterLink class="navbar-item" to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
