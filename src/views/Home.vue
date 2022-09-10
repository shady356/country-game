<template>
  <div class="home">
    <h1>Kan du alle land i europa?</h1>
    <router-link :to="{name: 'Play'}">
      <button>Play</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
