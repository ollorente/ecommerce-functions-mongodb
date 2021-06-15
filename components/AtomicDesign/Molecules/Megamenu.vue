<template>
	<div class="megamenu">
		<section class="megamenu__uno">
			<h4 class="megamenu__title">
				<i class="fas fa-angle-left"></i> Categorías
			</h4>
			<ul class="megamenu__uno__nav">
				<li
					class="megamenu__uno__items"
					v-for="category in menus.main"
					:key="category.id"
				>
					<nuxt-link :to="`${category.link}`" class="megamenu__uno__link"
						>{{ category.title }} <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
			</ul>
		</section>
		<section class="megamenu__dos">
			<h4 class="megamenu__title">
				<i class="fas fa-angle-left"></i> Cuidado personal
			</h4>
			<ul class="megamenu__uno__nav">
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Ciudado personal <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Bebés <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Cuidado del hogar <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Bebidas <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Alimentos <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Mascotas <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
				<li class="megamenu__uno__items">
					<nuxt-link to="#" class="megamenu__uno__link"
						>Licores <i class="fas fa-angle-right"></i
					></nuxt-link>
				</li>
			</ul>
		</section>
		<section class="megamenu__tres">
			<img
				src="https://res.cloudinary.com/dbszizqh4/image/upload/v1590905976/7702560009532/7702560009532-01.jpg"
				alt="Título"
			/>
		</section>
		<section class="megamenu__cuatro">
			<img
				src="https://res.cloudinary.com/dbszizqh4/image/upload/v1590644448/7702004003510/7702004003510-01.png"
				alt="Título"
			/>
			<img
				src="https://res.cloudinary.com/dbszizqh4/image/upload/v1590644913/7702004003509/7702004003509-01.png"
				alt="Título"
			/>
			<img
				src="https://res.cloudinary.com/dbszizqh4/image/upload/v1591162433/7702004003508/7702004003508-08.png"
				alt="Título"
			/>
			<img
				src="https://res.cloudinary.com/dbszizqh4/image/upload/v1591244458/1014006023429/1014006023429-15.png"
				alt="Título"
			/>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Megamenu',
	props: ['menus'],
	data() {
		return {
			show: false,
			menus: {
				main: [
					{
						id: '1',
						title: 'Ciudado personal',
						link: '#',
					},
					{
						id: '2',
						title: 'Bebés',
						link: '#',
					},
					{
						id: '3',
						title: 'Cuidado del hogar',
						link: '#',
					},
					{
						id: '4',
						title: 'Bebidas',
						link: '#',
					},
					{
						id: '5',
						title: 'Alimentos',
						link: '#',
					},
					{
						id: '6',
						title: 'Mascotas',
						link: '#',
					},
					{
						id: '7',
						title: 'Licores',
						link: '#',
					},
					{
						id: '8',
						title: 'Pañales',
						link: '#',
					},
					{
						id: '9',
						title: 'Dulces y chocolates',
						link: '#',
					},
					{
						id: '10',
						title: 'Cuidado del cabello',
						link: '#',
					},
					{
						id: '11',
						title: 'Cuidado de la piel',
						link: '#',
					},
					{
						id: '12',
						title: 'Cervezas',
						link: '#',
					},
				],
				two: [
					{
						mainId: '',
						title: '',
						link: '',
					},
				],
				three: [
					{
						twoId: '',
						image: '',
						link: '',
					},
				],
				four: [
					{
						threeId: '',
						image: '',
						link: '',
					},
				],
			},
		}
	},
}
</script>

<style scoped>
.megamenu {
	position: absolute;
	top: calc(var(--unit) * 13.5);
	left: auto;
	right: auto;
	width: 100%;
	max-width: 1200px;
	height: calc(var(--unit) * 40);
	margin: 0 auto;
	padding: 0;
	background: white;
	border-radius: calc(var(--unit) / 2);
	box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.25);
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: top;
	transition: ease 0.5s all;
}

.megamenu__uno {
	width: 25%;
	height: 100%;
	padding: var(--unit) 0;
	overflow-x: hidden;
}

.megamenu__title {
	width: 100%;
	margin: 0;
	padding: var(--unit) calc(var(--unit) * 2);
	font-size: calc(var(--unit) * 3);
}

.megamenu__title i {
	color: var(--primary);
	font-weight: 700;
}

.megamenu__uno__nav {
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
}

.megamenu__uno__items {
	width: 100%;
	margin: 0;
	padding: 0;
	display: block;
}

.megamenu__uno__link {
	width: 100%;
	margin: 0;
	padding: var(--unit) calc(var(--unit) * 2);
	color: var(--dark);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.megamenu__uno__link i {
	display: none;
	color: var(--dark);
}

.megamenu__uno__link:hover {
	color: var(--primary);
	font-weight: 700;
}

.megamenu__uno__link:hover i {
	display: block;
}

.megamenu__dos {
	width: 25%;
	height: 100%;
	padding: var(--unit) 0;
	overflow-x: hidden;
}

.megamenu__tres {
	width: 25%;
	height: 100%;
	overflow-x: hidden;
}

.megamenu__tres img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-position: center center;
}

.megamenu__cuatro {
	width: 25%;
	height: 100%;
	overflow-x: hidden;
	display: flex;
	flex-wrap: wrap;
	align-content: start;
}

.megamenu__cuatro img {
	width: 50%;
	height: 50%;
	object-fit: cover;
	background-position: center center;
}
</style>
