<template>
	<div class="card border-0 shadow-sm mb-4">
		<div
			:style="`background-image: url(${
				store.image
					? store.image
					: 'https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg'
			});`"
			class="img-box"
		>
			<div class="img-shadow"></div>
		</div>
		<div class="container py-3">
			<div class="row">
				<div class="d-flex">
					<div class="flex-shrink-0">
						<img
							:src="
								store.logo
									? store.logo
									: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562473096/logo_default.png`
							"
							:alt="store.name"
							class="img-logo rounded-circle shadow"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<div class="d-flex bd-highlight">
							<div class="px-1 w-100 bd-highlight">
								<div
									class="small fw-bold d-inline-block text-truncate store-name"
								>
									{{ store.name }}
								</div>
								<div class="small font-size-sm">{{ store.location }}</div>
								<div class="small font-size-sm">
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star text-warning"></i>
									<i class="fas fa-star-half-alt text-warning"></i>
									<i class="far fa-star text-warning"></i>
									{{
										store.countReviews ? store.countReviews : 0
									}}
									calificaciones
								</div>
							</div>
							<div class="px-1 flex-shrink-1 bd-highlight">
								<div class="small text-end store-distance">
									{{ store.distance ? store.distance : 0 }} m
								</div>
								<div class="small text-end">
									<i
										class="fas fa-store"
										:class="store.isOpen ? 'text-success' : 'text-danger'"
									></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ImageFeature',
	props: ['store'],
}
</script>

<style scoped>
.container {
	z-index: 10;
}

.img-box {
	width: 100%;
	height: 13rem;
	margin: 0;
	padding: 0;
	background-size: cover;
	background-position: center center;
	z-index: 0;
}

.img-shadow {
	width: 100%;
	height: 10rem;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0.25) 50%,
		rgba(0, 0, 0, 0) 100%
	);
	z-index: 10;
}

.img-logo {
	margin-top: 0;
	width: 4rem;
	height: 4rem;
	object-fit: cover;
	background-color: white;
	background-position: center center;
	border: solid 2px white;
}

.store-name {
	width: calc(100% - 5rem);
}

.store-distance {
	min-width: 2rem;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
	.img-box {
		height: 20rem;
	}

	.img-shadow {
		height: 6.5rem;
	}

	.img-logo {
		margin-top: -6rem;
		width: 10rem;
		height: 10rem;
		border: solid 5px white;
	}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
