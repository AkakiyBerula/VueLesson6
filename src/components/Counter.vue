<template>
  <v-app>
    <v-container class="text-center">
      <h1>{{ text }}</h1>
      <h2>{{ counter }}</h2>
      <v-btn @click="incrementTwo" color="success">+2</v-btn>

      <v-btn @click="increment" color="success">+</v-btn>

      <v-btn @click="decrement" color="danger">-</v-btn>

      <v-btn @click="decrementTwo" color="danger">-2</v-btn>

      <h2> Квадрат числа: {{ getPow }} </h2>

      <h2> {{ isEven ? "Парне" : "Непарне" }}!</h2>

      <v-text-field v-model="message" label="New Message"></v-text-field>
      <v-btn @click="saveMessage" color="primary">Save Message</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore, useTextStore } from '../store/CounterStore';

export default {
  name: 'Counter',
  computed: {
    ...mapState(useCounterStore, ['counter', 'getPow', 'isEven']),
    ...mapState(useTextStore, ['text']),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'incrementTwo', 'decrementTwo']),
    saveMessage() {
      const counterStore = useCounterStore();
      counterStore.getMessage(this.message);
    }
  },
  data() {
    return {
      message: 'Повідомлення'
    };
  }
};
</script>

