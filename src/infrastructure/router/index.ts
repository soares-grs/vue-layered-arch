import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/application/pages/HomeView.vue";
import LoginView from "@/application/pages/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
