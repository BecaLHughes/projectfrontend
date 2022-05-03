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

               <v-text-field v-model="user.fname" label="First Name" outlined :disabled="!editMode"></v-text-field>
               <v-text-field v-model="user.lname" label="Last Name" outlined :disabled="!editMode"></v-text-field>
               <v-text-field v-model="user.email" label="Email Address" outlined :disabled="!editMode"></v-text-field>
               <v-text-field v-model="user.password" label="Password" outlined :disabled="!editMode"></v-text-field>

                  <v-col>
                    <v-btn rounded color="primary" large block align="right" @click="onEdit">
                     {{ editMode ? 'Save Changes' : 'Edit Profile' }}
                     </v-btn>
                     <v-btn class="mt-6" rounded color="#fb2323" outlined large block align="right" @click="dialog = true">
                     Delete Profile
                     </v-btn>
                    
                  </v-col>

                  <v-dialog v-model="dialog" width="500">

                      <v-card>
                        <v-card-title class="text-h5">
                          Confirm
                        </v-card-title>

                        <v-card-text class="mt-3">
                          <p class="title">
                            Are you sure you want to delete your account? You will lose all your data.
                          </p>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-btn color="primary" text @click="dialog=false">
                            No, Don't delete
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn color="red" text @click="onDelete">
                            Yes, I want to delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  
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
         fname: null,
         lname: null,
         email: null,
         password: null,
      },
         drawer: false,
         group: null,
         editMode: false,
         dialog: false
     }
     
  },
  
   methods: {
      onSubmit() {
         console.log(this.form);
        
      },
      onEdit() {
        this.editMode = !this.editMode;
      },
      onDelete () {
        console.log('delete account');
        this.dialog = false;
        //  this.$router.push({ path: '/signin' });
      }
   }
}
</script>

<style scoped>

</style>

