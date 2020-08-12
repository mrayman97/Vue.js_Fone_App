import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sams from './views/Sams.vue'
import Apple from './views/Apple.vue'
import Fone from './views/Fone.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sams',
            name: 'Sams',
            component: Sams
        },
        {
            path: '/apple',
            name: 'Apple',
            component: Apple
        },
        {
            path: '/fones/:species/:id',
            name: 'Fone',
            component: Fone
        }
    ]
})