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
  </div>
</template>

<script>
import BaseTabs from '@/components/base/BaseTabs'
import BaseTab from '@/components/base/BaseTab'
import EuropeMap from '@/components/EuropeMap'

export default {
  components: {
    EuropeMap,
    BaseTabs,
    BaseTab
  },
  props: {
    mapFlag: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTabIndex: 0
    }
  },
  methods: {
    isTabSelected(index) {
      return this.selectedTabIndex === index
    },
    selectTab(index) {
      this.selectedTabIndex = index
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
}
</style>
