import Home from '../views/Home.vue'
import stars from '../views/userponent/starts.vue'
import followering from '../views/userponent/followering.vue'
import followers from '../views/userponent/followers.vue'
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
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue'),
        children: [
            { name: 'stars', path: '/stars', component: stars },
            { name: 'followers', path: '/followers', component: followers },
            { name: 'followering', path: '/followering', component: followering } 
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/search.vue')
    },
    {
        path: '/content',
        name: 'content',
        component: () => import('../views/content.vue')
    }
]

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes,
})
export default router
