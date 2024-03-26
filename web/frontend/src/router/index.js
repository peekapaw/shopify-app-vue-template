import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'
// import DiscountGroup from '../views/DiscountGroup/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/discount-groups',
      name: 'discounts-group',
      component: () => import('../views/DiscountGroup/index.vue')
      // component: DiscountGroup
    },
    {
      path: '/percentage',
      name: 'percentage',
      component: () => import('../views/Percentage/index.vue')
      // component: DiscountGroup
    },
    {
      path: '/individual-variant',
      name: 'individual-variant',
      component: () => import('../views/IndividualVariant/index.vue')
      // component: DiscountGroup
    },
    {
      path: '/volume-discount',
      name: 'volume-discount',
      component: () => import('../views/VolumeDiscount/index.vue')
      // component: DiscountGroup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/exitiframe',
      name: 'exitiframe',
      component: () => import('../views/ExitIframeView.vue'),
      redirect: { name: 'home' }
    }
  ]
})

export default router
