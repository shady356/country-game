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
  background: #E4F9F5;
  color: #4a5171;
  font-family: 'Passion One', cursive;
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
