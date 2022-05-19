
<template>
  <div>
    <h1 class="text-center font-weight-light mb-4" color="primary">My History</h1>
    <v-timeline>
        <v-timeline-item
          v-for="(item, i) in formattedHistory"
          :key="i"
          color="indigo"
        >
          <v-card color="indigo" dark>
            <v-card-title class="text-h6">{{ item.submitted }} </v-card-title>
            <v-card-text class="white text--primary">
              <p class="pt-3">
                {{ item.feedback }}
              </p>

              <v-chip class="mt-2" color="indigo" label>
                Score: {{ item.score }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Dashboard",

  mounted() {
    this.$store.dispatch("getScoreHistory");
  },
  computed: {
    ...mapState({
      history: ({ dashboard }) => dashboard.history,
    }),
    ...mapGetters(["formattedHistory"]),
  },
};
</script>

<style scoped>
</style>
