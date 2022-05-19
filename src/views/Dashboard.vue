
<template>
  <div>
    <h1 class="text-center font-weight-light mb-4" color="primary" >My Dashboard</h1>
    <v-card>
      <line-chart :data="graphData" :labels="graphLabels"/>
        <div>
          <v-row class="mt-2">
            <v-col class="d-flex justify-end mb-6">
                <router-link to="/survey">
                  <v-btn color="primary" rounded large class="mr-6">
                    Take Survey
                  </v-btn>
                </router-link>
              </v-col>
          </v-row>
        </div>
    </v-card>
  </div>
</template>


<script>
import LineChart from '@/components/LineChart';
import { mapState, mapGetters } from "vuex";

export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  mounted() {
    this.$store.dispatch('getScoreHistory');
  },
  computed: {
    ...mapState({
      history: ({dashboard}) => dashboard.history 
    }),
    ...mapGetters([
      'graphLabels',
      'graphData'
    ])
  }
}



</script>

<style scoped>

</style>
