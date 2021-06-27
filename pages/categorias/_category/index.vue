<template>
  <div>
    <div class="container">
      <main class="grid col-1 col-sm-4 col-md-5">
        <div
          class="span-1 span-sm-1 span-md-1"
          style="
            border: solid 2px var(--white);
            padding: var(--unit);
            border-radius: calc(var(--unit) / 2);
          "
        >
          <TitleH1 :title1="title1" />
        </div>
        <div class="span-1 span-sm-3 span-md-4">
          <Cart
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </main>
    </div>
    <pre class="container" hidden>{{ $data }}</pre>
  </div>
</template>

<script>
import Cart from '~/components/AtomicDesign/Molecules/Cart'
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'

export default {
  components: {
    Cart,
    TitleH1,
  },
  data() {
    return {
      products: [
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950f',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_670261-MLA46337584115_062021-V.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950g',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_954049-MLA46337584119_062021-G.webp',
          offer: true,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950h',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_872984-MLA46337584134_062021-G.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: true,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950i',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_813756-MLA46337485335_062021-V.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950j',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_624821-MCO45347306299_032021-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950k',
          name: 'Batidora Planetaria 4.5 Litros 380w Tedge',
          image:
            'https://http2.mlstatic.com/D_Q_NP_639660-MCO43427387447_092020-P.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
      ],
      title1: {
        name: 'Categoría',
        class: 'title h5',
      },
    }
  },
}
</script>

<style scoped></style>
