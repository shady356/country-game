<template>
  <button :class="['base-button no-select', sizeStyle, shapeStyle, themeStyle]"
    @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: 'medium',
    },
    shape: {
      type: String,
      required: false,
      default: 'round',
    },
    theme: {
      type: String,
      required: false,
      default: 'standard',
    },
  },
  computed: {
    sizeStyle() {
      return `base-button--size-${this.size}`
    },
    shapeStyle() {
      return `base-button--shape-${this.shape}`
    },
    themeStyle() {
      return `base-button--theme-${this.theme}`
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
.base-button {
  display: flex;
  border: 1px solid transparent;
  font-family: var(--default-font-family);
  font-weight: 900;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transform: perspective(1px);
  transition: transform 100ms ease-out;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-tap-highlight-color: transparent;
  backface-visibility: hidden;
  outline: none;
  cursor: pointer;

  &--size-small {
    padding: var(--size-1) var(--size-3);
  }

  &--size-medium {
    padding: var(--size-3) var(--size-6);
    font-size: var(--size-5);
  }

  &--size-large {
    padding: var(--size-4) var(--size-8);
    font-size: var(--size-6);
  }

  &--size-huge {
    padding: var(--size-5) var(--size-9);
    font-size: var(--size-7);
  }

  &--shape-round {
    border-radius: var(--size-9);
  }

  &--shape-square {
    border-radius: var(--size-4);
  }

  &--theme-cta {
    background: var(--color-cta);
    color: var(--color-cta-text);
    border: none;
  }

  &--theme-standard {
    background: var(--color-base);
    border-color: var(--color-border);
    color: var(--color-text);
  }

  &:active {
    filter: brightness(1.04);
    transform: scale(1.05) translateZ(0);
    transition: transform 100ms ease-in;
  }
}
</style>
