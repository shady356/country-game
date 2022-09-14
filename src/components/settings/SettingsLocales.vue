<template>
  <div class="locales-list">
    <button class="locales-list__item" @click="setLocale('no')">
      <img class="locales-list__item-image" :src="getFlag('no')" alt="no">
      <div class="locales-list__item-text font-title-3">
        Norsk
      </div>
    </button>
    <button class="locales-list__item" @click="setLocale('dk')">
      <img class="locales-list__item-image" :src="getFlag('dk')" alt="dk">
      <div class="locales-list__item-text font-title-3">
        Dansk
      </div>
    </button>
    <button class="locales-list__item" @click="setLocale('us')">
      <img class="locales-list__item-image" :src="getFlag('us')" alt="us">
      <div class="locales-list__item-text font-title-3">
        English (US)
      </div>
    </button>
  </div>
</template>

<script>
export default {
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
  &__item {
    display: flex;
    align-items: center;
    gap: var(--size-3);
    background: #f5f5ff;
    border: 1px solid #ddf;
    border-radius: var(--size-7);
    padding: var(--size-4) var(--size-5);
  }
  &__item-image {
    display: block;
    border-radius: var(--size-2);
    width: var(--size-6);
    height: auto;
  }
}
</style>
