<template>
  <input
    class="base-input"
    type="text"
    placeholder="Skriv land"
    spellcheck='false'
    autocomplete="false"
    @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.base-input {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: var(--size-3);
  padding: var(--size-3) var(--size-5);
  font-family: 'Passion One', cursive;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
