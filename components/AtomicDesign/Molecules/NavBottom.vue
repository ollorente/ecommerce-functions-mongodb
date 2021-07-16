<template>
  <div class="nav__bottom">
    <div class="nav__bottom-left" hidden>
      <Location :location="location" />
    </div>
    <div class="nav__bottom-middle">
      <MainMenu :menu="menu" />
    </div>
    <div class="nav__bottom-right" hidden>
      <Options :options="options" />
    </div>
  </div>
</template>

<script>
import Location from '~/components/AtomicDesign/Molecules/Location'
import MainMenu from '~/components/AtomicDesign/Molecules/MainMenu'
import Options from '~/components/AtomicDesign/Molecules/Options'

export default {
  name: 'NavBottom',
  components: {
    Location,
    MainMenu,
    Options,
  },
  data() {
    return {
      show: false,
      options: {
        id: '1',
        title: 'Ofertas',
        link: '/ofertas',
      },
      location: {
        id: '1',
        title: 'Ofertas',
        link: '/ofertas',
      },
      menu: {
        id: '1',
        title: 'Ofertas',
        link: '/ofertas',
      },
      menus: [
        {
          id: '1',
          title: 'Ofertas',
          link: '/ofertas',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.nav__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--unit) / 2) 0 0;
}

.nav__bottom-left {
  flex: 1;
  /* padding: calc(var(--unit) / 2) 0; */
  border: solid 0px var(--light);
}

.nav__bottom-middle {
  flex: 4;
  /* padding: calc(var(--unit) / 2) 0; */
  border: solid 0px var(--light);
}

.nav__bottom-right {
  flex: 3;
  text-align: right;
  /* padding: calc(var(--unit) / 2) 0; */
  border: solid 0px var(--light);
}
</style>
