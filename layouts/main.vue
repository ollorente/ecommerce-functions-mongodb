<template>
  <div>
    <HeaderMain />
    <HeaderMenu />
    <HeaderInfo />
    <div class="container">
      <main>
        <Nuxt />
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import HeaderMain from '~/components/AtomicDesign/Molecules/HeaderMain'
import HeaderMenu from '~/components/AtomicDesign/Molecules/HeaderMenu'
import TheFooter from '~/components/AtomicDesign/Organisms/TheFooter'
import HeaderInfo from '~/components/AtomicDesign/Molecules/HeaderInfo'

export default {
  components: {
    HeaderInfo,
    HeaderMain,
    HeaderMenu,
    TheFooter,
  },
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 32.2rem) !important;
}
</style>
