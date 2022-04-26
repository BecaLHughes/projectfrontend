<script>

export default {
  name: 'Survey',
  data () {
    return {
        picked:0 ,
        questions:[
            {
                question: 'Question 1',
                type: 'radio',
                answer: null
            },
            {
                question: 'Question 2',
                type: 'text',
                answer: null
            }
        ]
    }
  }
  
}
</script>

<template>
  <div>
    <h1>Survey</h1>

    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>

    <div class="form-group" >
        <div class="col-sm-12">
            <label class="col-sm-4 control-label"></label>
        </div>
        <div class="col-sm-12">
            <div class="row">
                <div class="col-xs-4"><h5>Bad</h5></div>
                <div class="col-xs-4"><h5 class="text-center">Neutral</h5></div>
                <div class="col-xs-4"><h5 class="text-right">Good</h5></div>
            </div>
        </div>
    </div>
  </div>

</template>

<style scoped>

</style>
