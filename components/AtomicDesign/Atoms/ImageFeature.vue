<template>
	<div>
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
		<div class="header-info">
			<div class="container">
				<div class="header-info__container">
					<div class="header-info__left">
						<img :src="store.logo ? store.logo : `https://res.cloudinary.com/dbszizqh4/image/upload/v1562473096/logo_default.png`" :alt="store.name" class="avatar-store" />
						<div class="header-info__left__body">
							<span class="header-info__left__body--title">{{
								store.name
							}}</span>
							<span class="header-info__left__body--p">{{
								store.location
							}}</span>
							<span class="header-info__left__body--p">
								<i class="fas fa-star text-primary"></i>
								<i class="fas fa-star text-primary"></i>
								<i class="fas fa-star text-primary"></i>
								<i class="fas fa-star-half-alt text-primary"> </i
								><i class="far fa-star text-primary"></i>
								{{ store.countReviews ? store.countReviews : 0 }} reviews
							</span>
						</div>
					</div>
					<div class="header-info__right">
						<span class="header-info__right__local">{{ store.distance ? store.distance : 0 }} m</span>
						<span
							class="header-info__right__status"
							:class="store.isOpen ? 'text-success' : 'text-error'"
							>{{ store.isOpen ? 'Abierto' : 'Cerrado' }}</span
						>
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

.header {
	margin: 0;
	padding: var(--unit) 0;
	background: var(--primary);
	z-index: 110;
}

.header-info {
	position: -webkit-sticky;
	position: sticky;
	margin: 0;
	padding: 0;
	top: 56px;
	background: var(--white);
	border-bottom: solid 2px var(--light);
	transition: all 0.3s ease;
	z-index: 100;
}

.header-info__container {
	height: calc(var(--unit) * 3.75);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-info__left {
	display: flex;
	align-items: center;
	width: calc(100% - 8rem);
	color: var(--dark);
}

.avatar-store {
	margin-top: calc(var(--unit) * 0);
	width: calc(var(--unit) * 4);
	height: calc(var(--unit) * 4);
}

.header-info__left__body {
	width: 100%;
	margin-left: var(--unit);
}

.header-info__left__body--title {
	display: block;
	margin: calc(var(--unit) / 2) 0;
	font-size: calc(var(--unit) * 1.25);
	font-weight: 600;
	width: calc(100% - 1rem);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.header-info__left__body--p {
	display: block;
	margin-bottom: calc(var(--unit) / 2);
	font-size: var(--unit);
	width: calc(100% - 1rem);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.header-info__right {
	font-size: var(--unit);
	width: 8rem;
}

.header-info__right__local {
	display: block;
	text-align: right;
	margin: calc(var(--unit) / 2) 0;
}

.header-info__right__status {
	display: block;
	text-align: right;
	margin: calc(var(--unit) / 2) 0;
	font-weight: 600;
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

	.header-info__container {
		height: calc(var(--unit) * 6.5);
	}

	.avatar-store {
		margin-top: calc(var(--unit) * -7);
		width: calc(var(--unit) * 9);
		height: calc(var(--unit) * 9);
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
