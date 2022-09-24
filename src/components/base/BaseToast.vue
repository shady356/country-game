<template>
  <div class="toast font-title-3">
    <img src="@/assets/checkmark.svg">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: var(--size-4);
  top: 80px;
  max-width: 200px;
  display: flex;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-3) var(--size-4);
  background: var(--color-base);
  border-radius: 20px;
  border: 2px solid var(--color-border);
  animation: scale 3000ms ease-in-out;
}

@keyframes scale {
  0% {
    transform: scale(.5);
  }

  10% {
    transform: scale(1.1);
  }

  18% {
    transform: scale(1);
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
