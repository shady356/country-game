<template>
  <div>
    <div :key="cacheBust">
      <Header :mapFlag="mapFlag" @gameOver="gameOver" />
      <GameMap :mapFlag="mapFlag" />
      <div class="footer">
        <BaseButton @click="openAnswerModal">Skriv land</BaseButton>
      </div>
    </div>
    <BaseToast v-show="isToast">
      {{toastText}}
    </BaseToast>
    <GameOverModal v-if="isGameOver" />
    <AnswerModal v-if="isAnswerModalOpen" @onSubmitAnswer="submitAnswer" />
  </div>
</template>

<script>
import { countries } from '@/data/countries.js'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseToast from '@/components/base/BaseToast.vue'
import Header from '@/components/layout/Header.vue'
import GameMap from '@/components/GameMap.vue'
import GameOverModal from '@/components/GameOverModal.vue'
import AnswerModal from '@/components/AnswerModal.vue'
export default {
  components: {
    GameMap,
    Header,
    BaseButton,
    BaseToast,
    GameOverModal,
    AnswerModal,
  },
  data() {
    return {
      mapFlag: [],
      mapLoaded: false,
      isToast: false,
      isGameOver: false,
      cacheBust: 0,
      toastText: '',
      isAnswerModalOpen: false,
    }
  },
  created() {
    this.setMapFlag()
  },
  methods: {
    openAnswerModal() {
      this.isAnswerModalOpen = true
    },
    closeAnswerModal() {
      this.isAnswerModalOpen = false
    },
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
    submitAnswer(answerValue) {
      console.log(answerValue)
      const answer = answerValue.toLowerCase()
      if (answer.length > 0) {
        const country = this.isAnswerCorrect(answer)
        if (country) {
          const index = this.findCountryIndexByCountryCode(country.code)
          this.mapFlag[index].found = true
          this.showToast(answerValue)
          this.cacheBust++
        } else {
          this.showToast('Beklager, det landet finnes ikke i europa')
        }
        this.closeAnswerModal()
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
    gameOver() {
      this.isGameOver = true
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 2%;
  left: 5%;
  width: 90%;
}
</style>
