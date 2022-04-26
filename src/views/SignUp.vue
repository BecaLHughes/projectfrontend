<script>
export default {
  name: 'SignUp'
}
</script>

<template>
<div class="row">
   <div class="col-lg-4 col-lg-offset-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
      <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
         <h1>Sign Up</h1>
         <form>
            <div class="form-group">
               <input v-model="firstName" type="string" class="form-control" placeholder="First Name" required>
            </div>
            <div class="form-group">
               <input v-model="lastName" type="string" class="form-control" placeholder="Last Name" required>
            </div>
            <div class="form-group">
               <input v-model="email" type="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
               <input v-model="password" type="password" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group">
               <input v-model="passwordConfirm" type="password" class="form-control" placeholder="Confirm Password" required>
            </div>
            <div class="form-group">
               <input type="submit" class="btn btn-primary" @click="doLogin">
            </div>
            <div>
               <p>Already have an account? <a href="/signin" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a></p>
            </div>
         </form>
      </div>
   </div>
</div>
</template>

<style>
</style>
