<template>
  <div>
    <div :key="cacheBust">
      <Header :mapFlag="mapFlag" />
      <GameMap :mapFlag="mapFlag" />
      <div class="footer">
        <BaseInput class="footer__input" v-model.trim="answerValue" ref="input"/>
        <BaseButton
          theme="cta"
          class="footer__button"
          @click="submitAnswer()"
        >
          Svar
        </BaseButton>
      </div>
    </div>
    <BaseToast v-show="isToast">
      {{toastText}}
    </BaseToast>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput'
import BaseButton from '@/components/base/BaseButton.vue'
import GameMap from '@/components/GameMap.vue'
import Header from '@/components/layout/Header.vue'
import { countries } from '@/data/countries.js'
import BaseToast from '../components/base/BaseToast.vue'
export default {
  components: {
    GameMap,
    Header,
    BaseInput,
    BaseButton,
    BaseToast,
  },
  data() {
    return {
      answerValue: '',
      mapFlag: [],
      mapLoaded: false,
      cacheBust: 0,
      isToast: false,
      toastText: '',
    }
  },
  created() {
    this.setMapFlag()
  },
  methods: {
    setMapFlag() {
      this.mapFlag = countries().filter(country => country.group === 'europe')
      this.mapFlag.map(country => Object.assign(country, { found: false }))
      this.sort()
      this.mapLoaded = true
    },
    sort() {
      this.mapFlag.sort((a, b) => {
        return a.name.toString().localeCompare(b.name)
      })
    },
    submitAnswer() {
      if (this.answerValue.length > 0) {
        const country = this.isAnswerCorrect(this.answerValue.toLowerCase())
        if (country) {
          const index = this.findCountryIndexByCountryCode(country.code)
          this.mapFlag[index].found = true
          this.showToast(this.answerValue)
          this.answerValue = ''
          this.cacheBust++
        } else {
          this.showToast('Beklager, det landet finnes ikke i europa')
        }
      }
    },
    isAnswerCorrect(answer) {
      if (answer === '') {
        return false
      }
      return this.mapFlag.find(country => {
        return country.accepted.includes(answer)
      })
    },
    findCountryIndexByCountryCode(countryCode) {
      return this.mapFlag.findIndex(country => country.code === countryCode)
    },
    showToast(text) {
      this.toastText = text
      this.isToast = true
      setTimeout(() => {
        this.isToast = false
        this.toastText = ''
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  bottom: 10px;
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
