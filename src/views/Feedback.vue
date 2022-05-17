<template>
  <div>
    <v-card>
      <div class="pa-md-10 mx-lg-auto">
        <h1 align="center">Your Score</h1>
      </div>
      <div class="text-center mb-6">
        <v-progress-circular
          :rotate="-90"
          :size="300"
          :width="15"
          :value="score.value"
          color="teal"
        >
          <h1 class="score">{{ score.value }}</h1>
        </v-progress-circular>
      </div>

      <div class="pt-2 pl-3 pr-3">
        <v-alert border="top" color="blue lighten-2" dark v-if="feedback">
          <h4>Feedback</h4>
          <v-chip class="mt-2 mb-3" color="blue" label>
            Score: {{ score.value }}
          </v-chip>
          <h2>Tip</h2>
          <p>{{ feedback }}</p>
        </v-alert>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Feedback",
  beforeDestroy() {
    this.$store.dispatch("clearScoreInterval");
  },
  computed: {
    ...mapState({
      score: ({ feedback }) => feedback.score,
      feedback: ({ feedback }) => feedback.feedback,
    }),
  },
};
</script>

<style scoped>
.score {
  font-size: 80px;
}
</style>

