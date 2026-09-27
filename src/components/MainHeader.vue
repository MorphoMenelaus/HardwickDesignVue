<script setup>
import MainNavbar from '@/components/MainNavbar.vue'

defineProps({
  isMobile: Boolean,
})
</script>

<template>
  <header id="header">
    <RouterLink to="/" title="Home" class="home-icon">
      <img alt="Vue logo" class="logo" src="/icons/vue-logo.svg" />
    </RouterLink>

    <MainNavbar :isMobile="isMobile" />
  </header>
</template>

<style scoped>
#header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 10em;
  padding: 1em;
  overflow: hidden;
  background-color: rgb(2 6 24);
  background-image: linear-gradient(rgb(2 6 24), rgb(15 32 113) 90%);
  border-bottom: 1px rgb(2 6 24) solid;
  display: flex;
  justify-content: center;
}

#header .home-icon {
  margin-right: 2em;
}

.logo {
  width: 8em;
  height: 8em;
  object-fit: contain;
}
</style>
