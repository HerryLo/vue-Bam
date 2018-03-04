import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: resolve => {
            require(['@/components/index'], resolve)
        }
    }, {
        path: '/writeArt',
        name: 'writeArt',
        component: resolve => {
            require(['@/components/article/writArt'], resolve)
        }
    }, {
        path: '/sign_in',
        name: 'sign_in',
        component: resolve => {
            require(['@/components/user/sign_in'], resolve)
        }
    }, {
        path: '/sign_up',
        name: 'sign_up',
        component: resolve => {
            require(['@/components/user/sign_up'], resolve)
        }
    }]
})