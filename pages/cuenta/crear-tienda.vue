<template>
	<div>
		<div class="container">
			<main>
				<div class="grid col-1"></div>
				<div class="grid col-1 col-sm-3">
					<div class="span-1 span-sm-2">
						<TitleH1 :title1="title1" />

						<form @submit.prevent="newStore">
							<input type="text" v-model="form.userId" placeholder="userId" />
							<input type="text" v-model="form.name" placeholder="Nombre de tienda" />
							<input type="text" v-model="form.url" placeholder="url" />
							<input type="text" v-model="form.ssl" placeholder="ssl" />
							<input type="text" v-model="form.geo" placeholder="Localización" />
							<button type="submit" class="btn btn-default">Crear</button>
						</form>
					</div>
					<div class="span-1">
						<div class="card">
							<div class="card-body">Aside</div>
						</div>
					</div>
				</div>
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
		title: 'Crear tienda © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Crear tienda',
			},
		],
	},
	components: {
		TitleH1,
	},
	data() {
		return {
			title1: {
				name: 'Crear tienda',
				class: 'title h5 text-center',
			},
			form: {
				userId: null,
				name: null,
				url: null,
				ssl: null,
				geo: null,
			},
		}
	},
	methods: {
		async newStore() {
			const store = {
				userId: this.form.userId,
				name: this.form.name,
				url: this.form.url,
				ssl: this.form.ssl,
				geo: this.form.geo,
			}

			await this.$axios
				.post(`/stores`, store, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then(async (result) => {
					console.log(result.data)

					this.form.userId = null
					this.form.name = null
					this.form.url = null
					this.form.ssl = null
					this.form.geo = null
				})
				.catch((error) => console.log(error))
		},
	},
}
</script>

<style scoped>
form {
	margin: calc(var(--unit) * 2) 0;
}

input,
button {
	display: block;
	width: 100%;
	margin-bottom: var(--unit);
	padding: calc(var(--unit) / 2) var(--unit);
	border: 0;
	border-radius: calc(var(--unit) / 4);
}

button {
	background: var(--success);
	color: var(--white);
}
</style>