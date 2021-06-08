<template>
  <h5 :class="title5.class ? title5.class : ''">{{ title5.name ? title5.name : '' }}</h5>
</template>

<script>
export default {
  name: 'TitleH5',
  props: ['title5'],
}
</script>

<style scoped>
h5 {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}
</style>