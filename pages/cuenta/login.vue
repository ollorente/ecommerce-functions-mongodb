<template>
  <div>
    <ImageFeature :image="image" />
    <div class="container">
      <main class="grid col-12 col-sm-2">
        <div class="col-sm-6">
          <div class="well">
            <TitleH2 :title2="title1" />
            <p><strong>Registrar Cuenta</strong></p>
            <p>
              Al crear una cuenta, podrá comprar más rápido, estar actualizado
              sobre el estado de un pedido y realizar un seguimiento de los
              pedidos que haya realizado anteriormente.
            </p>
            <a href="/cuenta/registrarse" class="btn btn-primary">Continuar</a>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="well">
            <TitleH2 :title2="title2" />
            <p><strong>Yo soy cliente</strong></p>
            <form @submit.prevent="login">
              <div class="form-group">
                <label class="control-label" for="input-email"
                  >Dirección de correo electrónico</label
                >
                <input
                  type="text"
                  name="email"
                  value=""
                  placeholder="Dirección de correo electrónico"
                  id="input-email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label class="control-label" for="input-password"
                  >Contraseña</label
                >
                <input
                  type="password"
                  name="password"
                  value=""
                  placeholder="Contraseña"
                  id="input-password"
                  class="form-control"
                />
                <a href="/cuenta/olvide-mi-contrasena">Contraseña olvidada</a>
              </div>
              <input type="submit" value="Login" class="btn btn-primary" />
              <input type="hidden" name="redirect" value="/cuenta/account" />
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TitleH2 from '~/components/AtomicDesign/Atoms/TitleH2'

export default {
  components: {
    TitleH2
  },
  data() {
    return {
      form: {},
      title1: {
        name: 'Nuevo cliente',
        class: 'title h3',
      },
      title2: {
        name: 'Soy Cliente',
        class: 'title h3',
      },
    }
  },
  methods: {
    async login() {
      console.log('Login...')
    },
  },
}
</script>
