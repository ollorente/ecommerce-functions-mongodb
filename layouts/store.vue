<template>
  <div>
    <HeaderMain />
    <HeaderMenu />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import HeaderMain from '~/components/AtomicDesign/Molecules/HeaderMain'
import HeaderMenu from '~/components/AtomicDesign/Molecules/HeaderMenu'
import TheFooter from '~/components/AtomicDesign/Organisms/TheFooter'

export default {
  components: {
    HeaderMain,
    HeaderMenu,
    TheFooter,
  },
}
</script>

<style scoped></style>
