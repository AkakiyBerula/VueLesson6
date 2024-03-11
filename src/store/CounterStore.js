import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        message: "Counter",
        counter: 0
    }),
    mutations: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        incrementTwo() {
            this.counter += 2;
        },
        decrementTwo() {
            this.counter -= 2;
        }
    },
});

