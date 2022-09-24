<template>
  <button :class="['base-tab', {'base-tab--active': active}]" @click="click()">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      reqiured: false,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss">
.base-tab {
  font-family: inherit;
  padding: var(--size-2) var(--size-5);
  color: var(--color-text-light);
  text-transform: uppercase;
  border: none;
  background: transparent;
  border-radius: var(--size-6);

  &--active {
    background: var(--color-cta);
    color: var(--color-cta-text);
  }
}
</style>
