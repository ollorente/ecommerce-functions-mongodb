<template>
	<div class="grid col-1 col-xs-2 col-sm-1 col-md-3 col-lg-4">
    <transition name="fade">
			<div class="span-xs-2 span-md-2 span-lg-3" style="padding: 1rem">
				<h1>Productos</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Aperiam,
					dolores quae. Labore, molestiae, ullam. Repellendus sunt eveniet odio
					repudiandae temporibus cum maiores, exercitationem amet harum vero
					inventore dolorem velit sequi voluptates consectetur enim officia quod
					ad dicta eligendi odit cupiditate?
				</p>
			</div>
			<div style="padding: 1rem">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
					sit, blanditiis at accusantium dolorum. A fuga eum quo magnam tenetur
					itaque accusantium reiciendis tempore non, corrupti alias natus et neque
					beatae voluptatum rerum quaerat sint dicta quod facere autem ex.
				</p>
			</div>
    </transition>
  </div>
</template>

<script>
export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Productos © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Productos',
			},
		],
	},
	layout: 'admin',
	components: {},
	data() {
		return {}
	},
	created() {},
	methods: {},
}
</script>

<style scoped></style>
