<template>
  <div>
    <!-- <FormLogup /> -->
    <div class="container">
      <main class="grid col-1 col-sm-3">
        <div class="span-1 span-sm-2">
          <TitleH1 :title1="title1" />

          <p>
            Si ya tiene una cuenta con nosotros, inicie sesión en la
            <a href="/cuenta/login">página de inicio de sesión</a>.
          </p>

          <form @submit.prevent="logup" class="form-horizontal">
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
        <div class="span-1">
          <TitleH4 :title4="title4" />
          <pre class="container" hidden>{{ $data }}</pre>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import FormLogup from '~/components/AtomicDesign/Organisms/FormLogup'
import TitleH1 from '~/components/AtomicDesign/Atoms/TitleH1'
import TitleH4 from '~/components/AtomicDesign/Atoms/TitleH4'

export default {
  name: 'FormLogup',
  components: {
    // FormLogup,
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
        class: 'title h5 text-center',
      },
      title4: {
        name: 'Aside',
        class: 'title h5',
      },
    }
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

<style scoped>
main {
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
}
</style>
