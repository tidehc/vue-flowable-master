import Vue from 'vue'
import Router from 'vue-router'
import number from '@/views/home/MyFlow'

Vue.use(Router)
Vue.use(number)

/* Layout */
import Layout from '@/layout'
/* Router Modules */
// import modelerRouter from './modules/flowable-modeler'

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/reg',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/homedesigner',
    component: () =>import('@/views/home/HomeDesign'),
    hidden: true
  },
  {
    path: '/appinfomation',
    component: () =>import('@/views/home/AppInfomation'),
    hidden: true
  },
  {
    path: '/myflow',
    component: () =>import('@/views/home/MyFlow'),
    // redirect: '/myflow/waitdone',
    name: 'myflow',
    meta: { title: '我的流程', icon: 'table' },
    children: [
      {
        path: 'waitdone',
        name: 'waitdone',
        component: () => import('@/views/home/MyFlowMethods/waitDone'),
        meta: { title: '待办', icon: 'table'}
      },
      {
        path: 'waitread',
        name: 'waitread',
        component: () => import('@/views/home/MyFlowMethods/waitRead'),
        meta: { title: '待阅', icon: 'table'}
      },
      {
        path: 'startedme',
        name: 'startedme',
        component: () => import('@/views/home/MyFlowMethods/startedMe'),
        meta: { title: '我发起的', icon: 'table'}
      },
      {
        path: 'wholeflow',
        name: 'wholeflow',
        component: () => import('@/views/home/MyFlowMethods/wholeFlow'),
        meta: { title: '全部', icon: 'table'}
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/home',
    // redirect: '/home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/adminhome',
    // redirect: '/home',
    component: () => import('@/views/adminhome/index'),
  },
  {
    path: '/historyflow',
    // redirect: '/home',
    component: () => import('@/views/adminhome/historyFlow'),
  },
  {
    path: '/form',
    component: () => import('@/views/form/index'),
    redirect: '/form/formdesign',
    name: 'form',
    meta: { title: '表单设计', icon: 'table' },
    children: [
      {
        path: 'formdesign',
        name: 'formdesign',
        component: () => import('@/views/form/menu/formDesign'),
        meta: { title: 'formdesign', icon: 'table', keepAlive:true}
      },
      {
        path: 'flowdesign',
        name: 'flowdesign',
        component: () => import('@/views/form/menu/flowDesign'),
        meta: { title: 'flowdesign', icon: 'table', keepAlive:true}
      },
      {
        path: 'listdesign',
        name: 'listdesign',
        component: () => import('@/views/form/menu/listDesign'),
        meta: { title: 'listdesign', icon: 'table', keepAlive:true}
      },
      {
        path: 'formsetting',
        name: 'formsetting',
        component: () => import('@/views/form/menu/formSetting'),
        meta: { title: 'formsetting', icon: 'table', keepAlive:true}
      }
    ]
  },
  {
    path: '/wform',
    component: () => import('@/views/wform/index')
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app/application',
    name: 'app',
    meta: { title: '应用管理', icon: 'application' },
    children: [
      {
        path: 'application',
        name: 'application',
        component: () => import('@/views/app/index'),
        meta: { title: '应用管理', icon: 'table' }
      },
      {
        path: 'authority',
        name: 'authority',
        component: () => import('@/views/authority/index'),
        meta: { title: '权限管理', icon: 'table' }
      },
      {
        path: 'addressInfo',
        name: 'addressInfo',
        component: () => import('@/views/addressInfo/index'),
        meta: { title: '场景管理', icon: 'table' }
      },
      {
        path: 'organization',
        name: 'organization',
        component: () => import('@/views/organization/index'),
        meta: { title: '组织机构', icon: 'table' }
      },
      {
        path: 'peopleInfo',
        name: 'peopleInfo',
        component: () => import('@/views/peopleInfo/index'),
        meta: { title: '人员管理', icon: 'table' }
      }
    ]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
