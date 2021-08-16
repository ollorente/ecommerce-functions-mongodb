<template>
  <div>
    <!-- <FormLogup /> -->
    <div class="container">
      <main class="grid col-3">
        <div class="span-2">
          <TitleH1 :title1="title1" />
          <p>
            Enter the e-mail address associated with your account. Click submit
            to have a password reset link e-mailed to you.
          </p>
          <form @submit.prevent="forgotten" class="form-horizontal">
            <fieldset>
              <legend>Your E-Mail Address</legend>
              <div class="form-group required">
                <label class="col-sm-2 control-label" for="input-email"
                  >E-Mail Address</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="email"
                    value=""
                    placeholder="E-Mail Address"
                    id="input-email"
                    class="form-control"
                  />
                </div>
              </div>
            </fieldset>
            <div class="buttons clearfix">
              <div class="pull-left">
                <a href="/cuenta/login" class="btn btn-default">Back</a>
              </div>
              <div class="pull-right">
                <input type="submit" value="Continue" class="btn btn-primary" />
              </div>
            </div>
          </form>
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
    title: 'Olvidé mi contraseña © CiudadBusca.co',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Olvidé mi contraseña',
      },
    ],
  },
  components: {
    TitleH1,
  },
  data() {
    return {
      form: {},
      title1: {
        name: 'Forgot Your Password?',
        class: 'title h3',
      },
    }
  },
  methods: {
    async forgotten() {
      console.log('Enviando...')
    },
  },
}
</script>
