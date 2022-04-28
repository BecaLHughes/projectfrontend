
<template>
<div class="login-page">
   <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="4">
            <form novalidate @submit.prevent="onSubmit">
               <h1>Forgot your password?</h1>
               <p>
                  Enter your email address below to receive an email with instructions on how to reset your password or
                  <router-link to="/signin">sign in here.</router-link>
               </p>

               <v-text-field v-model="form.email" label="Email Address" outlined></v-text-field>

               <v-row>
                  <v-col>
                    <div>
                     <v-btn rounded color="primary" large block align="right" type="submit" @click="alert = !alert">
                     Send Email
                     </v-btn>
                     </div>
                  </v-col>
                  <v-alert :value="alertsuccess" dense text type="success" transition="scale-transition">
                  Your reset password email has been sent <strong>successfully</strong>
                  </v-alert>
                  <v-alert :value="alertunsuccessful" dense outlined type="error">
                  We have been unable to send your reset password email. Please contact an admin at <strong>becalhughes@gmail.com</strong>
                </v-alert>
               </v-row>
            </form>
         </v-col>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data () {
     return {
        form: {
         email: null,
      },
      alertsuccess: true,
      alertunsuccessful: true,

     }
  },
  
   methods: {
      onSubmit() {
         console.log(this.form);
         
         this.$router.push({ path: '/signin' });
      }
   }
}
</script>

<style scoped>

</style>
