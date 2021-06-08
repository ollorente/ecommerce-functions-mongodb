<template>
  <div class="row">
    <aside id="column-left" class="col-sm-3 hidden-xs">
      <div class="list-group">
        <a
          href="/categorias/&amp;path=20"
          class="list-group-item active"
          >Desktops (13)</a
        >
        <a
          href="/categorias/&amp;path=20_26"
          class="list-group-item"
          >&nbsp;&nbsp;&nbsp;- PC (0)</a
        >
        <a
          href="/categorias/&amp;path=20_27"
          class="list-group-item active"
          >&nbsp;&nbsp;&nbsp;- Mac (1)</a
        >
        <a
          href="/categorias/&amp;path=18"
          class="list-group-item"
          >Laptops &amp; Notebooks (5)</a
        >
        <a
          href="/categorias/&amp;path=25"
          class="list-group-item"
          >Components (2)</a
        >
        <a
          href="/categorias/&amp;path=57"
          class="list-group-item"
          >Tablets (1)</a
        >
        <a
          href="/categorias/&amp;path=17"
          class="list-group-item"
          >Software (0)</a
        >
        <a
          href="/categorias/&amp;path=24"
          class="list-group-item"
          >Phones &amp; PDAs (3)</a
        >
        <a
          href="/categorias/&amp;path=33"
          class="list-group-item"
          >Cameras (2)</a
        >
        <a
          href="/categorias/&amp;path=34"
          class="list-group-item"
          >MP3 Players (4)</a
        >
      </div>
      <div class="swiper-viewport">
        <div
          id="banner0"
          class="swiper-container swiper-container-horizontal swiper-container-fade"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide swiper-slide-active"
              style="
                width: 255px;
                opacity: 1;
                transform: translate3d(0px, 0px, 0px);
              "
            >
              <a
                href="index.php?route=product/manufacturer/info&amp;manufacturer_id=7"
                ><img
                  src="https://demo.opencart.com/image/cache/catalog/demo/compaq_presario-182x182.jpg"
                  alt="HP Banner"
                  class="img-responsive"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript">
        <!--
        $('#banner0').swiper({
        	effect: 'fade',
        	autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
        -->
      </script>
    </aside>
    <div id="content" class="col-sm-9">
      <h2>Mac</h2>
      <div class="row">
        <div class="col-md-2 col-sm-6 hidden-xs">
          <div class="btn-group btn-group-sm">
            <button
              type="button"
              id="list-view"
              class="btn btn-default"
              data-toggle="tooltip"
              title=""
              data-original-title="List"
            >
              <i class="fa fa-th-list"></i>
            </button>
            <button
              type="button"
              id="grid-view"
              class="btn btn-default active"
              data-toggle="tooltip"
              title=""
              data-original-title="Grid"
            >
              <i class="fa fa-th"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="form-group">
            <a
              href="/compare"
              id="compare-total"
              class="btn btn-link"
              >Product Compare (0)</a
            >
          </div>
        </div>
        <div class="col-md-4 col-xs-6">
          <div class="form-group input-group input-group-sm">
            <label class="input-group-addon" for="input-sort">Sort By:</label>
            <select
              id="input-sort"
              class="form-control"
              onchange="location = this.value;"
            >
              <option
                value="/categorias/&amp;path=20_27&amp;sort=p.sort_order&amp;order=ASC"
                selected="selected"
              >
                Default
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=pd.name&amp;order=ASC"
              >
                Name (A - Z)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=pd.name&amp;order=DESC"
              >
                Name (Z - A)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=p.price&amp;order=ASC"
              >
                Price (Low &gt; High)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=p.price&amp;order=DESC"
              >
                Price (High &gt; Low)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=rating&amp;order=DESC"
              >
                Rating (Highest)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=rating&amp;order=ASC"
              >
                Rating (Lowest)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=p.model&amp;order=ASC"
              >
                Model (A - Z)
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;sort=p.model&amp;order=DESC"
              >
                Model (Z - A)
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-3 col-xs-6">
          <div class="form-group input-group input-group-sm">
            <label class="input-group-addon" for="input-limit">Show:</label>
            <select
              id="input-limit"
              class="form-control"
              onchange="location = this.value;"
            >
              <option
                value="/categorias/&amp;path=20_27&amp;limit=15"
                selected="selected"
              >
                15
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;limit=25"
              >
                25
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;limit=50"
              >
                50
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;limit=75"
              >
                75
              </option>
              <option
                value="/categorias/&amp;path=20_27&amp;limit=100"
              >
                100
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"
        >
          <div class="product-thumb">
            <div class="image">
              <a
                href="/product&amp;path=20_27&amp;product_id=41"
                ><img
                  src="https://demo.opencart.com/image/cache/catalog/demo/imac_1-228x228.jpg"
                  alt="iMac"
                  title="iMac"
                  class="img-responsive"
              /></a>
            </div>
            <div>
              <div class="caption">
                <h4>
                  <a
                    href="/product&amp;path=20_27&amp;product_id=41"
                    >iMac</a
                  >
                </h4>
                <p>
                  Just when you thought iMac had everything, now there´s even
                  more. More powerful Intel Core 2 Duo pro..
                </p>
                <p class="price">
                  $122.00 <span class="price-tax">Ex Tax: $100.00</span>
                </p>
              </div>
              <div class="button-group">
                <button type="button" onclick="cart.add('41', '1');">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="hidden-xs hidden-sm hidden-md">Add to Cart</span>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title=""
                  onclick="wishlist.add('41');"
                  data-original-title="Add to Wish List"
                >
                  <i class="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title=""
                  onclick="compare.add('41');"
                  data-original-title="Compare this Product"
                >
                  <i class="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 text-left"></div>
        <div class="col-sm-6 text-right">Showing 1 to 1 of 1 (1 Pages)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>