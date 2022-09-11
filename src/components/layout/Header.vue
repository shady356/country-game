<template>
  <header class="header">
    <ul class="header__list">
      <li class="header__list-item"><div>poeng</div></li>
      <li class="header__list-item"><div>riktige</div></li>
      <li class="header__list-item"><div>tid</div></li>
    </ul>
    <BaseButton class="header__button" theme="cta">
      Ferdig
    </BaseButton>
  </header>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  color: #333;
  padding: var(--size-4) var(--size-5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__list {
    display: flex;
    gap: var(--size-4);
  }
  &__button {
    width: 25%;
  }
}
</style>
