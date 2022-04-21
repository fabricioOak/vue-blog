import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    isLoading: false,
    hasError: false,
  }),
  getters: {
    getPostsByAuthor: (state) => {
      return (authorId) => {
        state.posts.filter((post) => post.userId === authorId);
      };
    },
  },
  actions: {
    async fetchPosts() {
      this.posts = [];
      this.isLoading = true;
      try {
        this.posts = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => response.json());
      } catch (err) {
        this.hasError = err;
      } finally {
        this.isLoading = false;
      }
    },
    async fetchPost(id) {
      this.post = null;
      this.isLoading = true;
      try {
        this.post = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((response) => response.json());
      } catch (err) {
        this.hasError = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
