
const routes = [
  {
    path: '/Main',
    //component: () => import('layouts/MainLayout.vue'),
    //component: () => import('pages/Index.vue'),
    component: () => import('layouts/Main2.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/IndexOptions.vue'),
      },
      {
        path: '/Perfil',
        component: () => import('pages/Profile.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/About.vue'),
      },
      {
        path: '/Prereitura',
        component: () => import('pages/Prereitura.vue'),
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/Main2',
    component: () => import('layouts/Main2.vue')
  },
  {
    path: '/',
    component: () => import('pages/Splash.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
