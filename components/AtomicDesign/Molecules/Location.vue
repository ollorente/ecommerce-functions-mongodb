<template>
	<a href="#" class="nav__bottom__link">
		<i class="fas fa-map-marker-alt"></i>
		<div class="bottom-body">
			<span>Ingresa tu</span>
			<span>ubicación</span>
		</div>
	</a>
</template>

<script>
export default {
	name: 'Location',
	props: ['location'],
}
</script>

<style scoped>
.nav__bottom__link {
	width: 100%;
	margin: 0;
	padding: calc(var(--unit) / 3) var(--unit);
	font-size: 1rem;
	color: var(--dark);
	border: solid 1px transparent;
	border-radius: calc(var(--unit) / 2);
	cursor: pointer;
	display: flex;
	align-items: center;
}

.nav__bottom__link:hover {
	border: solid 1px var(--dark);
}

.nav__bottom__link i {
	font-size: calc(var(--unit) * 3);
	margin-right: var(--unit);
}

.nav__bottom__link span:first-child {
	font-size: 0.8rem;
	font-weight: 400;
}

.nav__bottom__link span:last-child {
	font-size: 0.9rem;
	font-weight: 700;
}
</style>
