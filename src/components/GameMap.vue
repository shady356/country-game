<template>
  <div class="game">
    <div class="map-wrapper">
      <EuropeMap v-show="isMapView" class="map-wrapper__map"
        :countryCodeMap="countryCodeMap" />
      <MapListView v-show="isListView" :countries="mapFlag" />
    </div>
    <BaseTabs class="select-view-tabs">
      <BaseTab :active="isTabSelected(0)" @click="selectTab(0)">
        {{$store.state.locale.play.MAP}}
      </BaseTab>
      <BaseTab :active="isTabSelected(1)" @click="selectTab(1)">
        {{$store.state.locale.play.LIST}}
      </BaseTab>
    </BaseTabs>
  </div>
</template>

<script>
import BaseTabs from '@/components/base/BaseTabs'
import BaseTab from '@/components/base/BaseTab'
import EuropeMap from '@/components/EuropeMap'
import MapListView from '@/components/MapListView.vue'

export default {
  components: {
    EuropeMap,
    BaseTabs,
    BaseTab,
    MapListView,
  },
  props: {
    mapFlag: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTabIndex: 0,
    }
  },
  computed: {
    isMapView() {
      return this.selectedTabIndex === 0
    },
    isListView() {
      return this.selectedTabIndex === 1
    },
    countryCodeMap() {
      const mapped = this.mapFlag.map(country => ({ [country.code]: country.found }))
      return Object.assign({}, ...mapped)
    },
  },
  methods: {
    isTabSelected(index) {
      return this.selectedTabIndex === index
    },
    selectTab(index) {
      this.selectedTabIndex = index
    },
  },
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
    }
  }

  .select-view-tabs {
    width: fit-content;
  }
}
</style>
