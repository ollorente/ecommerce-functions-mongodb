<template>
  <div>
    <div class="container-fluid">
      <div class="grid col-1 col-xs-3 col-sm-4 col-md-5 col-lg-6" style="gap: 0">
        <div style="background: #ff0">
          <ul style="width: 100%; margin: 0; padding: 0; list-style: none">
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion"
                class="text-dark text-bold text-uppercase"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Admin</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/productos"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Productos</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/#"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Órdenes</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/#"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Perfiles recurrentes</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/crear-tienda"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Tienda</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/#"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Link 5</a
              >
            </li>
            <li style="width: 100%; margin: 0; padding: 0">
              <a
                href="/administracion/#"
                class="text-dark"
                style="
                  width: 100%;
                  margin: 0;
                  padding: calc(var(--unit) / 2) var(--unit);
                  display: block;
                "
                ><i class="fas fa-basketball-ball"></i> Link 6</a
              >
            </li>
          </ul>
        </div>
        <div class="span-xs-2 span-sm-3 span-md-4 span-lg-5">
          <div style="background: #ff0; padding: calc(var(--unit) / 2) var(--unit); font-size: var(--unit); display: flex; justify-content: space-between; align-items: center;">
            <form>
              <i class="fas fa-search"></i>
              <input type="search" placeholder="Buscar producto..." />
            </form>
            <span>Admin</span>
          </div>
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
form {
  width: 50%;
  margin: 0;
  padding: calc(var(--unit) / 2);
  background: var(--white);
  border: solid 1px calc(var(--light) / 2);
  border-radius: calc(var(--unit) / 4);
  display: flex;
  align-items: center;
}

form i {
  margin-right: calc(var(--unit) / 2);
}

input {
  width: 100%;
  border: 0;
}

input:focus {
  border: 0;
  outline: none;
}
</style>
