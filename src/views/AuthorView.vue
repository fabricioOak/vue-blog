<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "../store/author";
import { usePostStore } from "../store/posts";
import Author from "../components/Author.vue";

const route = useRoute();
const { authors } = storeToRefs(useAuthorStore());
const { getPostsByAuthor } = storeToRefs(usePostStore());
const { fetchPosts } = usePostStore();

const getAuthorByUserName = computed(() => {
  return authors.value.find(
    (author) => author.username === route.params.username
  );
});

fetchPosts();
</script>

<template>
  <div>
    <Author
      :author="getAuthorByUserName"
      :posts="getPostsByAuthor(getAuthorByUserName.id)"
    />
  </div>
</template>
