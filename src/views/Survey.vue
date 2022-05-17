<template>
  <div>
    <h1>Survey: <br/><small>{{ title }}</small></h1>
      <v-card class="mx-auto overflow-hidden" height="100%">
      <form novalidate @submit.prevent="onSubmit">
        <div class="pa-md-4 mx-lg-auto">
        <h3 align="center" margin="10">
            The following scale was developed to evaluate the ability for collaboration within an Agile Software Development Life Cycle. This tool is to be used to evaluate yourself personally and give feedback on ways to improve collaboration in key areas. The scale can be administered to evaluate persons 16 and older. 
        </h3>
    </div>
    <br>
    
    <div class="form-group" v-for="(item, index) in questions" :key="index">
        <div class="col-sm-12">
            <label class="col-sm-4 control-label"><strong>{{ item.question }}</strong></label>
        </div>

        <div class="pa-md-4 mx-lg-auto">
            <v-slider v-model="item.answer" :tick-labels="item.options" :max="100" step="10" ticks="always" tick-size="1"></v-slider>

            <div class="col-sm-12">
                <v-row>
                    <v-col>
                        <div class="d-flex justify-start mb-6"><h5>Cannot do at all</h5></div>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-center mb-6"><h5>Moderately certain can do</h5></div>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-end mb-6"><h5>Highly certain can do</h5></div>
                    </v-col>
                </v-row>
             </div>
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
  mounted() {
      this.$store.dispatch('getSurvey');
      this.$store.commit('resetScoreState');
  },
  computed: {
     ...mapState({
        questions: ({ surveys }) => {
            return surveys.questions.map(item => ({
                ...item, 
                answer: 50,
                options: item.options.map(item => item + '')
            }))
        },
        title: ({ surveys }) => surveys.title
      }),
   },
  methods: {
      onSubmit() {
         this.$store.dispatch('getFeedback', this.questions);
         
      },
      errorMessage
   }
}
</script>

<style scoped>

</style>
