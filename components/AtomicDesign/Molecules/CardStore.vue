<template>
	<nuxt-link
		:to="`/${store.url}`"
		target="_self"
		class="mb-3 text-dark text-decoration-none"
	>
		<div class="card border-0 shadow-sm">
			<img
				:src="
					store.image
						? store.image
						: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg`
				"
				:alt="store.name"
				class="img-card-store rounded-top"
			/>
			<div class="card-body p-2">
				<div class="d-flex">
					<div class="flex-shrink-0">
						<img
							:src="
								store.logo
									? store.logo
									: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562473096/logo_default.png`
							"
							:alt="store.name"
							class="avatar-store border rounded-circle"
						/>
					</div>
					<div class="flex-grow-1 ms-2">
						<div class="d-flex bd-highlight">
							<div class="px-1 w-100 bd-highlight">
								<div
									class="small fw-bold d-inline-block text-truncate"
									style="width: 7rem"
								>
									{{ store.name }}
								</div>
								<div class="small font-size-sm">
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star-half-alt text-warning"></i>
									<i class="far fa-star text-warning"></i><br />
									{{ store.countReviews ? store.countReviews : 0 }} calificaciones
								</div>
							</div>
							<div class="px-1 flex-shrink-1 bd-highlight">
								<div class="small text-end" style="min-width: 2rem">
									{{ store.distance ? store.distance : 0 }} m
								</div>
								<div class="small text-end">
									<i class="fas fa-store" :class="store.isOpen ? 'text-success' : 'text-danger'"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'CardStore',
	props: ['store'],
	components: {},
	data() {
		return {}
	},
}
</script>

<style scoped>
.avatar-store {
	width: 2rem;
	height: 2rem;
	object-fit: cover;
	background-position: center center;
}

.img-card-store {
	height: 120.375px;
	object-fit: cover;
	background-position: center center;
}

.font-size-sm {
	font-size: 0.75rem;
}
</style>
