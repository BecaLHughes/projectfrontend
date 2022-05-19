<template>
<div>
  <h1 class="text-center font-weight-light mb-4" color="primary">My Profile</h1>
  <v-card>
    <div class="container">
      <div class="row">
         <v-col cols="12" sm="6" offset="3">
            <div v-if="!editMode"> 
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>First Name</v-list-item-subtitle>
                  <v-list-item-title>{{ form.first_name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Last Name</v-list-item-subtitle>
                  <v-list-item-title>{{ form.last_name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Email Address</v-list-item-subtitle>
                  <v-list-item-title>{{ form.email }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>

            <div v-else>
              <form novalidate @submit.prevent="onSubmit">
                <v-text-field :error-messages="errorMessage('First Name', 'first_name', $v)" v-model="form.first_name" label="First Name" outlined></v-text-field>
                <v-text-field :error-messages="errorMessage('Last Name', 'last_name', $v)" v-model="form.last_name" label="Last Name" outlined></v-text-field>
                <v-text-field :error-messages="errorMessage('Email', 'email', $v)" v-model="form.email" label="Email Address" outlined></v-text-field>
                <v-text-field :error-messages="errorMessage('Password', 'password', $v)" v-model="form.password" label="Password" outlined type="password"></v-text-field>
                
                <v-btn rounded color="primary" large block align="right" type="submit">
                  Save Changes
                </v-btn>
              </form>
            </div>

            <v-col>
              <v-btn rounded color="primary" large block align="right" @click="editMode = true" v-if="!editMode">
                Edit Profile
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
         </v-col>
      </div>
   </div>
  </v-card>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, minLength, maxLength, email} from 'vuelidate/lib/validators';
import { errorMessage } from '@/helpers';

export default {
  name: 'Profile',
  data() {
    return {
      editMode: false,
      dialog: false,
    }
  },
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
       }
    }, 
  },
  mounted( ) {
    this.$store.dispatch('getProfileDetails');
  },
   computed: {
     ...mapState({
        form: ({ profile }) => profile
      })
   },
   methods: {
      async onSubmit() {
         this.$v.$touch();
         if(this.$v.$invalid) return;

         const res = await this.$store.dispatch('updateProfileDetails', this.form);

         this.editMode = !res;
      },
      ...mapActions ( {
        onDelete: 'deleteProfile'
      }),
      errorMessage
   }
}
</script>

<style scoped>

</style>

