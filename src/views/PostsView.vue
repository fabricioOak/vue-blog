<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "../store/posts";

const { posts, isLoading, hasError } = storeToRefs(usePostStore());
const { fetchPosts } = usePostStore();

fetchPosts();
</script>

<template>
  <main>
    <p class="text-center fs-2" v-if="isLoading">Loading...</p>
    <p class="text-center fs-2" v-if="hasError">{{ hasError.message }}</p>
    <div
      class="mx-5 mt-4 border-0 shadow-sm py-4 px-2 card"
      v-for="post in posts"
      :key="post.id"
    >
      <RouterLink
        class="fs-3 text-decoration-none text-black fw-bold card-title"
        :to="`/post/${post.id}`"
        >{{ post.title.toUpperCase() }}</RouterLink
      >
      <p class="card-subtitle">{{ post.body }}</p>
      <span class="mt-2">
        <button class="btn btn-danger">
          <RouterLink
            class="text-decoration-none text-white fw-bold"
            :to="`/post/${post.id}`"
            >Read</RouterLink
          >
        </button>
      </span>
    </div>
  </main>
</template>
