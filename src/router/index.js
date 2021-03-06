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
    name: 'banner',
    path: '/banner',
    component: () => import('@/pages/Banner')
  },
  {
    name: 'backdrop',
    path: '/backdrop',
    component: () => import('@/pages/Backdrop')
  },
  {
    name: 'button',
    path: '/button',
    component: () => import('@/pages/Button')
  },
  {
    name: 'fab',
    path: '/fab',
    component: () => import('@/pages/FAB')
  },
  {
    name: 'fabs',
    path: '/fabs',
    component: () => import('@/pages/FABs')
  },
  {
    name: 'confirm',
    path: '/confirm',
    component: () => import('@/pages/Confirm')
  },
  {
    name: 'context',
    path: '/context',
    component: () => import('@/pages/ContextMenu')
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
    name: 'dropdown',
    path: '/dropdown',
    component: () => import('@/pages/Dropdown')
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
    name: 'step',
    path: '/step',
    component: () => import('@/pages/Step')
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
  {
    name: 'switch',
    path: '/switch',
    component: () => import('@/pages/Switch')
  },
  {
    name: 'icon',
    path: '/icon',
    component: () => import('@/pages/Icon')
  },
]
const router = new Router({
  base: '/clearaki-ui/',
  routes
})

export default router
