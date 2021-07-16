<template>
  <div>
    <div class="container">
      <div class="breadcrumb my-3" style="margin: 2rem 0">
        <b>Búsquedas:</b> relacionadasrepisas - flotantesmesa -
        plegablecamacocina - integraltocador
      </div>
      <div class="my-3 grid col-1 col-sm-2" style="margin: 2rem 0">
        <div class="left span-1">Span</div>
        <div class="right span-1" style="text-align: right">
          <div class="ui-search-view-options__content">
            <div class="ui-search-view-options__title">Ordenar por<!-- --></div>
            <div class="ui-search-view-options__group">
              <div class="ui-search-sort-filter">
                <div class="andes-widther">
                  <div
                    class="andes-dropdown andes-width--100 andes-dropdown--standalone andes-dropdown--compact"
                    width="100"
                    tabindex="0"
                    role="presentation"
                  >
                    <button
                      type="button"
                      class="andes-dropdown__trigger"
                      tabindex="-1"
                    >
                      Más relevantes
                      <div class="andes-dropdown__arrow"></div>
                    </button>
                    <div class="andes-dropdown__popover" style="top: 1.97em">
                      <ul
                        class="andes-list andes-list--size-compact andes-list--dropdown andes-list--selectable"
                      >
                        <li
                          role="presentation"
                          value="relevance"
                          type="standalone"
                          index="0"
                        >
                          <a
                            class="andes-list__item andes-list__item-primary andes-list__item--selected ui-search-link"
                            ><div class="andes-list__item-image-container">
                              <div class="andes-list__item-text">
                                Más relevantes
                              </div>
                            </div></a
                          >
                        </li>
                        <li
                          role="presentation"
                          value="price_asc"
                          type="standalone"
                          index="1"
                        >
                          <a
                            href="https://listado.mercadolibre.com.co/_OrderId_PRICE_Deal_cyberlunes-herramientas"
                            class="andes-list__item andes-list__item-primary ui-search-link"
                            ><div class="andes-list__item-image-container">
                              <div class="andes-list__item-text">
                                Menor precio
                              </div>
                            </div></a
                          >
                        </li>
                        <li
                          role="presentation"
                          value="price_desc"
                          type="standalone"
                          index="2"
                        >
                          <a
                            href="https://listado.mercadolibre.com.co/_OrderId_PRICE*DESC_Deal_cyberlunes-herramientas"
                            class="andes-list__item andes-list__item-primary ui-search-link"
                            ><div class="andes-list__item-image-container">
                              <div class="andes-list__item-text">
                                Mayor precio
                              </div>
                            </div></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ui-search-view-change"
                data-testid="view_change_container"
                aria-hidden="true"
              >
                <a
                  href="https://listado.mercadolibre.com.co/_DisplayType_LF_Deal_cyberlunes-herramientas"
                  class="ui-search-view-change__link ui-search-link"
                  ><svg
                    class="ui-search-list-desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M14.599,1.40067031 L14.599,5.39467031 L14.6,5.39490439 L14.6,6.59490439 L14.599,6.59467031 L14.599,9.39667031 L14.6,9.39755201 L14.6,10.597552 L14.599,10.5966703 L14.599,14.5993297 L1.399,14.5993297 L1.399,1.40067031 L14.599,1.40067031 Z M13.399,10.5966703 L2.599,10.5966703 L2.599,13.3993297 L13.399,13.3993297 L13.399,10.5966703 Z M13.399,6.59467031 L2.599,6.59467031 L2.599,9.39667031 L13.399,9.39667031 L13.399,6.59467031 Z M13.399,2.60067031 L2.599,2.60067031 L2.599,5.39467031 L13.399,5.39467031 L13.399,2.60067031 Z"
                    ></path></svg></a
                ><a
                  href="https://listado.mercadolibre.com.co/_DisplayType_G_Deal_cyberlunes-herramientas"
                  class="ui-search-view-change__link ui-search-view-change__link--active ui-search-link"
                  ><svg
                    class="ui-search-gallery-desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M14.599,14.5993297 L1.399,14.5993297 L1.399,1.40067031 L14.599,1.40067031 L14.599,14.5993297 Z M7.4,8.59867031 L2.598,8.59867031 L2.599,13.3993297 L7.4,13.3986703 L7.4,8.59867031 Z M13.398,8.59867031 L8.6,8.59867031 L8.6,13.3986703 L13.399,13.3993297 L13.398,8.59867031 Z M7.4,2.59967031 L2.599,2.60067031 L2.598,7.39867031 L7.4,7.39867031 L7.4,2.59967031 Z M13.399,2.60067031 L8.6,2.59967031 L8.6,7.39867031 L13.398,7.39867031 L13.399,2.60067031 Z"
                    ></path></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="grid col-1 col-sm-4 col-md-5">
        <Aside />
        <div
          class="span-1 span-sm-1 span-md-1"
          style="
            border: solid 2px var(--white);
            padding: var(--unit);
            border-radius: calc(var(--unit) / 2);
          "
          hidden
        >
          <TitleH1 :title1="title1" />
        </div>
        <div class="span-1 span-sm-3 span-md-4">
          <Cart
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
          <div
            class="grid col-1 col-sm-2 col-md-3 col-lg-4"
            v-for="product in products"
            :key="product.id"
          >
            <CardProduct :product="product" />
          </div>
        </div>
      </main>
    </div>
    <pre class="container" hidden>{{ $data }}</pre>
  </div>
</template>

<script>
import Aside from '~/components/AtomicDesign/Organisms/TheAside'
import CardProduct from '~/components/AtomicDesign/Molecules/CardProduct'
import Cart from '~/components/AtomicDesign/Molecules/Cart'
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'

export default {
  layout: 'main',
	components: {
    Aside,
    CardProduct,
    Cart,
    TitleH1,
  },
  data() {
    return {
      products: [
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950f',
          name: 'Hidrolavadora Eléctrica Takima 1200w 1300psi Altapresión',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_670261-MLA46337584115_062021-V.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950g',
          name: 'Taladro Atornillador 14v Inalambrico 10mm Klatter',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_954049-MLA46337584119_062021-G.webp',
          offer: true,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950h',
          name: 'Juego De Herramienta 85pz Copas Reparación Carro Moto Pretul',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_872984-MLA46337584134_062021-G.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: true,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950i',
          name: 'Soldador Inversor 180a 110/220 Furius Mini Fix 180',
          image:
            'https://http2.mlstatic.com/D_Q_NP_2X_813756-MLA46337485335_062021-V.webp',
          offer: false,
          oldprice: 389900,
          price: 246900,
          shipping: false,
        },
        {
          id: 'd89b24b0-cf0e-11eb-91c8-0957db2a950j',
          name: 'Hidrolavadora Karcher K2 Alu Motor Electrico 1600 Psi',
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

<style scoped>
.ui-search-view-options__content {
  display: -webkit-inline-flex;
  display: inline-flex;
}

.ui-search-view-options__title {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
  margin-right: 6px;
  white-space: nowrap;
}

.ui-search-sort-filter {
  margin-top: 3px;
}

.ui-search-view-options .ui-search-sort-filter .andes-widther {
  width: auto;
}

.ui-search-sort-filter .andes-widther {
  height: 16px;
  width: 120px;
}

.andes-dropdown {
  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  position: relative;
  -webkit-font-smoothing: antialiased;
}

.andes-width--100 {
  width: 100%;
  max-width: none;
}

.ui-search-sort-filter .andes-dropdown--compact .andes-dropdown__trigger {
  padding: 0;
}

.ui-search-view-options .andes-dropdown--compact .andes-dropdown__trigger,
.ui-search-view-options .andes-list__item-text {
  color: #333;
}
.andes-dropdown--compact .andes-dropdown__trigger {
  border: none;
  color: #666;
  padding-left: 0;
}
.andes-dropdown--compact .andes-dropdown__trigger {
  font-size: 14px;
  padding: 6px;
  border-radius: 0.2857142857em;
}
.andes-dropdown--compact button {
  -webkit-order: unset;
  order: unset;
}
.andes-dropdown__trigger {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
  font: inherit;
  font-size: 18px;
  padding: 4px 6px;
  margin: 0;
  border: 0;
  background: none;
  border-radius: 0.2222222222em;
  -webkit-transition: color 0.18s ease-out;
  transition: color 0.18s ease-out;
  outline: 0;
}

.ui-search-sort-filter .andes-dropdown--compact .andes-dropdown__popover {
  margin-left: -10px;
  max-height: 147px;
  padding: 0;
  max-width: 134px;
  min-width: 134px;
}
.andes-dropdown--compact .andes-dropdown__popover {
  padding: 0;
}
.andes-dropdown--compact .andes-dropdown__popover {
  padding: 8px 0;
  border-radius: 0.2857142857em;
  min-width: 9.375em;
  left: -0.6em;
}
.andes-dropdown__popover {
  background-color: #fff;
  overflow: hidden;
  border-radius: 0.2222222222em;
  box-shadow: 0 0.1875em 0.25em 0 rgb(0 0 0 / 10%),
    0 0 0.0625em 0 rgb(0 0 0 / 25%);
  min-width: 12.5em;
  position: absolute;
  display: none;
  left: -1.6em;
}

.ui-search-sort-filter {
  margin-top: 3px;
}

.ui-search-view-change {
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 26px;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.ui-search-view-change .ui-search-view-change__link {
  -webkit-align-items: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  display: -webkit-flex;
  display: flex;
  height: 16px;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 4px;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  width: 16px;
}

a,
a:hover,
a:link,
a:visited {
  text-decoration: none;
}

.ui-search-view-change .ui-search-view-change__link--active,
.ui-search-view-change .ui-search-view-change__link:hover {
  color: #3483fa;
  opacity: 1;
}

.ui-search-view-change .ui-search-view-change__link {
  -webkit-align-items: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  display: -webkit-flex;
  display: flex;
  height: 16px;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 4px;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  width: 16px;
}
a,
a:hover,
a:link,
a:visited {
  text-decoration: none;
}
a {
  color: #3483fa;
  -webkit-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}
</style>
