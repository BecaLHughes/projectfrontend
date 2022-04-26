@import 

<script>
export default {
  name: 'SignIn'
}
</script>

<template>
    <div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-lg-offset-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <form>
                     <div class="form-group">
                        <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                     </div>
                     <div class="form-group">
                        <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                     </div><div class="form-group">
                        <input type="submit" class="btn btn-primary" @click="doLogin">
                     </div>
                     <p>
                        Don't have an account? <router-link to="/signup">Sign up here</router-link>
                     </p>
                     <p><router-link to="/forgotpassword">Forgot password</router-link></p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>

</style>
