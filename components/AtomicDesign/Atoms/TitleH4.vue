<template>
  <h4 :class="title4.class ? title4.class : ''">
    {{ title4.name ? title4.name : '' }}
  </h4>
</template>

<script>
export default {
  name: 'TitleH4',
  props: ['title4'],
}
</script>

<style scoped></style>
