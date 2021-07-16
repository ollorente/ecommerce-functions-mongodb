<template>
	<div>
		<TitleH1 :title1="title1" />
		<pre class"container">{{ $data }}</pre>
	</div>
</template>

<script>
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'

export default {
	layout: 'main',
	components: {
		TitleH1,
	},
	data() {
		return {
			title1: {
				name: 'Carrito de compras',
				class: 'title h3',
			},
			shopping: [
				{
					store: '123456789',
					shopping: [],
				},
				{
					store: '234567890',
					shopping: [],
				},
				{
					store: '345678901',
					shopping: [],
				},
			]
		}
	},
}
</script>

<style scoped></style>