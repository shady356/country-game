<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    background: #fff;
    padding: var(--size-2) var(--size-2);
    border-radius: var(--size-6);
    border: 1px solid #D4D9EF;
  }
</style>
