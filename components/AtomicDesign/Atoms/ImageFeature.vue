<template>
  <img :src="image.url ? image.url : ''" :alt="image.alt ? image.alt : ''" :class="image.class ? image.class : ''">
</template>

<script>
export default {
  name: 'ImageFeature',
  props: ['image'],
}
</script>

<style scoped>
img {
    width: 100%;
    height: 20rem;
    margin: 0;
    padding: 0;
    vertical-align: top;
    object-fit: cover;
    background-position: center center;
}
</style>