<template>
  <div>
    <HelloWorld msg="Hello" />
    <Counter />
    <ProductList />
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import ProductList from "./components/ProductList.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    ProductList
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
