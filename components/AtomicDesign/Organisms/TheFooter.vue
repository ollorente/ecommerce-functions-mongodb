<template>
	<footer>
		<div class="container grid col-4">
			<ul class="nav__navbar">
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 1</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 2</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 3</nuxt-link
					>
				</li>
			</ul>
			<ul class="nav__navbar">
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 1</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 2</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 3</nuxt-link
					>
				</li>
			</ul>
			<ul class="nav__navbar">
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 1</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 2</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 3</nuxt-link
					>
				</li>
			</ul>
			<ul class="nav__navbar">
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 1</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 2</nuxt-link
					>
				</li>
				<li class="nav__item">
					<nuxt-link to="#" class="nav__link"
						><i class="fas fa-shopping-basket"></i> Link 3</nuxt-link
					>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'TheFooter',
}
</script>

<style scoped>
footer {
	margin-top: calc(var(--unit) * 4);
	padding: calc(var(--unit) * 2) 0;
	background: var(--dark);
	color: var(--light);
	border-top: solid var(--unit) var(--primary);
}

.nav__navbar {
	margin: 0;
	padding: 0;
}

.nav__item {
	margin: 0;
	padding: var(--unit) 0;
	list-style: none;
	display: block;
}

.nav__link {
	width: 100%;
	margin: 0;
	padding: var(--unit) 0;
	font-size: 1rem;
	color: var(--light);
	border: solid 1px transparent;
	border-radius: calc(var(--unit) / 2);
	cursor: pointer;
}

.nav__link:hover {
	color: var(--primary);
}
</style>
