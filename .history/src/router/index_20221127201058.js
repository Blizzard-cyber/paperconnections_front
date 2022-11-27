import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)

import Home from '../views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'
import topper from '../components/topper.vue'
import footer from '../components/footer.vue'

app.component('topper', topper)
app.component('footer', footer)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/nav',
        name: 'nav',
        component: () => import('../views/nav.vue')
    },
    {
        path: '/os',
        name: 'os',
        component: () => import('../views/os.vue')
    },
    {
        path: '/software',
        name: 'software',
        component: () => import('../views/software.vue')
    }
]

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes,
})
export default router
