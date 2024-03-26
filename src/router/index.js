import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import AdminList from "../components/AdminList.vue"
import UserPage from "../components/UserPage.vue"
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";

import { useAuthStore } from "../store/AuthStore.js"


const routes = [
    { 
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/admin-list',
        name: 'admin-list',
        component: AdminList,
        meta: { requiresAdmin: true }
    },
    {
        path: '/user-page',
        name: 'user-page',
        component: UserPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: "/not-found",
        name: "not-found",
        component: NotFound
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth || record.meta.requiresAdmin)) {
        if (to.meta.requiresAuth && !useAuthStore.isAuthenticated) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else if (to.meta.requiresAdmin && !useAuthStore.isAdmin) {
            next({
                path: '/not-found',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
      next();
    }
});





router.afterEach((to, from) => {
    console.log("Перехід нас сторінку ", to.name, " була виконано успішно(afterEach)!")
});

function messagePattern(data) {
    return 'Була відкрита сторінка ' + data + '!' 
}

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function isAdminRole() {
    return localStorage.getItem('isAdmin') === 'Admin';
}

export default router