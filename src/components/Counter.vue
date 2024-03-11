<template>
  <v-app>
    <v-container class="text-center">
      <h1>{{ message }}</h1>
      <h2>{{ counter }}</h2>
      <v-btn @click="increment" color="success">+</v-btn>
      <v-btn @click="decrement" color="danger">-</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../store/CounterStore';

export default {
  name: 'Counter',
  computed: {
    ...mapState(useCounterStore, ['message', 'counter']),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'setMessage'])
  },
};
</script>

