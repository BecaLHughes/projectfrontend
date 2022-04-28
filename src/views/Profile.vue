<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="800">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Profile</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/">Dashboard</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/profile">Profile</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/signin">Logout</router-link></v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="4">
            <form novalidate @submit.prevent="onSubmit">

               <v-text-field v-model="user.fname" label="First Name" outlined disabled></v-text-field>
               <v-text-field v-model="user.lname" label="Last Name" outlined disabled></v-text-field>
               <v-text-field v-model="user.email" label="Email Address" outlined disabled></v-text-field>
               <v-text-field v-model="user.password" label="Password" outlined disabled></v-text-field>

                  <v-col>
                    <router-link to="/editprofile">
                     <v-btn rounded color="primary" large block align="right">
                     Edit Profile
                     </v-btn>
                     </router-link>
                  </v-col>
                  <v-col>
                     <v-btn rounded color="error" large block align="right" type="submit">
                     Delete Account
                     </v-btn>
                  </v-col>
            </form>
         </v-col>
      </div>
   </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
     return {
        user: {
         fname: String(),
         lname: String(),
         email: String(),
         password: String(),
      },
         drawer: false,
         group: null,
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

