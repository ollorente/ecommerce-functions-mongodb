<template>
	<div>
		<div class="container">
			<main>
				<TitleH1 :title1="title1" />
			</main>
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
		title: 'Historial © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Historial',
			},
		],
	},
	layout: 'main',
	components: {
		TitleH1,
	},
	data() {
		return {
			title1: {
				name: 'Historial',
				class: 'title h3',
			},
		}
	},
}
</script>
