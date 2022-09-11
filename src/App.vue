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
  background: #56BEEB;
  color: #fff;
  font-family: 'Passion One', cursive;
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
