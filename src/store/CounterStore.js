import { defineStore } from 'pinia';

export const useTextStore = defineStore('text', {
    state: () => ({
        text: 'Hello, world!',
    }),
    actions: {
        setMessage(newMessage) {
            this.text = newMessage;
        },
    },
});

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
        },
        getMessage(message) {
            const messageStore = useTextStore();
            messageStore.setMessage(message);
        }
    },
});
