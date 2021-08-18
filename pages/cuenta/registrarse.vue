<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-7">
					<TitleH1 :title1="title1" />
					<p>
						Si ya tiene una cuenta con nosotros, inicie sesión en la
						<nuxt-link to="/cuenta/login" class="text-decoration-none"
							>página de inicio de sesión</nuxt-link
						>.
					</p>
					<form @submit.prevent="logup" class="mb-3">
						<TitleH4 :title4="yourPersonalData" />
						<div class="mb-3">
							<label for="name" class="form-label">Nombre completo</label>
							<input
								type="text"
								class="form-control"
								id="name"
								v-model="form.name"
								placeholder="Nombre completo"
								autofocus
							/>
						</div>
						<div class="mb-3">
							<label for="username" class="form-label">Usuario *</label>
							<input
								type="text"
								class="form-control"
								:class="
									isDanger && msg.input === 'username' ? 'border-danger' : ''
								"
								id="username"
								v-model="form.username"
								placeholder="Usuario *"
								required
							/>
							<div
								v-if="isDanger"
								:class="
									isDanger && msg.input === 'username' ? 'text-danger' : ''
								"
							>
								{{ msg.title }}
							</div>
						</div>
						<div class="mb-3">
							<label for="email" class="form-label"
								>Dirección de correo electrónico *</label
							>
							<input
								type="email"
								class="form-control"
								:class="
									isDanger && msg.input === 'email' ? 'border-danger' : ''
								"
								id="email"
								v-model="form.email"
								placeholder="Dirección de correo electrónico *"
								required
							/>
							<div
								v-if="isDanger"
								:class="isDanger && msg.input === 'email' ? 'text-danger' : ''"
							>
								{{ msg.title }}
							</div>
						</div>
						<div class="mb-3">
							<label for="phone" class="form-label">Teléfono</label>
							<input
								type="text"
								class="form-control"
								id="phone"
								v-model="form.phone"
								placeholder="Teléfono"
							/>
						</div>
						<TitleH4 :title4="yourPassword" />
						<div class="mb-3">
							<label for="password" class="form-label">Contraseña *</label>
							<input
								type="password"
								class="form-control"
								:class="
									isDanger && msg.input === 'password' ? 'border-danger' : ''
								"
								id="password"
								v-model="form.password"
								placeholder="********"
								required
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
							<label for="password_confirmation" class="form-label"
								>Confirmar contraseña *</label
							>
							<input
								type="password"
								class="form-control"
								:class="
									isDanger && msg.input === 'password_confirmation'
										? 'border-danger'
										: ''
								"
								id="password_confirmation"
								v-model="form.password_confirmation"
								placeholder="********"
								required
							/>
							<div
								v-if="isDanger"
								:class="
									isDanger && msg.input === 'password_confirmation'
										? 'text-danger'
										: ''
								"
							>
								{{ msg.title }}
							</div>
						</div>
						<TitleH4 :title4="checkPolicy" />
						<div class="mb-3 form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="isNewsletter"
								v-model="form.isNewsletter"
								:checked="form.isNewsletter"
							/>
							<label class="form-check-label" for="isNewsletter"
								>Subscríbete</label
							>
						</div>
						<div class="mb-3 form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="isPolicy"
								v-model="isPolicy"
								:checked="isPolicy"
							/>
							<label class="form-check-label" for="isPolicy"
								>He leído y acepto la
								<nuxt-link to="/informacion" class="agree"
									><b>Política de privacidad</b></nuxt-link
								></label
							>
							<div
								v-if="isDanger && msg.input === 'policy'"
								:class="isDanger ? 'text-danger' : ''"
							>
								{{ msg.title }}
							</div>
						</div>
						<div class="d-grid gap-2 d-sm-block">
							<button type="submit" class="btn btn-primary">Continuar</button>
						</div>
					</form>

					<p hidden>
						Si ya tiene una cuenta con nosotros, inicie sesión en la
						<a href="/cuenta/login">página de inicio de sesión</a>.
					</p>

					<form @submit.prevent="logup" class="form-horizontal" hidden>
						<fieldset id="account">
							<legend>Tus datos personales</legend>
							<div class="form-group required" v-if="isCustomerGroup">
								<label class="col-sm-2 control-label">Customer Group</label>
								<div class="col-sm-10">
									<div class="radio">
										<label>
											<input
												type="radio"
												name="customer_group_id"
												value="1"
												checked="checked"
											/>
											Default</label
										>
									</div>
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="firstname"
									>Nombre completo</label
								>
								<div class="col-sm-10">
									<input
										type="text"
										id="firstname"
										v-model="form.name"
										placeholder="Nombre completo"
										class="form-control"
									/>
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="username"
									>Usuario *</label
								>
								<div class="col-sm-10">
									<input
										type="text"
										id="username"
										v-model="form.username"
										placeholder="Usuario *"
										class="form-control"
										:class="
											isDanger && msg.input === 'username' ? 'input-danger' : ''
										"
									/>
									<span
										v-if="isDanger"
										:class="
											isDanger && msg.input === 'username' ? 'span-danger' : ''
										"
										>{{ msg.title }}</span
									>
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="email"
									>Correo electrónico *</label
								>
								<div class="col-sm-10">
									<input
										type="email"
										id="email"
										v-model="form.email"
										placeholder="Correo electrónico *"
										class="form-control"
										:class="
											isDanger && msg.input === 'email' ? 'input-danger' : ''
										"
									/>
									<span
										v-if="isDanger"
										:class="
											isDanger && msg.input === 'email' ? 'span-danger' : ''
										"
										>{{ msg.title }}</span
									>
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="phone"
									>Teléfono</label
								>
								<div class="col-sm-10">
									<input
										type="tel"
										id="phone"
										v-model="form.phone"
										placeholder="Teléfono"
										class="form-control"
									/>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend>Tu password</legend>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="password"
									>Password *</label
								>
								<div class="col-sm-10">
									<input
										type="password"
										id="password"
										v-model="form.password"
										placeholder="********"
										class="form-control"
										:class="
											isDanger && msg.input === 'password' ? 'input-danger' : ''
										"
									/>
									<span
										v-if="isDanger"
										:class="
											isDanger && msg.input === 'password' ? 'span-danger' : ''
										"
										>{{ msg.title }}</span
									>
								</div>
							</div>
							<div class="form-group required">
								<label
									class="col-sm-2 control-label"
									for="password_confirmation"
									>Confirmar password</label
								>
								<div class="col-sm-10">
									<input
										type="password"
										id="password_confirmation"
										v-model="form.password_confirmation"
										placeholder="********"
										class="form-control"
										:class="
											isDanger && msg.input === 'password_confirmation'
												? 'input-danger'
												: ''
										"
									/>
									<span
										v-if="isDanger && msg.input === 'password_confirmation'"
										:class="isDanger ? 'span-danger' : ''"
										>{{ msg.title }}</span
									>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend>Newsletter</legend>
							<div class="form-group">
								<label class="col-sm-2 control-label">Subscríbete</label>
								<div class="col-sm-10">
									<label class="radio-inline">
										<input
											type="radio"
											v-model="form.isNewsletter"
											:checked="form.isNewsletter"
										/>
										Si</label
									>
									<label class="radio-inline">
										<input
											type="radio"
											name="newsletter"
											:checked="!form.isNewsletter"
										/>
										No</label
									>
								</div>
							</div>
						</fieldset>
						<div class="buttons">
							<div class="pull-right">
								He leído y acepto la
								<a href="/informacion" class="agree"
									><b>Política de privacidad</b></a
								>
								<input type="checkbox" name="agree" v-model="isPolicy" />
								&nbsp;
								<span
									v-if="isDanger && msg.input === 'policy'"
									:class="isDanger ? 'span-danger' : ''"
									>{{ msg.title }}</span
								>
								&nbsp;
								<input
									type="submit"
									value="Continuar"
									class="btn btn-primary"
								/>
							</div>
						</div>
					</form>
				</div>
				<div class="col-12 col-sm-5">
					<TitleH4 :title4="title4" />
					<pre class="container" hidden>{{ $data }}</pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'
import TitleH4 from '~/components/AtomicDesign/Atoms/TitleH4'

// const TOKEN = localStorage.getItem('token')
// const CURRENT_USER = sessionStorage.getItem('currentuser')

export default {
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		title: 'Registrarse © CiudadBusca.co',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Registrarse',
			},
		],
	},
	name: 'FormLogup',
	components: {
		TitleH1,
		TitleH4,
	},
	data() {
		return {
			form: {
				name: null,
				username: null,
				email: null,
				password: null,
				password_confirmation: null,
				phone: null,
				isNewsletter: false,
			},
			msg: {
				input: '',
				title: '',
			},
			isPolicy: false,
			isCustomerGroup: false,
			isDanger: false,
			title1: {
				name: 'Registrar Cuenta',
				class: 'title h5 text-uppercase',
			},
			checkPolicy: {
				name: 'Newsletter',
				class: 'title h6 text-uppercase mt-5 mb-3',
			},
			yourPassword: {
				name: 'Tu password',
				class: 'title h6 text-uppercase mt-5 mb-3',
			},
			yourPersonalData: {
				name: 'Tus datos personales',
				class: 'title h6 text-uppercase mt-5 mb-3',
			},
			title4: {
				name: 'Aside',
				class: 'title h5 text-uppercase',
			},
		}
	},
	created() {
		// if (CURRENT_USER) {
		// 	this.$router.replace('/administracion')
		// }
	},
	methods: {
		async logup() {
			try {
				if (this.form.username === null) {
					this.msg.input = 'username'
					this.isDanger = true
					this.msg.title = 'Los campos no pueden estar vacíos.'
					return
				}

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

				if (this.form.password !== this.form.password_confirmation) {
					this.isDanger = true
					this.msg.input = 'password_confirmation'
					this.msg.title = 'El password con coincide.'
					return
				}

				if (!this.isPolicy) {
					this.isDanger = true
					this.msg.input = 'policy'
					this.msg.title = 'Aceptar las políticas de privacidad.'
					return
				}

				const form = {
					name: this.form.name,
					username: this.form.username,
					email: this.form.email,
					password: this.form.password,
					password_confirmation: this.form.password_confirmation,
					phone: this.form.phone,
					isNewsletter: this.form.isNewsletter,
					isPolicy: this.isPolicy,
				}

				await this.$axios
					.post(`/users`, JSON.stringify(this.form), {
						headers: {
							'Content-Type': 'application/json',
						},
					})
					.then(async (response) => {
						if (response.data.error) {
							console.log(response.data.error)
							return
						}

						this.form.name = ''
						this.form.username = ''
						this.form.email = ''
						this.form.password = ''
						this.form.password_confirmation = ''
						this.form.phone = ''
						this.form.isNewsletter = false
						this.msg.input = ''
						this.msg.title = ''
						this.isPolicy = false
						this.isDanger = false

						await this.$router.replace('/cuenta/login')
					})
					.catch((err) => console.log(err))
			} catch (err) {
				console.log(err)
			}
		},
	},
}
</script>

<style scoped></style>
