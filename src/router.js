import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
history: createWebHistory(),
routes: [
{
    path: '/',
    name: 'home',
    component: () => import('./pages/AppHome.vue')
},
{
    path: '/project/:id',
    name: 'project',
    component: () => import('./pages/ProjectDetails.vue')
},
]
});

export { router };