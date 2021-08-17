<template>
  <h6 :class="title6.class ? title6.class : ''">
    {{ title6.name ? title6.name : '' }}
  </h6>
</template>

<script>
export default {
  name: 'TitleH6',
  props: ['title6'],
}
</script>

<style scoped></style>
