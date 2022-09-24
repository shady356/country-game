<template>
  <div class="settings">
    <div class="settings__title font-title">Settings</div>
    <section class="section">
      <div class="section__title font-title-2">Språk</div>
      <SettingsLocales />
    </section>
  </div>
</template>

<script>
import SettingsLocales from '@/components/settings/SettingsLocales.vue'
export default {
  components: {
    SettingsLocales,
  },
}
</script>

<style scoped lang="scss">
.settings {
  margin: 4%;

  &__title {
    text-align: center;
    margin-bottom: var(--size-7);
  }

  .section {
    background: var(--color-base);
    border-radius: 20px;
    border: 1px solid var(--color-border);
    padding: 20px;
  }
}
</style>
