<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6">
					<div class="mb-3">
						<TitleH2 :title2="title1" />
						<p><strong>Registrar Cuenta</strong></p>
						<p>
							Al crear una cuenta, podrá comprar más rápido, estar actualizado
							sobre el estado de un pedido y realizar un seguimiento de los
							pedidos que haya realizado anteriormente.
						</p>
						<div class="d-grid gap-2 d-sm-block">
						  <nuxt-link to="/cuenta/registrarse" class="btn btn-primary">Continuar</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6">
					<TitleH2 :title2="title2" />
					<p><strong>Yo soy cliente</strong></p>
					<form @submit.prevent="login" class="mb-3">
						<div class="mb-3">
							<label for="email" class="form-label"
								>Dirección de correo electrónico</label
							>
							<input
								type="email"
								class="form-control"
								:class="
									isDanger && msg.input === 'email' ? 'border-danger' : ''
								"
								id="email"
								v-model="form.email"
								placeholder="Dirección de correo electrónico"
							/>
							<div
								v-if="isDanger"
								:class="isDanger && msg.input === 'email' ? 'text-danger' : ''"
							>
								{{ msg.title }}
							</div>
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Contraseña</label>
							<input
								type="password"
								class="form-control"
								:class="
									isDanger && msg.input === 'password' ? 'border-danger' : ''
								"
								id="password"
								v-model="form.password"
								placeholder="********"
							/>
							<div
								v-if="isDanger"
								:class="
									isDanger && msg.input === 'password' ? 'text-danger' : ''
								"
							>
								{{ msg.title }}
							</div>
						</div>
						<div class="mb-3">
							<nuxt-link
								to="/cuenta/olvide-mi-contrasena"
								class="text-decoration-none"
								>Contraseña olvidada</nuxt-link
							>
						</div>
						<div class="d-grid gap-2 d-sm-block">
							<button type="submit" class="btn btn-primary">Login</button>
						</div>
						<input type="hidden" name="redirect" value="/cuenta/account" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitleH2 from '~/components/AtomicDesign/Atoms/TitleH2'

const SESSIONSTORAGE_NAME = 'currentuser'
const TOKEN = 'accesstoken'

export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Login © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Login',
			},
		],
	},
	components: {
		TitleH2,
	},
	data() {
		return {
			form: {
				email: null,
				password: null,
			},
			msg: {
				input: '',
				title: '',
			},
			isDanger: false,
			title1: {
				name: 'Nuevo Cliente',
				class: 'title h4 text-uppercase',
			},
			title2: {
				name: 'Soy Cliente',
				class: 'title h4 text-uppercase',
			},
		}
	},
	methods: {
		async login() {
			try {
				if (this.form.email === null) {
					this.msg.input = 'email'
					this.isDanger = true
					this.msg.title = 'Los campos no pueden estar vacíos.'
					return
				}

				if (this.form.password === null) {
					this.msg.input = 'password'
					this.isDanger = true
					this.msg.title = 'Los campos no pueden estar vacíos.'
					return
				}

				await this.$axios
					.post(`/users/auth`, JSON.stringify(this.form), {
						headers: {
							'Content-Type': 'application/json',
						},
					})
					.then(async (response) => {
						if (response.data.error) {
							console.log(response.data.error)
							return
						}

						await localStorage.setItem(TOKEN, JSON.stringify(response.data.jwt))
						await sessionStorage.setItem(
							SESSIONSTORAGE_NAME,
							JSON.stringify(response.data.data)
						)

						this.form.name = ''
						this.form.email = ''
						this.msg.input = ''
						this.msg.title = ''
						this.isPolicy = false
						this.isDanger = false

						await this.$router.replace('/administracion')
					})
					.catch((err) => console.log(err))
			} catch (err) {
				console.log(err)
			}
		},
	},
}
</script>

<style scoped>
/*main {
  margin-top: calc(var(--unit) * 6);
}

fieldset {
  border: solid 2px var(--white);
  padding: var(--unit);
  margin: var(--unit) 0;
  border-radius: calc(var(--unit) / 4);
}

legend {
  font-size: calc(var(--unit) * 1.5);
  padding: 0 var(--unit);
}

label {
  margin: var(--unit) 0;
}

input {
  width: 100%;
  margin: calc(var(--unit) / 2) 0;
  padding: calc(var(--unit) / 2);
  border: 0;
  border-radius: calc(var(--unit) / 4);
}

.input-danger {
  border: solid 1px var(--error);
  color: var(--error);
}

.span-danger {
  color: var(--error);
  margin-bottom: 
  var(--unit);
}*/
</style>
