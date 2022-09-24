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
  font-weight: 400;
}

body {
  font-family: var(--default-font-family);
  margin: 0;
  padding: 0;
  background: var(--color-body);
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

* {
  box-sizing: border-box;
}
</style>
