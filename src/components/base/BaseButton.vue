<template>
  <button class="base-button font-label-big" @click="click"><slot /></button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  background: #fff;
  color: #333;
  border: 1px solid #333;
  border-radius: var(--size-9);
  padding: var(--size-3) var(--size-6);
}
</style>
