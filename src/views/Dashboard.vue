
<template>
  <div>
    <h1>Dashboard</h1>
    <v-card>
      <line-chart :data="[40, 39, 10, 40, 39, 100, 40]" :labels="[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ]" />
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
export default {
  name: 'Dashboard',
  components: {
    LineChart
  }
}


</script>

<style scoped>

</style>
