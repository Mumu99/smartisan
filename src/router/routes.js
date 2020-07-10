import Home from '@/pages/home'
import Category from '@/pages/category'
import Shopcat from '@/pages/shopcat'
import User from '@/pages/user'
import Search from '@/pages/search'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcat',
    name: 'shopcat',
    component: Shopcat,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      isShowFooter: false
    }
  }
]
