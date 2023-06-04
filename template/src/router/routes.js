const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'Board', component: () => import('pages/Board/BoardList.vue') },
      { path: 'Gallery', component: () => import('pages/Gallery/GalleryList.vue') },
      { path: 'Visitor', component: () => import('pages/Visitor/VisitorList.vue') },
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
