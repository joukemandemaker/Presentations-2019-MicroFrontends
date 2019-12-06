<template>
  <button type="button" v-bind:class="[colorClass]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CsButton extends Vue {
  @Prop({ default: "default" }) public color!: "default" | "primary";

  public get colorClass() {
    switch (this.color) {
      case "primary":
        return "cs-button-primary";
      default:
        return "";
    }
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: #999;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 0.1rem;
  line-height: 1em;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: darken(#999, 10%);
  }

  &.cs-button-primary {
    background-color: var(--primary-color, #43cea2);

    &:hover {
      background-color: var(--primary-color-darker, darken(#43cea2, 10%));
    }
  }
}
</style>
