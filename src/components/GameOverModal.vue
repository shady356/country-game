<template>
  <BaseModal>
    <div class="layout">
      <div class="font-title title">
        Spillet er ferdig
      </div>
      <div class="body">
        <div class="font-title-2">
          Poeng
        </div>
        <div class="font-title-2">
          Riktige
        </div>
      </div>
      <div class="footer">
        <router-link :to="{name: 'Home'}">
          <BaseButton size="large" theme="cta">Hjem</BaseButton>
        </router-link>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseModal from '@/components/base/BaseModal.vue'
export default {
  components: {
    BaseButton,
    BaseModal,
  },
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-9);
}

.title {
  margin-bottom: var(--size-9);
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--size-8);

}
</style>
