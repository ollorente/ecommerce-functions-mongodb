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
		title: 'Ofertas © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Ofertas',
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
				name: 'Ofertas',
				class: 'title h3',
			},
		}
	},
	created() {
		this.getOfferings()
	},
	methods: {
		async getOfferings() {},
	},
	watch: {
		$route: ['getOfferings'],
	},
}
</script>

<style scoped></style>
