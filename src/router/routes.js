import Home from '@/pages/home'
import Category from '@/pages/category'
import Shopcat from '@/pages/shopcat'
import User from '@/pages/user'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopcat',
    name: 'shopcat',
    component: Shopcat
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]
