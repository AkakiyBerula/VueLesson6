import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        isAdmin: false,
        user: null,
    }),
    actions: {
        login(user) {
            this.isAuthenticated = true;
            this.isAdmin = user.isAdmin;
            this.user = user;
        },
        logout() {
            this.isAuthenticated = false;
            this.isAdmin = false;
            this.user = null;
        },
    },
});
