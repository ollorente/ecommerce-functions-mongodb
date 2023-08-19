<template>
	<div>
		<TitleH4 :title4="title" />
	</div>
</template>

<script>
import TitleH4 from '~/components/AtomicDesign/Atoms/TitleH4'

export default {
	name: 'Aside',
	components: {
		TitleH4,
	},
	data() {
		return {
			title: {
				name: 'Aside',
				class: 'title h5 text-uppercase',
			},
		}
	},
}
</script>

<style scoped></style>
