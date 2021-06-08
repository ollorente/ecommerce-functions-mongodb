<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="well">
        <h2>Nuevo cliente</h2>
        <p><strong>Registrar Cuenta</strong></p>
        <p>
          Al crear una cuenta, podrá comprar más rápido, estar actualizado sobre el estado de un pedido y realizar un seguimiento de los pedidos que haya realizado anteriormente.
        </p>
        <a
          href="/cuenta/registrarse"
          class="btn btn-primary"
          >Continuar</a
        >
      </div>
    </div>
    <div class="col-sm-6">
      <div class="well">
        <h2>Soy Cliente</h2>
        <p><strong>Yo soy cliente</strong></p>
        <form @submit.prevent="login" >
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
            <label class="control-label" for="input-password">Contraseña</label>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Contraseña"
              id="input-password"
              class="form-control"
            />
            <a
              href="/cuenta/olvide-mi-contrasena"
              >Contraseña olvidada</a
            >
          </div>
          <input type="submit" value="Login" class="btn btn-primary" />
          <input
            type="hidden"
            name="redirect"
            value="/cuenta/account"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        async login() {
            console.log('Login...')
        }
    }
}
</script>