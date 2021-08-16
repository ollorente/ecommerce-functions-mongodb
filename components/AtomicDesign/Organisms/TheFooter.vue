<template>
	<footer class="mt-3 py-3 border-top bg-dark">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 col-md-3">
					<ListGroupFlush :menus="menus.one" />
				</div>
				<div class="col-12 col-sm-6 col-md-3">
					<ListGroupFlush :menus="menus.two" />
				</div>
				<div class="col-12 col-sm-6 col-md-3">
					<ListGroupFlush :menus="menus.three" />
				</div>
				<div class="col-12 col-sm-6 col-md-3">
					<ListGroupFlush :menus="menus.four" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import ListGroupFlush from '~/components/AtomicDesign/Molecules/ListGroupFlush'

export default {
	name: 'TheFooter',
	components: {
		ListGroupFlush,
	},
	data() {
		return {
			menus: {
				one: [],
				two: [],
				three: [],
				four: [],
			},
		}
	},
	created() {
		this.getOne()
		this.getTwo()
		this.getThree()
		this.getFour()
	},
	methods: {
		async getOne() {
			this.menus.one = [
				{
					icon: 'fas fa-shopping-basket',
					link: '/cuenta/login',
					title: 'Mi cuenta',
				},
			]
		},
		async getTwo() {
			this.menus.two = [
				{
					icon: 'fas fa-shopping-basket',
					link: '/',
					title: 'Link del dos',
				},
			]
		},
		async getThree() {
			this.menus.three = [
				{
					icon: 'fas fa-shopping-basket',
					link: '/',
					title: 'Link del tres',
				},
			]
		},
		async getFour() {
			this.menus.four = [
				{
					icon: 'fas fa-shopping-basket',
					link: '/',
					title: 'Link del cuatro',
				},
			]
		},
	},
	watch: {
		$routes: ['getOne', 'getTwo', 'getThree', 'getFour'],
	},
}
</script>

<style scoped>
.border-top {
	border-top: solid 16px #fded35 !important;
}
</style>
