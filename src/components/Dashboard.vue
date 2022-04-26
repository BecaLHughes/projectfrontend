<script>
export default {
  name: 'Dashboard'
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <router-link to="/survey">Take Survey</router-link>
  </div>
  <div>
    <router-link to="/profile">Profile</router-link>
  </div>
  <div>
    <router-link to="/signin">Logout</router-link>
  </div>
</template>

<style scoped>

</style>
