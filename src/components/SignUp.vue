<script>
export default {
  name: 'SignUp'
}
</script>

<template>
 <div>
    <div id="app">

   <div>
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <form class="form-group">
                     <input v-model="firstName" type="string" class="form-control" placeholder="First Name" required>
                     <input v-model="lastName" type="string" class="form-control" placeholder="Last Name" required>
                     <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="passwordConfirm" type="password" class="form-control" placeholder="Confirm Password" required>
                     <input type="submit" class="btn btn-primary" @click="doLogin">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                     </p>s
                  </form>
               </div>

               <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <form class="form-group">
                      <input v-model="firstNameReg" type="string" class="form-control" placeholder="First Name" required>
                     <input v-model="lastNameReg" type="string" class="form-control" placeholder="Last Name" required>
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
</template>

<style scoped>

</style>
