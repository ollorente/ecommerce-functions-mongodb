<template>
	<ul class="nav__navbar">
		<li class="nav__item" v-for="menu in login_menus" :key="menu.id">
			<nuxt-link :to="`${menu.link}`" class="nav__link"><i v-html="menu.icon"></i> {{ menu.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'LoginMenu',
	props: ['menu'],
	components: {},
	data() {
		return {
			login_menus: [
				{
					id: '1',
					title: 'Crea tu cuenta',
					link: '/cuenta/registrarse',
					icon: null,
				},
				{
					id: '2',
					title: 'Ingresa',
					link: '/cuenta/login',
					icon: null,
				},
				{
					id: '3',
					title: 'Mis compras',
					link: '/cuenta/mis-compras',
					icon: null,
				},
				{
					id: '4',
					title: '',
					link: '/cuenta/carrito-de-compras',
					icon: '<i class="fas fa-shopping-cart"></i>',
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
