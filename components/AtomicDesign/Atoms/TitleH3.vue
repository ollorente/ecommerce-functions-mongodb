<template>
  <h3 :class="title3.class ? title3.class : ''">{{ title3.name ? title3.name : '' }}</h3>
</template>

<script>
export default {
  name: 'TitleH3',
  props: ['title3'],
}
</script>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
}
</style>