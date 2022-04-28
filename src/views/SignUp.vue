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

               <v-text-field v-model="form.fname" label="First Name" outlined></v-text-field>
               <v-text-field v-model="form.lname" label="Last Name" outlined></v-text-field>
               <v-text-field v-model="form.email" label="Email Address" outlined></v-text-field>
               <v-text-field v-model="form.password" label="Password" outlined></v-text-field>
               <v-text-field v-model="form.confirmpassword" label="Confirm Password" outlined></v-text-field>

                  <v-col>
                     <v-btn rounded color="primary" large block align="right" type="submit">
                     Sign up
                     </v-btn>
                  </v-col>
            </form>
         </v-col>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
     return {
        form: {
         fname: null,
         lname: null,
         email: null,
         password: null,
         confirmpassword: null
      }
     }
  },
  
   methods: {
      onSubmit() {
         console.log(this.form);
         this.$router.push({ path: '/' });
      }
   }
}
</script>

<style scoped>

</style>
