<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('./style/main.scss');

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 900;
  height: 100vh;
}

$color1: hsl(222, 75%, 35%);
$color2: hsl(258, 71%, 52%);

body {
  font-family: var(--default-font-family);
  margin: 0;
  padding: 0;
  background: linear-gradient($color1, $color2);
  color: var(--color-text);
  overscroll-behavior: contain;
  max-width: 1024px;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  line-height: 1;
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
</style>
