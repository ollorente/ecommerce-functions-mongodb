<template>
	<div class="grid col-1 col-xs-2 col-sm-1 col-md-3 col-lg-4">
		<transition name="fade">
			<div class="span-xs-2 span-md-2 span-lg-3" style="padding: 1rem">
				<h1>Edit Profile</h1>
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
				<p><nuxt-link to="/administracion/perfil">Volver</nuxt-link></p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Editar perfil © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Editar perfil',
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
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA5Njg5Yzc1ZjUxNjIxNTRmNzdlMzEiLCJpYXQiOjE2MjgyMjY5MzQsImV4cCI6MTYyODMxMzMzNH0.TTmOnBujDK82UxukKLsQ7p7cb9kAGXHKYEEJhJOmeq4',
						},
					})
					.then(async (response) => {
						this.profile = await response.data.data
					})
					.catch((error) => console.error(error))
			} catch (error) {
				console.log(error)
			}
		},
	},
	watch: {
		$route: 'getProfile'
	}
}
</script>

<style scoped></style>
