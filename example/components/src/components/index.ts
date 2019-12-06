import Vue from "vue";
import CsButton from "./CsButton.vue";

const components: any = {
  CsButton
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
