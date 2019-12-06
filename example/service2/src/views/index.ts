import Vue from "vue";
import Service2Page from "./Service2Page.vue";

const components: any = {
  Service2Page
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
