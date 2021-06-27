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

<style scoped>
form {
	width: 100%;
	margin-left: var(--unit);
	padding: var(--unit);
	background: var(--white);
	border: solid 1px calc(var(--light) / 2);
	border-radius: calc(var(--unit) / 2);
	display: flex;
	align-items: center;
}

form i {
	margin-right: var(--unit);
}

input {
	width: 100%;
	border: 0;
}

input:focus {
	border: 0;
	outline: none;
}
</style>
