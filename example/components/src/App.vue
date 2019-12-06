<template>
  <div id="app">
    <CsButton>Default</CsButton>
    <CsButton color="primary">Primary</CsButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CsButton from "./components/CsButton.vue";

@Component({
  components: {
    CsButton
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
