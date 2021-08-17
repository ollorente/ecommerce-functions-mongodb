<template>
	<ul class="navbar-nav">
		<li class="nav-item" v-for="(link, index) in links" :key="index">
			<nuxt-link class="nav-link" :to="link.link" v-if="!link.dropdown">
				<i :class="link.icon" class="me-1" v-if="link.icon"></i>{{ link.title }}
			</nuxt-link>
			<a
				class="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdownMenuLink"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				v-else
			>
				{{ link.title }}
			</a>
			<ul
				class="dropdown-menu dropdown-menu-end"
				aria-labelledby="navbarDropdownMenuLink"
				v-if="link.dropdown"
			>
				<li v-for="(sublink, index) in link.subLinks" :key="index">
					<nuxt-link class="dropdown-item" :to="sublink.link">
						<i :class="sublink.icon" class="me-1" v-if="sublink.icon"></i
						>{{ sublink.title }}
					</nuxt-link>
				</li>
			</ul>
		</li>
		<pre class="container" hidden>{{ $props }}</pre>
	</ul>
</template>

<script>
export default {
	name: 'NavbarNav',
	props: ['links'],
}
</script>

<style scoped></style>
