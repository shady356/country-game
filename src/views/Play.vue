<template>
  <div :key="cacheBust">
    <Header :mapFlag="mapFlag" />
    <GameMap :mapFlag="mapFlag" />
    <div class="footer">
      <BaseInput class="footer__input" v-model="answerValue" ref="input"/>
      <BaseButton
        theme="cta"
        class="footer__button"
        @click="submitAnswer()"
      >
        Svar
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput'
import BaseButton from '@/components/base/BaseButton.vue'
import GameMap from '@/components/GameMap.vue'
import Header from '@/components/layout/Header.vue'
import { countries } from '@/data/countries.js'
export default {
  components: {
    GameMap,
    Header,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      answerValue: '',
      mapFlag: [],
      mapLoaded: false,
      cacheBust: 0,
    }
  },
  created() {
    this.setMapFlag()
  },
  methods: {
    setMapFlag() {
      this.mapFlag = countries().filter(country => country.group === 'europe')
      this.mapFlag.map(country => Object.assign(country, { found: false }))
      this.mapLoaded = true
    },
    submitAnswer() {
      const country = this.isAnswerCorrect(this.answerValue)
      if (country) {
        const index = this.findCountryIndexByCountryCode(country.code)
        this.mapFlag[index].found = true
        this.answerValue = ''
        this.cacheBust++
      } else {
        console.log('wrong')
      }
    },
    isAnswerCorrect(answer) {
      return this.mapFlag.find(country => {
        return country.accepted.includes(answer)
      })
    },
    findCountryIndexByCountryCode(countryCode) {
      return this.mapFlag.findIndex(country => country.code === countryCode)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: var(--size-4);
  padding: 0 var(--size-4);
  margin-top: var(--size-4);
  &__input {
    width: 80%;
  }
  &__button {
    width: 20%;
  }
}
</style>
