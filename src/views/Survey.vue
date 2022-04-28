<template>
  <div>
      <v-card class="mx-auto overflow-hidden" height="100%">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Self Efficacy Survey</v-toolbar-title>
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
              <v-list-item-title><router-link to="/profile">Logout</router-link></v-list-item-title>
            </v-list-item>
            
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <form novalidate @submit.prevent="onSubmit">
        <div class="pa-md-4 mx-lg-auto">
        <h3 align="center" margin="10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h3>
    </div>
    <br>
    <div class="form-group" v-for="(item, index) in questions" :key="index">
        <div class="col-sm-12">
            <label class="col-sm-4 control-label"><strong>{{ item.question }}</strong></label>
        </div>

        <div v-if="item.type == 'radio'" class="pa-md-4 mx-lg-auto">
            <v-slider v-model="item.answer" :tick-labels="radioLabels" :max="100" step="10" ticks="always" tick-size="1"></v-slider>

            <div class="col-sm-12">
                <v-row>
                    <v-col>
                        <div class="d-flex justify-start mb-6"><h5>Low</h5></div>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-center mb-6"><h5>Medium</h5></div>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-end mb-6"><h5>High</h5></div>
                    </v-col>
                </v-row>
             </div>
        </div>

        <div v-else class="pa-md-4 mx-lg-auto">
        <v-textarea
          outlined
          name="input-7-4"
          v-model="item.answer"
        ></v-textarea>
        {{ item.answer }}
        </div>
        </div>
        <v-col>
            <v-btn rounded color="primary" large block align="right" type="submit">
            Submit
            </v-btn>
        </v-col>
      </form>
    
        
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data () {
    return {
        picked:0 ,
        radioLabels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
        questions:[
            {
                question: 'Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 8: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 9: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 10: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 11: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                type: 'text',
                answer: null
            }
        ],
        drawer: false,
        group: null,
    }
  },
  methods: {
      onSubmit() {
         console.log(this.picked);
         this.$router.push({ path: '/feedback' });
      }
   }
  
}
</script>

<style scoped>

</style>
