<template>
  <nav>
    <div class="container">
      <div class="nav__top">
        <a href="/" class="nav__top-left brand">eCommerce</a>
        <div class="nav__top-middle">
          <Search :search="q" />
        </div>
        <div class="nav__top-right">
          <Options :options="options" />
        </div>
      </div>
      <div class="nav__bottom">
        <div class="nav__bottom-left">
          <Location :location="location" />
        </div>
        <div class="nav__bottom-middle">
          <MainMenu :menu="menu" />
        </div>
        <div class="nav__bottom-right">
          <LoginMenu :menu="menu" />
        </div>
      </div>
      <Megamenu :menus="menus" v-if="show" />
    </div>
  </nav>
</template>

<script>
import Location from '~/components/AtomicDesign/Molecules/Location'
import LoginMenu from '~/components/AtomicDesign/Molecules/LoginMenu'
import MainMenu from '~/components/AtomicDesign/Molecules/MainMenu'
import Megamenu from '~/components/AtomicDesign/Molecules/Megamenu'
import Options from '~/components/AtomicDesign/Molecules/Options'
import Search from '~/components/AtomicDesign/Molecules/Search'

export default {
  name: 'TheNavbar',
  components: {
    Location,
    LoginMenu,
    MainMenu,
    Megamenu,
    Options,
    Search,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    async getCategories() {
      this.show = !this.show
    },
  },
}
</script>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  background: var(--primary);
}

.nav__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--unit) 0 calc(var(--unit) / 2);
}

.nav__top-left {
  flex: 1;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

.brand {
  font-size: calc(var(--unit) * 3);
  font-weight: 700;
  color: var(--dark);
  cursor: pointer;
}

.nav__top-middle {
  flex: 4;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

.nav__top-right {
  flex: 3;
  text-align: right;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

.nav__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--unit) / 2) 0 0;
}

.nav__bottom-left {
  flex: 1;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

.nav__bottom-middle {
  flex: 4;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}

.nav__bottom-right {
  flex: 3;
  text-align: right;
  padding: calc(var(--unit) / 2) 0;
  border: solid 0px var(--light);
}
</style>
