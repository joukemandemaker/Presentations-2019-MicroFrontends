import Vue from "vue";
import Service1Page from "./Service1Page.vue";

const components: any = {
  Service1Page
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
