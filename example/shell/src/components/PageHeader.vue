<template>
  <header class="header">
    <div class="container">
      <div class="image-slot">
        <slot name="image"></slot>
      </div>
      <div class="content-slot">
        <slot name="content"></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {}
</script>

<style lang="scss">
.header {
  background: var(--header-background, #000);

  .container {
    min-height: 300px;
  }

  .image-slot {
    bottom: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
  }

  .content-slot {
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    padding: 30px;
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;

    h1 {
      color: var(--header-heading-color, #fff);
    }
  }
}
</style>
