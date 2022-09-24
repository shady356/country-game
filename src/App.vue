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
  font-weight: 700;
}

body {
  font-family: var(--default-font-family);
  margin: 0;
  padding: 0;
  background: #E4F9F5;
  color: #4a5171;
  overscroll-behavior: contain;
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
  box-sizing: border-box
}
</style>
