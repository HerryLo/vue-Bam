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
    }]
})