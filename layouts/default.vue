<template>
  <div>
    <TheNavbar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/AtomicDesign/Organisms/TheFooter'
import TheNavbar from '~/components/AtomicDesign/Organisms/TheNavbar'

export default {
  components: {
    TheFooter,
    TheNavbar,
  },
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
</style>
