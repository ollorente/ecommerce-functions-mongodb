<template>
  <div>
    <HeaderMain />
    <transition name="fade">
      <Nuxt />
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

<style scoped></style>
