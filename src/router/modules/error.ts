export const errorRoutes = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
}

export const notFound = {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
}