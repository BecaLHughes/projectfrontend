<script>
export default {
  name: 'SignUp',
  data: () => ({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirmpassword: confirmpassword
    }),
}
</script>

<template>
<div class="login-page">
      <div class="container">
         <div class="row">
               <v-col
                  cols="12"
                  sm="6"
                  offset="4"
               >
               <h1>Sign up</h1>
               <p>
                  Already have an account? <router-link to="/signin">Sign in here</router-link>
               </p>

               <v-text-field
                  v-model= "firstname"
                  label="First Name"
                  outlined
               ></v-text-field>

               <v-text-field
                  v-model= "lastname"
                  label="Last Name"
                  outlined
               ></v-text-field>

               <v-text-field
                  v-model= "email"
                  label="Email Address"
                  outlined
               ></v-text-field>

               <v-text-field
                  v-model= "password"
                  label="Password"
                  outlined
               ></v-text-field>

               <v-text-field
                  v-model= "confirmpassword"
                  label="Confirm Password"
                  outlined
               ></v-text-field>

               <router-link to="/">
               <v-btn
                  rounded
                  color="primary"
                  large
                  align="right"
               >
               Sign up
               </v-btn>
               </router-link>
               </v-col>
            </div>
         </div>
      </div>
</template>

<style>
</style>
