<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/service-2" class="right">Module 2</router-link>
    <router-link to="/service-1" class="right">Module 1</router-link>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  height: 60px;
  left: 0;
  line-height: 60px;
  position: fixed;
  right: 0;
  top: 0;

  a {
    color: #333;
    font-size: 18px;
    padding: 0 30px;
    text-decoration: none;

    &.right {
      display: block;
      float: right;
    }

    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}
</style>
