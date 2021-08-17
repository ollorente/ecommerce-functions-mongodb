<template>
	<div class="container mt-3">
		<div class="row">
			<div class="col-12">
				<TitleH1 :title1="title1" />
			</div>
		</div>
	</div>
</template>

<script>
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'

export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Categorías © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Categorías',
			},
		],
	},
	layout: 'store',
	components: {
		TitleH1,
	},
	data() {
		return {
			title1: {
				name: 'Categorías',
				class: 'title h3',
			},
		}
	},
	created() {
		this.getCategories()
	},
	methods: {
		async getCategories() {},
	},
	watch: {
		$route: ['getCategories'],
	},
}
</script>

<style scoped></style>
