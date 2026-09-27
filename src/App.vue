<script setup>
import { onMounted, ref, provide, inject } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

const baseUrl = inject('baseUrl')

const isMobile = ref(window.innerWidth < 1024)
const windowWidth = ref(window.innerWidth)
const isMobileLandscape = ref(
  screen.orientation.type.includes('landscape') && window.innerHeight < 600,
)

const checkOrientation = () => {
  isMobileLandscape.value =
    screen.orientation.type.includes('landscape') && window.innerHeight < 600
}

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 1024
  windowWidth.value = window.innerWidth
  checkOrientation()
})
</script>

<template>
  <div v-if="isMobileLandscape" class="rotate-warning">
    <h2>For best user experience,<br />landscape view is not supported on mobile devices.</h2>
    <p>Please rotate your mobile device to portrait view.</p>
  </div>

  <MainHeader :isMobile="isMobile" />

  <RouterView id="view" :isMobile="isMobile" :class="isMobile ? 'mobile' : ''" />

  <MainFooter :isMobile="isMobile" />
</template>

<style scoped>
#view {
  position: fixed;
  top: 10em;
  right: 0;
  left: 0;
  bottom: 4em;
  max-height: calc(100vh - 14em);
  overflow: hidden auto;
}

.rotate-warning {
  position: fixed;
  inset: 0;
  background-color: #1a1a1a;
  color: #fff;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
  background-position-y: top;
  font-size: 12px;
}
</style>
