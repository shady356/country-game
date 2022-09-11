<template>
  <button :class="['base-tab', {'base-tab--active': active}]" @click="click()"><slot /></button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      reqiured: false,
      default: false
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  .base-tab {
    font-family: 'Passion One', cursive;
    padding: var(--size-2) var(--size-5);
    color: #616B9C;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    border-radius: var(--size-6);

    &--active {
      background-color: #0be5c8;
      color: #084b42;
    }
  }
</style>
