<template>
  <div>

    <h1>Game</h1>
    <div class="map-wrapper">
      <EuropeMap class="map-wrapper__map" />
    </div>
  </div>
</template>

<script>
import EuropeMap from '@/components/EuropeMap'
export default {
  components: {
    EuropeMap
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
</style>
