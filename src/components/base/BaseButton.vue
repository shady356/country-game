<template>
  <button class="base-button" @click="click"><slot /></button>
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
  border: 1px solid #333;
  border-radius: var(--size-9);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: var(--size-3) var(--size-6);
}
</style>
