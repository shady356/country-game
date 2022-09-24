<template>
  <ul class="country-list">
    <li v-for="(country, index) in countries" class="country-list__item"
      :key="country.code">
      <div>
        {{getListNumber(index +1)}}
      </div>
      <div v-if="country.found">
        {{country.name }}
      </div>
      <div v-else>
        ???
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getListNumber(number) {
      if (number < 10) {
        return `0${number}`
      } else {
        return number
      }
    },
  },
}
</script>

<style scoped lang="scss">
.country-list {
  margin: var(--size-4);
  border-radius: 10px;
  overflow-y: scroll;
  height: 420px;
  border: 1px solid var(--color-border);

  &__item {
    display: flex;
    padding: var(--size-4);
    gap: var(--size-4);
    background: var(--color-base);
    font-size: var(--size-4);
  }

  &__item:nth-child(odd) {
    background: var(--color-base-light);
  }
}
</style>
