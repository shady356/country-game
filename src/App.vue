<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('./style/main.scss');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
  background: #85aca1;
  color: #fff;
  font-family: 'Karla', sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
