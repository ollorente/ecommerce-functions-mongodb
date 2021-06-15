<template>
	<ul class="nav__navbar">
		<li class="nav__item">
			<a href="#" class="nav__link" @click="showCategories">Categorías</a>
		</li>
		<li class="nav__item" v-for="menu in main_menus" :key="menu.id">
			<nuxt-link :to="`${menu.link}`" class="nav__link">{{ menu.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'MainMenu',
	props: ['menu'],
	components: {},
	data() {
		return {
			main_menus: [
				{
					id: '1',
					title: 'Ofertas',
					link: '/ofertas',
				},
				{
					id: '2',
					title: 'Historial',
					link: '/historial',
				},
				{
					id: '3',
					title: 'Moda',
					link: '/moda',
				},
				{
					id: '4',
					title: 'Vender',
					link: '/vender',
				},
				{
					id: '5',
					title: 'Ayuda /PQR',
					link: '/ayuda',
				},
			],
		}
	},
	methods: {},
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
