import vue from 'vue'
import VueRouter from 'vue-router'
// import routers from './router'


const HOME = () => import('views/home/home')
const CATEGORY = () => import('views/category/category')
const CART = () => import('views/cart/cart')
const PROFILE = () => import('views/profile/profile')

vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
  },
  {
    path: '/home',
    component: HOME
  },
  {
    path: '/category',
    component: CATEGORY
  },
  {
    path: '/cart',
    component: CART
  },
  {
    path: '/profile',
    component: PROFILE
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router