<template>
	<nuxt-link :to="`/${$route.params.store}/categorias/${cart.metaTitle}`" target="_self" class="card">
		<div class="dynamic-carousel__link-container">
			<img
				:src="
					cart.image
						? cart.image
						: `https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg`
				"
				class="dynamic-carousel__img"
				:alt="cart.name"
			/>
			<div class="dynamic-carousel__item-content with-discount card-body">
				<div class="text-center text-dark bold">{{ cart.name }}</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'CardCategory',
	props: ['cart'],
	components: {},
	data() {
		return {
			title3: {
				name: this.$props.cart.name,
				class: 'text-dark h6',
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

.bold {
	text-transform: uppercase;
}
</style>
