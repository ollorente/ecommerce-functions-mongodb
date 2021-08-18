<template>
	<form @submit.prevent="searchQ" :keyup.enter="searchQ">
		<i class="fas fa-search"></i>
		<input type="search" placeholder="Buscar producto..." v-model="q" />
	</form>
</template>

<script>
export default {
	name: 'Search',
	props: {
		search: String,
	},
	data() {
		return {
			q: null,
		}
	},
	methods: {
		async searchQ() {
			console.log(`Buscando... ${this.q}`)
			this.q = ''

			await this.$router.replace('/buscar')
		},
	},
}
</script>

<style scoped></style>
