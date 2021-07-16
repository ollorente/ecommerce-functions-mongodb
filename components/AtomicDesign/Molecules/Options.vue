<template>
  <ul class="nav__navbar">
    <li class="nav__item" v-for="menu in option_menus" :key="menu.id">
      <nuxt-link :to="`${menu.link}`" class="nav__link">{{
        menu.title
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Options',
  props: ['options'],
  data() {
    return {
      option_menus: [
        {
          id: '1',
          title: 'Opción 1',
          link: '#opcion-1',
        },
        {
          id: '2',
          title: 'Opción 2',
          link: '#opcion-2',
        },
      ],
    }
  },
}
</script>

<style scoped>
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
  padding: var(--unit);
  font-size: 1rem;
  color: var(--dark);
  border: solid 1px transparent;
  border-radius: calc(var(--unit) / 2);
  cursor: pointer;
}

.nav__link:hover {
  border: solid 1px var(--dark);
}
</style>
