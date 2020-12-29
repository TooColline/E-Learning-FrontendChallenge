import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Onboarding", // using named routes enables us change the path without refactoring code
    component: () => import("../pages/Dashboard/index.vue"),
    children: [
      {
        path: "step/:id",
        name: "ProgressSteps",
        props: true,
        component: () => import("../components/ProgressSteps/Steps")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
