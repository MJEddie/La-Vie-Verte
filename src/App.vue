<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Noto+Serif+JP&family=Roboto&display=swap');
@import "~@/assets/all.scss";

#app {
  color: #000;
    font-family: Roboto, "Times New Roman", "Noto Serif JP", sans-serif;
    background-color: #fff;
    line-height: 1.8em;
}

</style>
