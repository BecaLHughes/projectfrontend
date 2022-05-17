<template>
  <v-app>
    <v-main>

      <v-container>
        <v-row>
          <v-col cols="2" class="sidebar" v-if="authorized">
            <v-list nav dense color="transparent">
              <v-list-item-group>
                <router-link to="/">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/history">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-clock</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>History</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/profile" class="mb-12">
                  <v-list-item class="mb-12">
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                  </v-list-item>
                </router-link>
                <hr/>
                <v-list-item @click="onLogout" class="mt-2">
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col >
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  async mounted() {
    await this.$store.dispatch('storage/initialiseStore');
  },
  methods: {
    onLogout(){
      this.$store.dispatch('signUserOut')
    }
  },
  computed: {
    ...mapState({
        authorized: ({ storage }) => storage.token
    })

  }
};
</script>

<style scoped>
.sidebar {
  background-color: #cdcbcb;
}

.sidebar a { 
  text-decoration: none;
  color: #282828;
}
</style>
