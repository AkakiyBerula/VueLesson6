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
        decrement(state) {
            this.counter--;
        },
        incrementTwo() {
            this.increment();
            this.increment();
        },
        decrementTwo() {
            this.decrement();
            this.decrement();
        }
    },
    
});