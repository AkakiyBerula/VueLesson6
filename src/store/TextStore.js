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