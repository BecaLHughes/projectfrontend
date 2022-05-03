

<template>
<div class="login-page">
   <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="4">
            <form novalidate @submit.prevent="onSubmit">
               <h1>Sign in</h1>
               <p>
                  Don't have an account? 
                  <router-link to="/signup">Sign up here</router-link>
               </p>
               <v-text-field :error-messages="errorMessage('Email', 'email', $v)" v-model="form.email" label="Email Address" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Password', 'password', $v)"  v-model="form.password" label="Password" outlined></v-text-field>

               <v-row>
                  <v-col>
                     <router-link to="/forgot-password">
                        <v-btn text color="primary" outlined rounded large>
                           Forgot password
                        </v-btn>
                     </router-link>
                  </v-col>

                  <v-col>
                     <v-btn rounded color="primary" large block align="right" type="submit">
                     Sign In
                     </v-btn>
                  </v-col>
               </v-row>
            </form>
         </v-col>
      </div>
   </div>
</div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';
import { errorMessage } from '@/helpers';

export default {
  name: 'SignIn',
  data () {
     return {
        form: {
         email: null,
         password: null
      }
     }
  },
  validations: {
    form: {
       email: {
          required,
          email
       },
       password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(20)
       }
    } 
  },

   methods: {
      onSubmit() {
         console.log(this.form);
         this.$v.$touch()
         if(this.$v.$invalid) return
         this.$router.push({ path: '/' });

         
      },
      errorMessage
   }
}

</script>

<style scoped>

</style>
