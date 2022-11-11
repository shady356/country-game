<template>
  <input :class="['base-input', {'base-input--focus': isFocused}]" type="text"
    placeholder="Skriv land" spellcheck='false' autocomplete="false"
    @input="updateValue" @focus="onFocus" @blur="onBlur" />
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
  data() {
    return {
      isFocused: false,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    onFocus() {
      this.isFocused = true
      this.$emit('onFocus')
    },
    onBlur() {
      setTimeout(() => {
        this.isFocused = false
        this.$emit('onBlur')
      }, 100)
    },
  },
}
</script>

<style scoped lang="scss">
.base-input {
  //background: var(--color-base);
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-border);
  //border-radius: var(--size-3);
  padding: var(--size-5) var(--size-8);
  color: var(--color-text);
  font-family: inherit;
  font-size: 22px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  outline-style: none;
  transition: font-size 200ms ease-out;
}

::placeholder {
  color: var(--color-text-light);
}
</style>
