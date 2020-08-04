import Home from '@/pages/home'
import Category from '@/pages/category'
import Shopcat from '@/pages/shopcat'
import User from '@/pages/user'
import Search from '@/pages/search'
import ShopList from '@/pages/shopList'
import Event from '@/pages/event'
import Item from '@/pages/item'

export default [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      isShowFooter: true,
      active: 0
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      isShowFooter: true,
      active: 1
    }
  },
  {
    path: '/shopcat',
    name: 'shopcat',
    component: Shopcat,
    meta: {
      isShowFooter: true,
      active: 2
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      isShowFooter: true,
      active: 3
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: ShopList
  },
  {
    path: '/event',
    name: 'event',
    component: Event
  },
  {
    path: '/home/item',
    name: 'item',
    component: Item
  },
  // 路由重定向
  {
    path: '/',
    redirect: '/home'
  }
]
