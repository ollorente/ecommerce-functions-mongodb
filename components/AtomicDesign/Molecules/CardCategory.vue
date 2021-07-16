<template>
	<nuxt-link :to="`/categorias/${cart.id}`" target="_self" class="card">
		<div class="dynamic-carousel__link-container">
			<img
				:src="cart.image"
				class="dynamic-carousel__img"
				:alt="cart.name"
				:srcset="`${cart.image} 1x, ${cart.image} 2x`"
			/>
			<div class="dynamic-carousel__item-content with-discount card-body">
				<div class="dynamic-carousel__pill-container" v-if="cart.offer">
					<small class="bg-success text-white">OFERTA DEL DÍA</small>
				</div>
				<span class="text-dark text-through" v-if="cart.oldprice"
					>$ {{ cart.oldprice }}</span
				>
				<div class="text-dark">
					<span class="dynamic-carousel__price"
						><span>$ {{ cart.price }}</span></span
					>
					<div
						class="dynamic-carousel__price-additional-info"
						v-if="cart.oldprice"
					>
						<sup class="dynamic-carousel__discount"
							>{{ parseInt(100 - (cart.price * 100) / cart.oldprice) }}%
							OFF</sup
						>
					</div>
				</div>
				<div class="dynamic-carousel__shipping-container" v-if="cart.shipping">
					<span>Envío gratis </span
					><svg
						viewBox="0 0 56 18"
						xmlns="http://www.w3.org/2000/svg"
						class="dynamic-carousel__shipping-container-fulfillment"
						width="38px"
						height="12px"
					>
						<path
							d="M3.545 0L0 10.286h5.91L3.544 18 13 6.429H7.09L10.637 0zm14.747 14H15.54l2.352-10.672h7.824l-.528 2.4h-5.072l-.352 1.664h4.944l-.528 2.4h-4.96L18.292 14zm13.32.192c-3.28 0-4.896-1.568-4.896-3.808 0-.176.048-.544.08-.704l1.408-6.352h2.8l-1.392 6.288c-.016.08-.048.256-.048.448.016.88.688 1.728 2.048 1.728 1.472 0 2.224-.928 2.496-2.176L35.5 3.328h2.784l-1.392 6.336c-.576 2.592-1.984 4.528-5.28 4.528zM45.844 14h-7.04l2.352-10.672h2.752L42.1 11.6h4.272l-.528 2.4zm9.4 0h-7.04l2.352-10.672h2.752L51.5 11.6h4.272l-.528 2.4z"
							fill="#00a650"
							fill-rule="evenodd"
						></path>
					</svg>
				</div>
				<TitleH3 :title3="title3" />
			</div>
		</div>
		<pre class="container" hidden>{{ cart }}</pre>
	</nuxt-link>
</template>

<script>
import TitleH3 from '~/components/AtomicDesign/Atoms/TitleH3'

export default {
	name: 'CardCategory',
	props: ['cart'],
	components: {
		TitleH3,
	},
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
</style>
