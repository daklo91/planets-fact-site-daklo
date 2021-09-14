import { createRouter, createWebHistory } from "vue-router";
import Mercury from "../views/Mercury.vue";
import Venus from "../views/Venus.vue";

const routes = [
  {
    path: "/",
    redirect: "/mercury",
  },
  {
    path: "/mercury",
    name: "Mercury",
    component: Mercury,
  },
  {
    path: "/venus",
    name: "Venus",
    component: Venus,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
