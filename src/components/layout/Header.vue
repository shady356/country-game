<template>
  <header class="header">
    <ul class="header__list">
      <li class="header__list-item">
        <div>{{$store.state.locale.play.POINTS}}</div>{{correct * 100}}
      </li>
      <li class="header__list-item">
        <div>{{$store.state.locale.play.CORRECT}}</div>
        {{correct}}/{{mapFlag.length}}
      </li>
    </ul>
    <BaseButton class="header__button" theme="cta" @click="gameOver">
      {{$store.state.locale.play.FINISHED}}
    </BaseButton>
  </header>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
export default {
  components: {
    BaseButton,
  },
  props: {
    mapFlag: {
      type: Array,
      required: true,
    },
  },
  computed: {
    correct() {
      const correct = this.mapFlag.filter(country => country.found)
      return correct.length
    },
  },
  methods: {
    gameOver() {
      this.$emit('gameOver')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background: var(--color-base);
  padding: var(--size-4) var(--size-5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__list {
    display: flex;
    gap: var(--size-4);
  }

  &__list-item {
    text-align: center;
  }

  &__button {
    width: 25%;
  }
}
</style>
