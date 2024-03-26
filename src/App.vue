<template>
  <div>
    <v-tabs
      v-model="tab"
      align-tabs="end"
      color="deep-purple-accent-4"
    >
      <div @click="redirectTo('main')">
        <v-tab :value="1">Main Page</v-tab>
      </div>
      <div @click="redirectTo('admin-list')">
        <v-tab :value="2">Admin Page</v-tab>
      </div>
      <div @click="redirectTo('user-page')">
        <v-tab :value="3">User Page</v-tab>
      </div>
      <div @click="redirectTo('login')">
        <v-tab :value="4">Login</v-tab>
      </div>
      
    </v-tabs>
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    redirectTo(nameRoute) {
      const routeExists = this.$router.hasRoute(nameRoute);
        if (routeExists) {
          this.$router.push({ name: nameRoute });
        } else {
          this.$router.push({ name: 'not-found' });
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
