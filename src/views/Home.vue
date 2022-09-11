<template>
  <div class="home">
    <img src="@/assets/app-logo.svg" class="app-logo" alt="app-logo">
    <p class="font-title">EUROPA-QUIZ</p>
    <p class="font-title-2">Kan du navnet på alle<br>landende i Europa?</p>
    <ul class="menu">
      <router-link :to="{name: 'Play'}" tag="li" class="menu__option">
        <BaseButton size="large" theme="cta">Start spill</BaseButton>
      </router-link>
      <router-link :to="{name: 'Play'}" tag="li" class="menu__option">
        <BaseButton>Beste resultater</BaseButton>
      </router-link>
      <router-link :to="{name: 'Play'}" tag="li" class="menu__option">
        <BaseButton>Instillinger</BaseButton>
      </router-link>
    </ul>
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

<style lang="scss" scoped>
.home {
  padding: var(--size-4);
  text-align: center;
}
.app-logo {
  margin-top: var(--size-9);
}
.font-title {
  margin-top: var(--size-5);
  margin-bottom: var(--size-4);
  color: #06587C;
}
.font-title-2 {
  color: #06587C;
}
.menu {
  margin-top: var(--size-9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--size-4);
  margin: 20%;

  &__option {
    width: 100%;
  }
}
</style>
