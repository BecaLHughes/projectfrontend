<template>
  <div>
    <v-card>
      <div class="pa-md-10 mx-lg-auto">
          <h1 align="center">Your Score</h1>
      </div>
      <div class="text-center mb-6">
        <v-progress-circular :rotate="-90" :size="300" :width="15" :value="score.value" color="teal">
          <h1 class="score">{{ score.value }}</h1>
        </v-progress-circular>
      </div>
      <div class="pl-3 pr-3">
      <v-alert
          border="top"
          color="blue lighten-2"
          dark
          v-for="e in errors" :key="e.question"
        >
          <h4>{{ e.question }}</h4>
          <v-chip
            class="mt-2 mb-3"
            color="blue"
            label
          >
            Score: {{ e.score}}
          </v-chip>
          <h2>Tip</h2>
          <p>{{ e.tip }}</p>
        </v-alert>
        </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
      return {
        score: {
          interval: null,
          value: 0,
        },
        drawer: false,
        group: null,
        errors: [ {
          question: 'Lorem Ipsum',
          score: 0,
          tip: 'Lorem ipsum'
        }]

      }
  },
  beforeDestroy () {
    clearInterval(this.score.interval)
  },
    
  mounted () {
    this.animateScore(60);
  },
  methods: {
    animateScore(score) {
      this.score.interval = setInterval(() => {
          if (this.score.value === score) {
            return clearInterval(this.score.interval)
          }
          this.score.value += 10
        }, 200);
    }

  }

}
</script>

<style scoped>
.score {
  font-size:80px;
}

</style>

