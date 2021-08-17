<template>
	<ul class="list-group list-group-flush">
		<li class="list-group-item bg-transparent px-0" v-for="(menu, index) in menus" :key="index">
			<nuxt-link :to="menu.link" class="text-decoration-none text-light">
				<i :class="menu.icon"></i> {{ menu.title }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'ListGroupFlush',
	props: ['menus'],
}
</script>

<style scoped></style>
