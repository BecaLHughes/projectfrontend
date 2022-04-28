<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="800">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Feedback</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/">Dashboard</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/profile">Profile</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/profile">Logout</router-link></v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <div class="pa-md-10 mx-lg-auto">
          <h1 align="center">Your Score</h1>
      </div>
      <div class="text-center">
        <v-progress-circular :rotate="-90" :size="300" :width="15" :value="score.value" color="teal">
      <h1 class="score">{{ score.value }}</h1>
    </v-progress-circular>

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
        group: null
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

