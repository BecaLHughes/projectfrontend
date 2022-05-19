

<template>
<div class="login-page">
   <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="4">
            <v-card class="pt-4 pl-4 pr-4 pb-4">
            <form novalidate @submit.prevent="onSubmit">
               <h1>Sign in</h1>
               <p>
                  Don't have an account? 
                  <router-link to="/signup">Sign up here</router-link>
               </p>
               <v-text-field :error-messages="errorMessage('Email', 'username', $v)" v-model="form.username" label="Email Address" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Password', 'password', $v)"  v-model="form.password" label="Password" outlined type="password"></v-text-field>

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
               
               <v-alert
                  v-if="form.error"
                  class="mt-3"
                  border="top"
                  color="red lighten-2"
                  dark
               >
                  {{ form.error }}
               </v-alert>
            </form>
            </v-card>
         </v-col>
      </div>
   </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';
import { errorMessage } from '@/helpers';

export default {
  name: 'SignIn',
 
  validations: {
    form: {
       username: {
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
  computed: {
     ...mapState({
        form: ({ signin }) => signin
      })
   },
   methods: {
      onSubmit() {
         this.$v.$touch();
         this.form.error = null;
         if(this.$v.$invalid) return;
         
         this.$store.dispatch('signUserIn');
         
      },
      errorMessage
   }
}

</script>

<style scoped>

</style>
