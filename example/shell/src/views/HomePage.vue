<template>
  <div class="home">
    <page-header>
      <template v-slot:image>
        <div class="image-home"></div>
      </template>
      <template v-slot:content>
        <div class="header-logo"></div>
        <h1>Micro frontends</h1>
        <p>
          This demo application shows a simple implementation of micro frontens
          with the Vue framework. It contains the following features:
        </p>
      </template>
    </page-header>

    <div class="container features">
      <div class="feature feature-1">
        <div class="feature-image"></div>
        <div class="feature-caption">
          Use components from other modules
        </div>
      </div>
      <div class="feature feature-2">
        <div class="feature-image"></div>
        <div class="feature-caption">
          Lazy load modules by route
        </div>
      </div>

      <div class="feature feature-3">
        <div class="feature-image"></div>
        <div class="feature-caption">
          Resolve dependency tree
        </div>
      </div>

      <div class="feature feature-4">
        <div class="feature-image"></div>
        <div class="feature-caption">
          Cross module theming
        </div>
      </div>
    </div>
    <div class="logo"></div>
  </div>
</template>

<style scoped lang="scss">
.image-home {
  background: var(--home-header-image, transparent);
  height: 100%;
  width: 100%;
}

.header-logo {
  background: var(--header-logo, transparent);
  height: 50px;
  width: 50px;
}

.features {
  .feature {
    box-sizing: border-box;
    float: left;
    padding: 20px;
    width: 25%;

    .feature-image {
      margin: 0 auto;
      width: 130px;
      height: 130px;
    }

    .feature-caption {
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
    }
  }

  .feature-1 .feature-image {
    background: var(--feature-1-image, transparent);
  }
  .feature-2 .feature-image {
    background: var(--feature-2-image, transparent);
  }
  .feature-3 .feature-image {
    background: var(--feature-3-image, transparent);
  }
  .feature-4 .feature-image {
    background: var(--feature-4-image, transparent);
  }
}
</style>
