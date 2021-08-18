<template>
	<div>
		<transition name="fade">
			<div
				class="
					d-flex
					justify-content-between
					flex-wrap flex-md-nowrap
					align-items-center
					pt-3
					pb-2
					mb-3
					border-bottom
				"
			>
				<h1 class="h2">Profile</h1>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="btn-group me-2">
						<button type="button" class="btn btn-sm btn-outline-secondary">
							Share
						</button>
						<button type="button" class="btn btn-sm btn-outline-secondary">
							Export
						</button>
					</div>
					<button
						type="button"
						class="btn btn-sm btn-outline-secondary dropdown-toggle"
					>
						<span data-feather="calendar"></span>
						This week
					</button>
				</div>
			</div>
{{ profile }}
			<div class="my-5">
				<h1>Profile</h1>
				<p v-if="profile.id">id: {{ profile.id }}</p>
				<p v-if="profile.name">name: {{ profile.name }}</p>
				<p v-if="profile.username">username: {{ profile.username }}</p>
				<p v-if="profile.email">email: {{ profile.email }}</p>
				<p v-if="profile.phone">phone: {{ profile.phone }}</p>
				<p v-if="profile.photoURL">photoURL: {{ profile.photoURL }}</p>
				<p v-if="profile.gravatar">gravatar: {{ profile.gravatar }}</p>
				<p v-if="profile.isActive">isActive: {{ profile.isActive }}</p>
				<p v-if="profile.isLock">isLock: {{ profile.isLock }}</p>
				<p v-if="profile.createdAt">createdAt: {{ profile.createdAt }}</p>
				<p v-if="profile.updatedAt">updatedAt: {{ profile.updatedAt }}</p>
				<p class="my-5">
					<nuxt-link to="/administracion/perfil/editar" class="btn btn-primary"
						>Editar</nuxt-link
					>
				</p>
			</div>
		</transition>
		<pre class="container" hiddens>{{ $data }}</pre>
	</div>
</template>

<script>
export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Perfil © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Perfil',
			},
		],
	},
	layout: 'admin',
	components: {},
	data() {
		return {
			profile: '',
		}
	},
	created() {
		this.getProfile()
	},
	methods: {
		async getProfile() {
			try {
				await this.$axios
					.get(`/users/profile`, {
						headers: {
							'Content-Type': 'application/json',
							Authorization:
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA5Njg5Yzc1ZjUxNjIxNTRmNzdlMzEiLCJpYXQiOjE2MjkyNTgyNTIsImV4cCI6MTYyOTM0NDY1Mn0.5XOW2jXWf5WRSKOsFfmHoCmEUYCi3ocTxQulg_vICL8',
						},
					})
					.then(async (response) => {
						console.log(response.data)
						this.profile = await response.data.data
					})
					.catch((error) => console.error(error))
			} catch (error) {
				console.log(error)
			}
		},
	},
	watch: {
		$route: 'getProfile',
	},
}
</script>

<style scoped></style>
