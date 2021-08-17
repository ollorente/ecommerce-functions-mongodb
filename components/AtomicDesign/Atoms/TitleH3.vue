<template>
  <h3 :class="title3.class ? title3.class : ''">
    {{ title3.name ? title3.name : '' }}
  </h3>
</template>

<script>
export default {
  name: 'TitleH3',
  props: ['title3'],
}
</script>

<style scoped></style>
