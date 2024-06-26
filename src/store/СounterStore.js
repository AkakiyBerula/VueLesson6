import { defineStore } from 'pinia';
import { useTextStore } from './TextStore'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        message: "Counter",
        counter: 0
    }),
    getters: {
        getPow(state) {
            return state.counter ** 2;
        },
        isEven(state) {
            return state.counter % 2 === 0;
        }
    },
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        incrementTwo() {
            this.increment();
            this.increment();
        },
        decrementTwo() {
            this.decrement();
            this.decrement();
        },
        getMessage(message) {
            const messageStore = useTextStore();
            messageStore.setMessage(message);
        }
    },
});