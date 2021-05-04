import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue')
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'),
    children: [/* 子路径*/
      {
        path: 'books',
        name: 'Books',
        component: () => import(/* webpackChunkName: "Book" */ '../views/Books/index.vue'),
      },
      
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
