<template>
	<nuxt-link :to="`/${store.url}`" target="_self" class="card">
		<div class="card">
			<img
				:src="
					store.logo
						? store.logo
						: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562473096/logo_default.png`
				"
				:alt="store.name"
				class="avatar-store"
			/>
			<img
				:src="
					store.image
						? store.image
						: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg`
				"
				:alt="store.name"
				class="img-card-store"
			/>
			<div class="card-info__container">
				<div class="card-info__left__body">
					<span class="card-info__left__body--title">{{ store.name }}</span>
					<span class="card-info__left__body--p">
						<i class="fas fa-star text-primary"></i>
						<i class="fas fa-star text-primary"></i>
						<i class="fas fa-star text-primary"></i>
						<i class="fas fa-star-half-alt text-primary"> </i
						><i class="far fa-star text-primary"></i>
						{{ store.countReviews ? store.countReviews : 0 }} reviews
					</span>
				</div>
				<div class="card-info__right">
					<span class="card-info__right__local"
						>{{ store.distance ? store.distance : 0 }} m</span
					>
					<span
						class="card-info__right__status"
						:class="store.isOpen ? 'text-success' : 'text-error'"
						>{{ store.isOpen ? 'Abierto' : 'Cerrado' }}</span
					>
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
		return {
			title3: {
				name: this.$props.store.name,
				class: 'text-dark h6',
			},
		}
	},
}
</script>

<style scoped>
.card {
	background: white;
	border-radius: calc(var(--unit) / 2);
	box-shadow: 0 0 var(--unit) rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;
}

.avatar-store {
	margin: var(--unit);
	border: solid 2px var(--white);
	box-shadow: 0;
	z-index: 10;
}

.img-card-store {
	display: none;
	z-index: 0;
}

.card-info__container {
	width: calc(100% - 4rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-info__left__body {
	display: flex;
	flex-direction: column;
}

.card-info__right {
	display: flex;
	flex-direction: column;
}

.bold {
	text-transform: uppercase;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
	.card {
		display: flex;
		flex-direction: column;
	}

	.avatar-store {
		margin: calc(var(--unit) * 2) 0 calc(var(--unit) - 5.25rem) var(--unit);
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
	}

	.img-card-store {
		display: block;
		height: 10.5rem;
		object-fit: cover;
		background-position: center center;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
	.img-card-store {
		height: 16.5rem;
	}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
	.img-card-store {
		height: 16.5rem;
	}
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
	.img-card-store {
		height: 12.8rem;
	}
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
