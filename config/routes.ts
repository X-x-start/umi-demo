export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        title: '首页',
        path: '/',
        name: 'home',
        component: './index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
