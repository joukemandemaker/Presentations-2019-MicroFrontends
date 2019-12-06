import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import loadModule from '@/modules/module-loader';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/service-1",
    name: "Service1",
    component: () => loadModule("service1").then(() => Vue.component("Service1Page"))
  },
  {
    path: "/service-2",
    name: "Service2",
    component: () => loadModule("service2").then(() => Vue.component("Service2Page"))
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
