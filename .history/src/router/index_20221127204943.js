import Home from '../views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
    },
    {
        
]

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes,
})
export default router
