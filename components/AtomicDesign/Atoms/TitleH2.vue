<template>
  <h2 :class="title2.class ? title2.class : ''">{{ title2.name ? title2.name : '' }}</h2>
</template>

<script>
export default {
  name: 'TitleH2',
  props: ['title2'],
}
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
  font-size: 3rem;
}
</style>