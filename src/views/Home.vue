<template>
  <div class="home">
    <h1>Kan du alle land i europa?</h1>
    <router-link :to="{name: 'Play'}">
      <BaseButton>Play</BaseButton>
    </router-link>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton'
export default {
  components: {
    BaseButton
  }
}
</script>
