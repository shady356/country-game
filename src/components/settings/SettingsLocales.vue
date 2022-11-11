<template>
  <div class="locales-list">
    <BaseButton class="locales-list__item" @click="setLocale('no')">
      <img class="locales-list__item-image" :src="getFlag('no')" alt="">
      <div>
        Norsk
      </div>
    </BaseButton>
    <BaseButton class="locales-list__item" @click="setLocale('dk')">
      <img class="locales-list__item-image" :src="getFlag('dk')" alt="">
      <div>
        Dansk
      </div>
    </BaseButton>
    <BaseButton class="locales-list__item" @click="setLocale('us')">
      <img class="locales-list__item-image" :src="getFlag('us')" alt="">
      <div>
        English (US)
      </div>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  components: { BaseButton },
  methods: {
    getFlag(code) {
      return `https://raw.githubusercontent.com/lipis/flag-icons/156838a296451807ba33c4c1c28f491e0fa19e7b/flags/4x3/${code}.svg`
    },
    setLocale(code) {
      this.$store.commit('changeLocale', code)
    },
  },
}
</script>

<style scoped lang="scss">
.locales-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-4);
  margin: var(--size-4);
  font-family: inherit;

  &__item {
    display: flex;
    align-items: center;
    gap: var(--size-3);
  }

  &__item-image {
    display: block;
    border-radius: var(--size-2);
    width: var(--size-6);
    height: auto;
  }
}
</style>
