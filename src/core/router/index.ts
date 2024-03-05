import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default Router