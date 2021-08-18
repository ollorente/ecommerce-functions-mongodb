<template>
	<div>
		<header
			class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
		>
			<nuxt-link
				class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-uppercase"
				to="/administracion"
				>Admin</nuxt-link
			>
			<button
				class="navbar-toggler position-absolute d-md-none collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#sidebarMenu"
				aria-controls="sidebarMenu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<input
				class="form-control form-control-dark w-100"
				type="search"
				placeholder="Buscar..."
				aria-label="Buscar..."
			/>
			<div class="navbar-nav">
				<div class="nav-item text-nowrap">
					<button
						class="btn btn-link px-3 text-decoration-none text-white"
						@click="singOut"
					>
						Salir
					</button>
				</div>
			</div>
		</header>

		<div class="container-fluid">
			<div class="row">
				<nav
					id="sidebarMenu"
					class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
				>
					<div class="position-sticky pt-3">
						<ul class="nav flex-column">
							<li class="nav-item" v-for="(link, index) in links" :key="index">
								<nuxt-link class="nav-link active" :to="link.link">
									<span data-feather="home"></span>
									{{ link.title }}
								</nuxt-link>
							</li>
						</ul>
					</div>
				</nav>

				<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
					<Nuxt />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			links: [
				{
					icon: '/',
					link: '/administracion/productos',
					title: 'Productos',
				},
				{
					icon: '/',
					link: '/administracion/ordenes',
					title: 'Órdenes',
				},
				{
					icon: '/',
					link: '/administracion/prfiles-recurrentes',
					title: 'Perfiles recurrentes',
				},
				{
					icon: '/',
					link: '/administracion/tiendas',
					title: 'Tiendas',
				},
				{
					icon: '/',
					link: '/administracion/perfil',
					title: 'Tu perfil',
				},
			],
		}
	},
	methods: {
		async singOut() {},
	},
}
</script>

<style scoped></style>
