<template>
  <div class="bg-light">
    <HeaderMain />
    <transition name="fade">
      <main>
        <Nuxt />
      </main>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import HeaderMain from '~/components/AtomicDesign/Molecules/HeaderMain'
import TheFooter from '~/components/AtomicDesign/Organisms/TheFooter'

export default {
  components: {
    HeaderMain,
    TheFooter,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
  main {
    margin-top: 2rem;
    min-height: calc(100vh - 13.3rem);
  }
</style>
