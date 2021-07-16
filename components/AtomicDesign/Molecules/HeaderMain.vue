<template>
  <div class="header">
    <div class="container">
      <div class="nav__top grid col-1 col-sm-4 col-md-5">
        <span class="nav__top-mobile">
          <i class="fas fa-bars nav__top-icon"></i>
          <nuxt-link
            to="/"
            class="nav__top-left brand span-1 span-sm-1 span-md-1"
            >eC</nuxt-link
          >
        </span>
        <nuxt-link
          to="/"
          class="
            nav__top-no-mobile nav__top-left
            brand
            span-1 span-sm-1 span-md-1
          "
          >eCommerce</nuxt-link
        >
        <div class="nav__top-middle span-1 span-sm-2 span-md-2">
          <form @submit.prevent="goToSearch" :keyup="goToSearch">
            <i class="fas fa-search"></i>
            <input type="search" v-model="q" placeholder="Buscar producto..." />
          </form>
        </div>
        <div class="nav__top-right span-1 span-sm-2 span-md-2">
          <ul class="nav__navbar">
            <li class="nav__item" v-for="menu in login_menus" :key="menu.id">
              <nuxt-link :to="`${menu.link}`" class="nav__link"
                ><i v-html="menu.icon"></i> {{ menu.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  data() {
    return {
      login_menus: [
        {
          id: '4',
          title: '',
          link: '/cuenta/carrito-de-compras',
          icon: '<i class="fas fa-shopping-cart"></i>',
        },
      ],
      q: null,
    }
  },
  methods: {
    async goToSearch() {
      const Q = this.q

      this.q = null
      this.$router.replace(`/buscar?q=${Q}`)
    },
  },
}
</script>

<style scoped>
.header {
  margin: 0;
  padding: calc(var(--unit) / 2) 0;
  background: var(--primary);
  position: fixed;
  height: 56px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 110;
}

.nav__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.nav__top-mobile {
  display: block;
}

.nav__top-no-mobile {
  display: none;
}

.nav__top-left {
  flex: 1;
  padding: 0;
  border: solid 0px var(--light);
}

.brand {
  font-size: calc(var(--unit) * 1.5);
  font-weight: 700;
  color: var(--dark);
  cursor: pointer;
}

.nav__top-middle {
  flex: 4;
  padding: 0;
  border: 0;
  text-align: center;
}

.nav__top-right {
  flex: 1;
  text-align: right;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

form {
  width: 90%;
  margin: calc(var(--unit) / 2) auto;
  padding: calc(var(--unit) / 2);
  background: var(--white);
  border: solid 1px calc(var(--light) / 2);
  border-radius: calc(var(--unit) / 4);
  display: flex;
  align-items: center;
}

form i {
  margin-right: calc(var(--unit) / 2);
}

input {
  width: 100%;
  border: 0;
}

input:focus {
  border: 0;
  outline: none;
}

.nav__navbar {
  margin: 0;
  padding: 0;
}

.nav__item {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}

.nav__link {
  width: 100%;
  margin: 0;
  padding: calc(var(--unit) / 2);
  font-size: var(--unit);
  color: var(--dark);
  border: solid 1px transparent;
  border-radius: calc(var(--unit) / 4);
  cursor: pointer;
}

.nav__link:hover {
  border: solid 1px var(--dark);
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .nav__top-mobile {
    display: none;
  }

  .nav__top-no-mobile {
    display: block;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
