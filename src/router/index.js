import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";
import PostView from "../views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PostsView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
  ],
});

export default router;
