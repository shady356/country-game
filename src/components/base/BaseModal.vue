<template>
  <div>
    <transition appear name="fade">
      <aside class="modal-mask">
        <transition appear name="fade">
          <div class="modal-card">
            <slot />
          </div>
        </transition>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000aa;
}

.modal-card {
  position: fixed;
  top: 10vh;
  left: 2%;
  width: 96%;
  height: 80vh;
  color: #fff;
  background: linear-gradient(#00000088, #000000aa);
  border-radius: var(--size-6);
}
</style>
