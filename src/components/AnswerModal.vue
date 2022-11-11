<template>
  <transition name="fade">
    <aside class="modal-mask">
      <BaseInput v-model.trim="answerValue" />
      <BaseButton theme="cta" size="large" class="footer__button"
        @click="submitAnswer()">
        {{$store.state.locale.play.ANSWER}}
      </BaseButton>
    </aside>
  </transition>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput'

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      answerValue: '',
    }
  },
  methods: {
    submitAnswer() {
      this.$emit('onSubmitAnswer', this.answerValue)
    },
  },
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  gap: var(--size-7);
}
</style>
