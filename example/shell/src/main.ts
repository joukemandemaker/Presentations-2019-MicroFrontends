import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import PageHeader from "./components/PageHeader.vue";

Vue.config.productionTip = false;
(window as any).CodeSharp = {
  primaryColor: "#43cea2",
  primaryColorDarker: "#3AB28C"
};

const components: any = {
  PageHeader
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
