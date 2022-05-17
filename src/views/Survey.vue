<template>
  <div>
    <h1>Survey</h1>
      <v-card class="mx-auto overflow-hidden" height="100%">
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
import { mapState } from 'vuex';
import { errorMessage } from '@/helpers';

export default {
  name: 'Survey',
  methods: {
      onSubmit() {
         this.$v.$touch();
         if(this.$v.$invalid) return;
         
         this.$store.dispatch('feedback');
         
      },
      errorMessage
   },

    computed: {
     ...mapState({
        survey: ({ survey }) => survey.questions
      })
   }
  
}
</script>

<style scoped>

</style>
