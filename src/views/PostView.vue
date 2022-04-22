<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "../store/author";
import { usePostStore } from "../store/posts";
import Post from "../components/Post.vue";

const route = useRoute();
const { getPostAuthor } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();
const { post, isLoading, hasError } = storeToRefs(usePostStore());
const { fetchPost } = usePostStore();

fetchPost(route.params.id);
fetchAuthors();
</script>

<template>
  <div>
    <p v-if="isLoading" class="text-center">Loading Post...</p>
    <p v-if="hasError" class="text-center">{{ hasError.message }}</p>
    <Post :post="post" :author="getPostAuthor" />
  </div>
</template>
