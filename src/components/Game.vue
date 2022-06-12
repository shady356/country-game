<template>
  <div>

    <h1>Game</h1>
    <div class="map-wrapper">
      <EuropeMap class="map-wrapper__map" />
    </div>
    <input type="text" placeholder="Skriv land">
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
input {
  margin-top: 10px;
  background: #fff;
  border: 1px solid #30E3CA;
  padding: 10px 20px;
  border-radius: 4px;
}
</style>
