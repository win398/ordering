import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import SearchResult from '@/components/SearchResult'
import FoodsList from '@/components/FoodsList'
import FoodDetail from '@/components/FoodDetail'
import Mine from '@/components/Mine'
import Regist from '@/components/Regist'
import Order from '@/components/Order'
import OrderDetail from '@/components/OrderDetail'
import OrderManagement from '@/components/OrderManagement'
import UserOrder from '@/components/UserOrder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/SearchResult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/FoodsList/:value',
      name: 'FoodsList',
      component: FoodsList
    },
    {
      path: '/FoodDetail/:value',
      name: 'FoodDetail',
      component: FoodDetail
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/OrderManagement',
      name: 'OrderManagement',
      component: OrderManagement
    },
    {
      path: '/UserOrder',
      name: 'UserOrder',
      component: UserOrder
    },
    
  ]
})
