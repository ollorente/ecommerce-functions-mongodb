<template>
  <h6 :class="title6.class ? title6.class : ''">{{ title6.name ? title6.name : '' }}</h6>
</template>

<script>
export default {
  name: 'TitleH6',
  props: ['title6'],
}
</script>

<style scoped>
h6 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
</style>