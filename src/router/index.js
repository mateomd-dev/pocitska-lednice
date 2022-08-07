import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ItemListView from "../views/ItemListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ItemListView,
    }
  ],
});

export default router;
