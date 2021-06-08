<template>
  <h1 :class="title1.class ? title1.class : ''">{{ title1.name ? title1.name : '' }}</h1>
</template>

<script>
export default {
  name: 'TitleH1',
  props: ['title1'],
}
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
}
</style>