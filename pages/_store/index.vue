<template>
  <div>
    <ImageFeature :store="store" />
    <div class="container">
      <div class="row">
        <CardCategory
          v-for="category in categories"
          :key="category.id"
          :cart="category"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        />
      </div>
    </div>
    <pre class="container" hidden>{{ $data }}</pre>
  </div>
</template>

<script>
import CardCategory from '~/components/AtomicDesign/Molecules/CardCategory'
import ImageFeature from '~/components/AtomicDesign/Molecules/ImageFeature'

export default {
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Tienda © CiudadBusca.co',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Tienda',
      },
    ],
  },
  layout: 'store',
  components: {
    CardCategory,
    ImageFeature,
  },
  data() {
    return {
      categories: [],
      store: '',
      limit: 20,
      page: 1,
    }
  },
  created() {
    this.getCategories()
    this.getStores()
  },
  methods: {
    async getStores() {
      await this.$axios
        .get(`/stores/${this.$route.params.store}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          if (response.data.data === null || response.data.error) {
            await this.$router.replace('/')
          }

          this.store = await response.data.data
        })
        .catch((error) => console.log(error))
    },
    async getCategories() {
      await this.$axios
        .get(`/categories?limit=${this.limit}&page=${this.page}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          this.categories = await response.data.data
        })
    },
  },
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 52.8rem) !important;
}
</style>
