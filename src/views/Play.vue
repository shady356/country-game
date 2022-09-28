<template>
  <div>
    <div :key="cacheBust">
      <Header :mapFlag="mapFlag" @gameOver="gameOver" />
      <GameMap :mapFlag="mapFlag" />
      <div :class="['footer', {'footer--active': isAnswerButtonVisible}]">
        <BaseInput class="footer__input" v-model.trim="answerValue" ref="input"
          @onFocus="showAnswerButton" @onBlur="hideAnswerButton" />
        <BaseButton v-if="isAnswerButtonVisible" theme="cta" size="large"
          class="footer__button" @click="submitAnswer()">
          {{$store.state.locale.play.ANSWER}}
        </BaseButton>
      </div>
    </div>
    <BaseToast v-show="isToast">
      {{toastText}}
    </BaseToast>
    <GameOverModal v-if="isGameOver" />
  </div>
</template>

<script>
import { countries } from '@/data/countries.js'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput'
import BaseToast from '@/components/base/BaseToast.vue'
import Header from '@/components/layout/Header.vue'
import GameMap from '@/components/GameMap.vue'
import GameOverModal from '@/components/GameOverModal.vue'
export default {
  components: {
    GameMap,
    Header,
    BaseInput,
    BaseButton,
    BaseToast,
    GameOverModal,
  },
  data() {
    return {
      answerValue: '',
      mapFlag: [],
      mapLoaded: false,
      isToast: false,
      isGameOver: false,
      cacheBust: 0,
      toastText: '',
      isAnswerButtonVisible: false,
    }
  },
  created() {
    this.setMapFlag()
  },
  methods: {
    showAnswerButton() {
      this.isAnswerButtonVisible = true
    },
    hideAnswerButton() {
      this.isAnswerButtonVisible = false
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
    gameOver() {
      this.isGameOver = true
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--size-8);
  padding: var(--size-7);

  &--active {
    height: 100vh;
    background: #00000077;
    padding: 0 var(--size-7);

    .footer__input {
      padding-top: 50%;
    }
  }

  &__input {
    display: flex;
    width: 100%;
  }

  &__button {
    position: relative;
    display: flex;
    width: 30vw;
    z-index: 1;
  }
}
</style>
