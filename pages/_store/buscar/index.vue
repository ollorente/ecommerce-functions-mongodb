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
		title: 'Buscar en tienda © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Buscar en tienda',
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
				name: 'Buscar en tienda',
				class: 'title h3',
			},
		}
	},
	created() {
		this.getSearch()
	},
	methods: {
		async getSearch() {},
	},
	watch: {
		$route: ['getSearch'],
	},
}
</script>

<style scoped></style>
