<template>
  <div>
    <h1 class="text-align-center">Self Efficacy Survey</h1>

    <div>
        <p class="align-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>

    <div class="form-group" v-for="(item, index) in questions" :key="index">
        <div class="col-sm-12">
            <label class="col-sm-4 control-label">{{ item.question }}</label>
        </div>

        <div v-if="item.type == 'radio'">
            <v-slider
                v-model="item.answer"
                :tick-labels="radioLabels"
                :max="100"
                step="10"
                ticks="always"
                tick-size="1"
            ></v-slider>

            <div class="col-sm-12">
                <div class="row">
                    <div class="col-xs-4"><h5>Bad</h5></div>
                    <div class="col-xs-4"><h5 class="text-center">Neutral</h5></div>
                    <div class="col-xs-4"><h5 class="text-right">Good</h5></div>
                </div>
            </div>
        </div>

        <div v-else>
        <v-textarea
          outlined
          name="input-7-4"
          v-model="item.answer"
        ></v-textarea>
        {{ item.answer }}
        </div>
    </div>
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
                question: 'Question 1',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 2',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 3',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 4',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 5',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 6',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 7',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 8',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 9',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 10',
                type: 'radio',
                answer: 50
            },
            {
                question: 'Question 11',
                type: 'text',
                answer: null
            }
        ]
    }
  }
  
}
</script>



<style scoped>

</style>
