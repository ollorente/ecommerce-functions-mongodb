<template>
	<nav class="navbar navbar-expand-sm navbar-light" style="background: #fded35">
		<div class="container">
			<nuxt-link class="navbar-brand" to="/"
				><img
					src="https://res.cloudinary.com/dbszizqh4/image/upload/v1598678563/favicon-ciudadbusca.svg"
					alt="Logo eCommerce"
					class="img-logo-icon" /><img
					src="https://res.cloudinary.com/dbszizqh4/image/upload/v1598678563/ciudadbusca.svg"
					alt="Logo eCommerce"
					class="img-logo"
			/></nuxt-link>
			<button
				class="navbar-toggler me-n1"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarHeader"
				aria-controls="navbarHeader"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarHeader">
				<form
					class="d-flex w-100 px-3"
					@submit.prevent="goToSearch"
					:keyup="goToSearch"
				>
					<div class="input-group">
						<input
							class="form-control border-0"
							type="search"
							v-model="q"
							placeholder="Buscar producto..."
							aria-label="Buscar producto..."
						/>
						<button class="btn bg-white border-0" type="submit">
							<i class="fas fa-search"></i>
						</button>
					</div>
				</form>
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item" v-for="menu in login_menus" :key="menu.id">
						<nuxt-link
							class="nav-link active"
							aria-current="page"
							:to="`${menu.link}`"
							><i :class="menu.icon"></i> {{ menu.title }}</nuxt-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
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
					link: '/cuenta/mis-compras',
					icon: 'fas fa-shopping-cart',
				},
			],
			q: null,
		}
	},
	methods: {
		async goToSearch() {
			const Q = this.q
			const search = this.$route.params.store ? `/${this.$route.params.store}` : ''

			this.q = null
			this.$router.replace(`${search}/buscar?q=${Q}`)
		},
	},
}
</script>

<style scoped>
.img-logo-icon {
	display: none;
}

.navbar-light .navbar-toggler {
	color: rgba(0, 0, 0, 0.55);
	border: 0;
	margin-right: -0.5rem
}

.navbar-light .navbar-toggler:focus {
	border: 0;
}
</style>
