import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由配置
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/Index')
  },
  {
    name: 'button',
    path: '/button',
    component: () => import('@/pages/Button')
  },
  {
    name: 'confirm',
    path: '/confirm',
    component: () => import('@/pages/Confirm')
  },
  {
    name: 'counter',
    path: '/counter',
    component: () => import('@/pages/Counter')
  },
  {
    name: 'dialog',
    path: '/dialog',
    component: () => import('@/pages/Dialog')
  },
  {
    name: 'input',
    path: '/input',
    component: () => import('@/pages/Input')
  },
  {
    name: 'selection',
    path: '/selection',
    component: () => import('@/pages/Selection')
  },
  {
    name: 'picker',
    path: '/picker',
    component: () => import('@/pages/Picker')
  },
  {
    name: 'select',
    path: '/select',
    component: () => import('@/pages/Select')
  },
  {
    name: 'sheetBottom',
    path: '/sheet/bottom',
    component: () => import('@/pages/SheetBottom')
  },
  {
    name: 'snackbar',
    path: '/snackbar',
    component: () => import('@/pages/Snackbar')
  },
  {
    name: 'tabs',
    path: '/tabs',
    component: () => import('@/pages/Tabs')
  },
  {
    name: 'toolbar',
    path: '/toolbar',
    component: () => import('@/pages/Toolbar')
  },
  {
    name: 'topbars',
    path: '/topbars',
    component: () => import('@/pages/Topbars')
  },
]
const router = new Router({
  mode: 'history',
  base: '/clearaki-ui/',
  routes
})

export default router
