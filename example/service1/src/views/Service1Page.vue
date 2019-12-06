<template>
  <div class="module-1-page">
    <page-header>
      <template v-slot:image>
        <div class="image-module-1"></div>
      </template>
      <template v-slot:content>
        <div class="header-logo"></div>
        <h1>Module 1</h1>
        <p>
          This page is from another microservice. This module is lazy loaded
          when navigating to this route.
        </p>
      </template>
    </page-header>
  </div>
</template>

<style scoped lang="scss">
.image-module-1 {
  background: var(--module-1-header-image, transparent);
  height: 100%;
  width: 100%;
}

.header-logo {
  background: var(--header-logo, transparent);
  height: 50px;
  width: 50px;
}
</style>
