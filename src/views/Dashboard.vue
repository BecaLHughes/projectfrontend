
<template>
  <div>
    <v-card
      class="mx-auto overflow-hidden"
      height="800"
    >
      <v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Dashboard</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <line-chart :data="[40, 39, 10, 40, 39, 100, 40]" :labels="[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ]" />
    </v-card>
  </div>
</template>


<script>
import LineChart from '@/components/LineChart';
export default {
  name: 'Dashboard',
  data: () => ({
      drawer: false,
      group: null,
  }),
  components: {
    LineChart
  }
}


</script>

<style scoped>

</style>
