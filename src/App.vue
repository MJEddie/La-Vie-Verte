<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  color: #000;
    font-family: Georgia, "Times New Roman", "Noto Serif JP", "Hiragino Mincho ProN", "Hiragino Mincho Pro";
    background-color: #fff;
    line-height: 1.8em;
}

</style>
