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
		title: 'Moda © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Moda',
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
				name: 'Moda',
				class: 'title h3',
			},
		}
	},
	created() {
		this.getFashion()
	},
	methods: {
		async getFashion() {},
	},
	watch: {
		$route: ['getFashion'],
	},
}
</script>

<style scoped></style>
