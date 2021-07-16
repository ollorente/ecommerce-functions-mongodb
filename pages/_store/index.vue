<template>
  <div>
    <ImageFeature :image="image" />
    <div class="container">
      <main class="grid col-1 col-xs-2 col-sm-2 col-md-3 col-lg-4 col-xl-4">
        <CardCategory v-for="category in categories" :key="category.id" :cart="category" hidden />
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
      categories: [
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950f',
          name: 'Hidrolavadora Eléctrica Takima 1200w 1300psi Altapresión',
          image: 'https://http2.mlstatic.com/D_Q_NP_639660-MCO43427387447_092020-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950g',
          name: 'Taladro Atornillador 14v Inalambrico 10mm Klatter',
          image: 'https://http2.mlstatic.com/D_Q_NP_2X_634365-MLA46337336545_062021-G.webp',
          offer: true,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950h',
          name: 'Juego De Herramienta 85pz Copas Reparación Carro Moto Pretul',
          image: 'https://http2.mlstatic.com/D_Q_NP_2X_971912-MLA46337584167_062021-V.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: true,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950i',
          name: 'Soldador Inversor 180a 110/220 Furius Mini Fix 180',
          image: 'https://http2.mlstatic.com/D_Q_NP_2X_795168-MCO44369983763_122020-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950j',
          name: 'Hidrolavadora Karcher K2 Alu Motor Electrico 1600 Psi',
          image: 'https://http2.mlstatic.com/D_Q_NP_2X_955315-MCO45245396894_032021-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950k',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image: 'https://http2.mlstatic.com/D_Q_NP_2X_624821-MCO45347306299_032021-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
      ],
      image: {
        url: 'https://res.cloudinary.com/un1c0lm4y0r/image/upload/v1607720006/categorias/objetos/ingenieria-arquitectura-urbanismo_tciiv3.jpg',
        alt: '',
        class: '',
      },
    }
  },
  created() {
    this.getCAtegories()
  },
  methods: {
    async getCAtegories() {
      await this.$axios.get(`/categories`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(async response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
main {
	min-height: calc(100vh - 52.8rem) !important;
}
</style>
