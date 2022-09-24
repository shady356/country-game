<template>
  <ul class="home-menu">
    <router-link :to="{name: 'Play'}" tag="li" class="home-menu__option">
      <BaseButton size="large" theme="cta">
        {{$store.state.locale.home.START_GAME}}</BaseButton>
    </router-link>
    <router-link :to="{name: 'Play'}" tag="li" class="home-menu__option">
      <BaseButton>{{$store.state.locale.home.BEST_RESULTS}}</BaseButton>
    </router-link>
    <router-link :to="{name: 'Settings'}" tag="li" class="home-menu__option">
      <BaseButton>{{$store.state.locale.home.SETTINGS}}</BaseButton>
    </router-link>
  </ul>
</template>

<script>
import BaseButton from '@/components/base/BaseButton'
export default {
  components: {
    BaseButton,
  },
}
</script>

<style lang="scss" scoped>
.home-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--size-4);

  &__option {
    width: 100%;
  }
}
</style>
