<template>
  <div class="home">
    <img src="@/assets/app-logo.svg" class="app-logo" alt="app-logo">
    <p class="font-title">{{$store.state.locale.home.MAIN_TITLE}}</p>
    <p class="font-title-2">{{$store.state.locale.home.SUB_TITLE}}</p>
    <HomeMenu class="home__menu" />
  </div>
</template>

<script>
import HomeMenu from '@/components/home/HomeMenu.vue'
export default {
  components: {
    HomeMenu,
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: var(--size-4);
  text-align: center;

  &__menu {
    margin: var(--size-9) 20%;

    &__option {
      width: 100%;
    }
  }
}

.app-logo {
  margin-top: var(--size-9);
}

.font-title {
  margin-top: var(--size-5);
  margin-bottom: var(--size-4);
  color: var(--color-text);
}

.font-title-2 {
  color: var(--color-text);
}
</style>
