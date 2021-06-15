<template>
  <div>
    <ImageFeature :image="image" />
    <div class="container">
      <main class="grid col-3">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </main>
    </div>
  </div>
</template>

<script>
import CardCategory from '~/components/AtomicDesign/Molecules/CardCategory'
import ImageFeature from '~/components/AtomicDesign/Atoms/ImageFeature'

export default {
  components: {
    CardCategory,
    ImageFeature,
  },
  data() {
    return {
      title1: {
        name: 'Home',
        class: 'title',
      },
      title2: {
        name: 'Section',
        class: 'section',
      },
      title3: {
        name: 'Item',
        class: 'item',
      },
      title4: {
        name: 'section',
        class: 'section',
      },
      title5: {
        name: 'item',
        class: 'item',
      },
      title6: {
        name: 'Home',
        class: 'title',
      },
      image: {
        url: 'https://res.cloudinary.com/un1c0lm4y0r/image/upload/v1607720006/categorias/objetos/ingenieria-arquitectura-urbanismo_tciiv3.jpg',
        alt: '',
        class: '',
      },
    }
  },
}
</script>

<style></style>
