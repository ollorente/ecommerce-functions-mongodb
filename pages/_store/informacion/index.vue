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
		title: 'Información © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Información',
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
				name: 'Información',
				class: 'title h3',
			},
		}
	},
	created() {
		this.getInformation()
	},
	methods: {
		async getInformation() {},
	},
	watch: {
		$route: ['getInformation'],
	},
}
</script>

<style scoped></style>
