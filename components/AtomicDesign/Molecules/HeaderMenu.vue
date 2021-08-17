<template>
	<div>
		<nav
			class="navbar sticky-top navbar-expand-md navbar-light"
			style="background: #fded35"
		>
			<div class="container">
				<button
					class="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style=""
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<NavbarNav :links="linksLeft" class="me-auto mb-2 mb-lg-0" />
					<NavbarNav :links="linksRight" class="d-flex" />
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import NavbarNav from '~/components/AtomicDesign/Molecules/NavbarNav'

export default {
	name: 'HeaderMenu',
	components: {
		NavbarNav,
	},
	data() {
		return {
			router: 'bima',
			linksLeft: [
				{
					dropdown: false,
					icon: 'fas fa-map-marker-alt',
					link: `/${this.$route.params.store}`,
					subLinks: [],
					title: 'Ubicación',
				},
				{
					dropdown: true,
					icon: '',
					link: `/${this.$route.params.store}/categorias`,
					subLinks: [
						{
							icon: '',
							link: `/${this.$route.params.store}/categorias/bebes`,
							title: 'Bebes',
						},
						{
							icon: '',
							link: `/${this.$route.params.store}/categorias/bebes`,
							title: 'Bebes',
						},
					],
					title: 'Categorías',
				},
				{
					dropdown: false,
					icon: '',
					link: `/${this.$route.params.store}/ofertas`,
					subLinks: [],
					title: 'Ofertas',
				},
				{
					dropdown: false,
					icon: '',
					link: `/${this.$route.params.store}/historial`,
					subLinks: [],
					title: 'Historial',
				},
				{
					dropdown: false,
					icon: '',
					link: `/${this.$route.params.store}/moda`,
					subLinks: [],
					title: 'Moda',
				},
				{
					dropdown: false,
					icon: '',
					link: `/${this.$route.params.store}/ayuda`,
					subLinks: [],
					title: 'Ayuda/PQR',
				},
			],
			linksRight: [
				{
					dropdown: false,
					icon: '',
					link: `/opcion`,
					subLinks: [],
					title: 'Opción',
				},
				{
					dropdown: true,
					icon: '',
					link: `#`,
					subLinks: [
						{
							icon: '',
							link: `/perfil`,
							title: 'Perfil',
						},
					],
					title: 'Usuario',
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
.navbar-light .navbar-toggler {
	color: rgba(0, 0, 0, 0.55);
	border: 0;
	margin-right: -1rem;
}

.navbar-light .navbar-toggler:focus {
	border: 0;
}
</style>
