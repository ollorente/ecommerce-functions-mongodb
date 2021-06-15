<template>
	<div class="card">
		<img
			src="https://res.cloudinary.com/un1c0lm4y0r/image/upload/v1607720006/categorias/objetos/ingenieria-arquitectura-urbanismo_tciiv3.jpg"
			alt="Imagen"
		/>
		<div class="card-body">
			<TitleH5 :title5="title5" />
		</div>
		<div class="card-footer">Footer</div>
	</div>
</template>

<script>
import TitleH5 from '~/components/AtomicDesign/Atoms/TitleH5'

export default {
	name: 'CardCategory',
	components: {
		TitleH5,
	},
	data() {
		return {
			title5: {
				name: 'item',
				class: 'item',
			},
		}
	},
}
</script>

<style scoped>
.card {
	background: white;
	border-radius: calc(var(--unit) / 2);
	box-shadow: 0 0 var(--unit) rgba($color: #000000, $alpha: 0.05);
}

.card-body {
	padding: var(--unit);
}

.card-footer {
	padding: var(--unit);
	background: white;
}
</style>
