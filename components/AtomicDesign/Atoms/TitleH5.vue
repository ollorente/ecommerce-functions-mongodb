<template>
  <h5 :class="title5.class ? title5.class : ''">
    {{ title5.name ? title5.name : '' }}
  </h5>
</template>

<script>
export default {
  name: 'TitleH5',
  props: ['title5'],
}
</script>

<style scoped></style>
