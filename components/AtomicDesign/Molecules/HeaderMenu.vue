<template>
	<div class="header">
		<div class="container">
			<div class="nav__bottom">
				<div class="nav__bottom--left">
					<a href="#" class="nav__bottom__link">
						<i class="fas fa-map-marker-alt"></i>
						<div class="bottom-body">
							<span>Ingresa tu</span>
							<span>ubicación</span>
						</div>
					</a>
					<ul class="nav__navbar">
						<li class="nav__item">
							<span class="nav__link" @click="getCategories">Categorías</span>
						</li>
						<li class="nav__item" v-for="menu in main_menus" :key="menu.id">
							<nuxt-link
								:to="`/${router}/${menu.link}`"
								class="nav__link"
								>{{ menu.title }}</nuxt-link
							>
						</li>
					</ul>
				</div>
				<div class="nav__bottom--right">
					<ul class="nav__navbar">
						<li class="nav__item" v-for="menu in option_menus" :key="menu.id">
							<nuxt-link :to="`${menu.link}`" class="nav__link">{{
								menu.title
							}}</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
	data() {
		return {
			router: 'bima',
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
			option_menus: [
				{
					id: '1',
					title: 'Opción 1',
					link: '/opcion-1',
				},
				{
					id: '2',
					title: 'Opción 2',
					link: '/opcion-2',
				},
			],
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
.header {
	width: 100%;
	height: 56px;
	margin-top: 56px;
	padding: calc(var(--unit) / 2) 0;
	background: var(--primary);
}

.nav__bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav__bottom--left {
	display: flex;
	align-items: center;
}

.nav__bottom__link {
	flex: 1;
	width: 100%;
	margin: 0;
	padding: calc(var(--unit) / 3) var(--unit);
	font-size: 1rem;
	color: var(--dark);
	border: solid 1px transparent;
	border-radius: calc(var(--unit) / 4);
	cursor: pointer;
	display: flex;
	align-items: center;
}

.nav__bottom__link:hover {
	border: solid 1px var(--dark);
}

.nav__bottom__link i {
	font-size: calc(var(--unit) * 1.5);
	margin-right: calc(var(--unit) / 2);
}

.bottom-body {
}

.bottom-body span:first-child {
	display: block;
	font-size: 0.8rem;
	font-weight: 400;
}

.bottom-body span:last-child {
	display: block;
	font-size: 0.9rem;
	font-weight: 700;
}

.nav__bottom--right {
}

.nav__navbar {
	display: none;
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
	font-size: 1rem;
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
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
	.nav__navbar {
		display: block;
	}
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
