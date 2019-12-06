<template>
  <div class="module-2-page">
    <page-header>
      <template v-slot:image>
        <div class="image-module-2"></div>
      </template>
      <template v-slot:content>
        <div class="header-logo"></div>
        <h1>Module 2</h1>
        <p>
          This page is from another microservice. This module has a dependency
          on another microservice to show the styled button. This dependency is
          lazy-loaded automatically based on the configuration.
        </p>
      </template>
    </page-header>
    <div class="container features">
      <p>
        Custom button from the components module, themed by using CSS-variables.
      </p>
      <cs-button color="primary">Themed button</cs-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-module-2 {
  background: var(--module-2-header-image, transparent);
  height: 100%;
  width: 100%;
}

.header-logo {
  background: var(--header-logo, transparent);
  height: 50px;
  width: 50px;
}
</style>
