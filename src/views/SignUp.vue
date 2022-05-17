<template>
<div class="login-page">
   <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="4">
            <form novalidate @submit.prevent="onSubmit">
               <h1>Sign up</h1>
               <p>
                  Already have an account? 
                  <router-link to="/signin">Sign in here</router-link>
               </p>


               <v-text-field :error-messages="errorMessage('First Name', 'first_name', $v)" v-model="form.first_name" label="First Name" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Last Name', 'last_name', $v)" v-model="form.last_name" label="Last Name" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Email', 'email', $v)" v-model="form.email" label="Email Address" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Password', 'password', $v)" v-model="form.password" label="Password" outlined></v-text-field>
               <v-text-field :error-messages="errorMessage('Confirm Password', 'confirmpassword', $v)" v-model="form.confirmpassword" label="Confirm Password" outlined></v-text-field>
               <v-row>
                  <v-col>
                     <v-btn rounded color="primary" large block align="right" type="submit">
                     Sign up
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
         </v-col>
      </div>
   </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';
import { errorMessage } from '@/helpers';

export default {
   
  name: 'SignUp',

  validations: {
    form: {
       first_name: {
          required
       },
       last_name: {
          required
       },
       email: {
          required,
          email
       },
       password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(20)
       },
       confirmpassword: {
          sameAs: sameAs('password'),
          minLength: minLength(8),
          maxLength: maxLength(20),
          required,
       }
    } 
  },
  
  computed: {
     ...mapState({
        form: ({ signup }) => signup.form
      })
   },
   methods: {
      onSubmit() {
         this.$v.$touch();
         if(this.$v.$invalid) return;
         
         this.$store.dispatch('signup');
         
      },
      errorMessage
   }
}
</script>

<style scoped>

</style>
