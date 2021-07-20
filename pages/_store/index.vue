<template>
  <div>
    <ImageFeature :image="image" />
    <div class="container">
      <main class="grid col-1 col-xs-2 col-sm-2 col-md-3 col-lg-4 col-xl-4">
        <CardCategory v-for="category in categories" :key="category.id" :cart="category" />
      </main>
    </div>
  </div>
</template>

<script>
import CardCategory from '~/components/AtomicDesign/Molecules/CardCategory'
import ImageFeature from '~/components/AtomicDesign/Atoms/ImageFeature'

export default {
  layout: 'store',
  components: {
    CardCategory,
    ImageFeature,
  },
  data() {
    return {
      categories: [],
      image: {
        url: 'https://res.cloudinary.com/dbszizqh4/image/upload/v1562285930/centro-comercial-oulet-bima/tljmkjhkpxcgjr9olmuu.png',
        alt: 'Centro Comercial Oulet Bima',
        class: '',
      },
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    async getCategories() {
      await this.$axios
        .get(`/categories?limit=20`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          this.categories = await response.data.data
        })
    },
  }
}
</script>

<style scoped>
main {
	min-height: calc(100vh - 52.8rem) !important;
}
</style>
