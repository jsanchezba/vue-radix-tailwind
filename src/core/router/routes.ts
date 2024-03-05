import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] =  [
    {
        path: '/',
        component: () => import('@/pages/main/MainLayout.vue') ,
        children: [
            {
                name: 'Home',
                path: '/',
                component: () => import('@/pages/Home.vue')
            },
            {
                name: 'About',
                path: '/about',
                component: () => import('@/pages/About.vue')
            },
        ]
    },
]

export default routes