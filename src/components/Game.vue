<template>
  <div>
    <div class="map-wrapper">
      <EuropeMap class="map-wrapper__map" />
    </div>
    <div class="footer">
      <BaseInput class="footer__input" />
      <BaseButton theme="cta" class="footer__button">Svar</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput'
import EuropeMap from '@/components/EuropeMap'
import BaseButton from '@/components/base/BaseButton.vue'
export default {
  components: {
    BaseInput,
    EuropeMap,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  width: 100%;
  height: 450px;
  overflow: hidden;
  &__map {
    width: 100%;
    background: orange;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  gap: var(--size-2);

  &__input {
    width: 80%;
  }
  &__button {
    width: 20%;
  }
}
</style>
