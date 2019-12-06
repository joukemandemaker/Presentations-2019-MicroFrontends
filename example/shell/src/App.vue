<template>
  <div class="app">
    <NavBar></NavBar>
    <div class="content-container">
      <router-view />
    </div>
    <div class="theme-switcher">
      <button
        v-if="!isCodeSharp"
        v-on:click="setCodeSharpTheme"
        class="codesharp"
      >
        Code Sharp
      </button>
      <button
        v-if="isCodeSharp"
        v-on:click="setRockstarsTheme"
        class="rockstars"
      >
        Team Rockstars
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
body {
  color: #333;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

p {
  padding: 5px 0;
}

.theme-switcher {
  bottom: 0;
  position: fixed;
  right: 0;

  button {
    background-color: #f2f2f2;
    background-position: right 30px center;
    background-repeat: no-repeat;
    background-size: 32px;
    border: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    filter: grayscale(1);
    outline: none;
    padding: 15px 70px 15px 30px;
    text-align: left;
    width: 220px;

    transition: filter 300ms ease;

    &:active,
    &:focus {
      outline: none;
    }

    &:hover {
      color: rgba(0, 0, 0, 1);
      filter: grayscale(0);
    }

    &.codesharp {
      background-image: url("/images/codesharp/theme-logo.png");
    }

    &.rockstars {
      background-image: url("/images/rockstars/theme-logo.png");
    }
  }
}

.container {
  margin: 0 auto;
  max-width: 800px;
  position: relative;
}

.content-container {
  margin-top: 60px;
}
</style>
