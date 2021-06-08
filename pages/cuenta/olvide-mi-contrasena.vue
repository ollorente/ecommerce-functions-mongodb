<template>
  <div id="content" class="col-sm-9">
    <h1>Forgot Your Password?</h1>
    <p>
      Enter the e-mail address associated with your account. Click submit to
      have a password reset link e-mailed to you.
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
          <a
            href="/cuenta/login"
            class="btn btn-default"
            >Back</a
          >
        </div>
        <div class="pull-right">
          <input type="submit" value="Continue" class="btn btn-primary" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    }
  },
  methods: {
    async forgotten() {
      console.log('Enviando...')
    },
  },
}
</script>