<template>
  <div class="container">
    <div>
      <ImageFeature :image="image" />
      <TitleH1 :title1="title1" />
      <TitleH2 :title2="title2" />
      <TitleH3 :title3="title3" />
      <TitleH4 :title4="title4" />
      <TitleH5 :title5="title5" />
      <TitleH6 :title6="title6" />
    </div>
  </div>
</template>

<script>
import ImageFeature from '~/components/AtomicDesign/Atoms/ImageFeature'
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'
import TitleH2 from '~/components/AtomicDesign/Atoms/TitleH2'
import TitleH3 from '~/components/AtomicDesign/Atoms/TitleH3'
import TitleH4 from '~/components/AtomicDesign/Atoms/TitleH4'
import TitleH5 from '~/components/AtomicDesign/Atoms/TitleH5'
import TitleH6 from '~/components/AtomicDesign/Atoms/TitleH6'

export default {
  components: {
    ImageFeature,
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
    TitleH6,
  },
  data() {
    return {
      title1: {
        name: 'Home',
        class: 'title'
      },
      title2: {
        name: 'Section',
        class: 'section'
      },
      title3: {
        name: 'Item',
        class: 'item'
      },
      title4: {
        name: 'section',
        class: 'section'
      },
      title5: {
        name: 'item',
        class: 'item'
      },
      title6: {
        name: 'Home',
        class: 'title'
      },
      image: {
        url: 'https://res.cloudinary.com/un1c0lm4y0r/image/upload/v1607720004/categorias/objetos/ciencias-sociales-y-humanas_dglmzk.jpg',
        alt: '',
        class: '',
      }
    }
  }
}
</script>

<style></style>
