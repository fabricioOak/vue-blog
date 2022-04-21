<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-fluid">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Posts</RouterLink>
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
