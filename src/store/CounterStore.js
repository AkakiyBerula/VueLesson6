import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        message: "Counter",
        counter: 0
    }),
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        updateName(newName) {
            this.name = newName;
        },
  },
});

