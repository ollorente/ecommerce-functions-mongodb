<template>
	<div>
		<div class="container">
			<main class="grid col-1 col-xs-2 col-sm-2 col-md-3 col-lg-4 col-xl-4">
				<CardStore
					v-for="store in stores"
					:key="store.id"
					:store="store"
				/>
				<div class="card" v-if="countStores === 0">
					<img
						src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg"
						alt="No hay nada cerca"
					/>
					<div class="card-body">No hay nada cerca</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import CardStore from '~/components/AtomicDesign/Molecules/CardStore'

export default {
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
