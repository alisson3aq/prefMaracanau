
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
        path: '/hole',
        component: () => import('pages/Hole.vue'),
      },
      {
        path: '/pruning',
        component: () => import('pages/Pruning.vue'),
      },
      {
        path: '/cleaning',
        component: () => import('pages/Cleaning.vue'),
      },
      {
        path: '/collectTrash',
        component: () => import('pages/CollectTrash.vue'),
      },
      {
        path: '/inspectvs',
        component: () => import('pages/Inspectvs.vue'),
      },
      {
        path: '/noisePollution',
        component: () => import('pages/NoisePollution.vue'),
      },
      {
        path: '/signaling',
        component: () => import('pages/Signaling.vue'),
      },
      {
        path: '/busLine',
        component: () => import('pages/BusLine.vue'),
      },
      {
        path: '/socialNetworks',
        component: () => import('pages/SocialNetworks.vue'),
      },
      {
        path: '/pests',
        component: () => import('pages/Pests.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/About.vue'),
      },
      {
        path: '/Prefeitura',
        component: () => import('pages/Prefeitura.vue'),
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
