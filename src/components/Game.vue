<template>
  <div class="game">
    <div class="map-wrapper">
      <EuropeMap class="map-wrapper__map" :mapFlag="mapFlag" />
    </div>
    <BaseTabs class="select-view-tabs">
      <BaseTab :active="isTabSelected(0)" @click="selectTab(0)">
        Kart
      </BaseTab>
      <BaseTab :active="isTabSelected(1)" @click="selectTab(1)">
        Liste
      </BaseTab>
    </BaseTabs>
    <div class="footer">
      <BaseInput class="footer__input" v-model="answerValue" />
      <BaseButton theme="cta" class="footer__button" @click="submitAnswer()">Svar</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput'
import BaseTabs from '@/components/base/BaseTabs'
import BaseTab from '@/components/base/BaseTab'
import EuropeMap from '@/components/EuropeMap'
import BaseButton from '@/components/base/BaseButton.vue'
export default {
  components: {
    BaseInput,
    EuropeMap,
    BaseButton,
    BaseTabs,
    BaseTab
  },
  data() {
    return {
      selectedTabIndex: 0,
      answerValue: '',
      mapFlag: []
    }
  },
  methods: {
    isTabSelected(index) {
      return this.selectedTabIndex === index
    },
    selectTab(index) {
      this.selectedTabIndex = index
    },
    submitAnswer() {
      console.log(this.answerValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-4);
  .map-wrapper {
    width: 100%;
    height: 450px;
    overflow: hidden;
    &__map {
      width: 100%;
      background: orange;
    }
  }
  .select-view-tabs {
    width: fit-content;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: var(--size-2);
    padding: 0 var(--size-4);

    &__input {
      width: 80%;
    }
    &__button {
      width: 20%;
    }
  }
}
</style>
