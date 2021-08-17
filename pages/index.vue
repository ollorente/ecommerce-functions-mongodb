<template>
	<div class="container">
		<div class="row">
			<CardStore
				v-for="store in stores"
				:key="store.id"
				:store="store"
				class="col-12 col-sm-6 col-md-4 col-lg-3"
			/>
			<div class="col-12 col-sm-6 col-md-4 col-lg-3" v-if="countStores === 0">
				<div class="card border-0 shadow-sm mb-3">
					<img
						src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg"
						alt="No hay nada cerca"
						class="img-card-store rounded-top"
					/>
					<div class="card-body p-2">No hay nada cerca</div>
				</div>
			</div>
		</div>
		<pre class="container" hidden>{{ $data }}</pre>
	</div>
</template>

<script>
import CardStore from '~/components/AtomicDesign/Molecules/CardStore'

export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Home © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Home',
			},
		],
	},
	components: {
		CardStore,
	},
	data() {
		return {
			stores: [],
			countStores: 0,
			limit: 10,
			page: 1,
		}
	},
	created() {
		this.getStores()
	},
	methods: {
		async getStores() {
			await this.$axios
				.get(`/stores?limit=${this.limit}&page=${this.page}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then(async (response) => {
					this.stores = await response.data.data
					this.countStores = await response.data.count
				})
		},
	},
	watch: {
		$route: ['getStores'],
	},
}
</script>

<style scoped>
main {
	min-height: calc(100vh - 21.5rem) !important;
}

.grid {
	margin-top: 5rem;
}
</style>
