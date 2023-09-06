import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SearchLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/test', component: () => import('pages/TestPage.vue') },
      {
        path: '/profile/:id',
        name: 'profile',
        component: () => import('pages/ProfilePage.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/NewLogin.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
