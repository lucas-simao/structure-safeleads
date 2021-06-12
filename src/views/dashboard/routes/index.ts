export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/projects.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/project.vue'),
    meta: {requiresAuth: true}
  }
]