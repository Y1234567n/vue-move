import Toke from '../pages/toke/toke.vue'
import Search from '../pages/search/search.vue'
import Order from '../pages/order/order.vue'
import My from '../pages/my/my.vue'
import User from '../pages/user/User.vue'
import Shop from '../pages/shop/shop.vue'
import Goods from '../pages/shop/goods/goods.vue'
import Ratings from '../pages/shop/ratings/ratings.vue'
import Info from '../pages/shop/info/info.vue'
export default [
  {
    path:'/toke',
    component: Toke,
    meta: 'ishow'
  },{
    path:'/search',
    component: Search,
    meta: 'ishow'  
  },{
    path:'/order',
    component: Order,
    meta: 'ishow'
  },{
    path:'/my',
    component: My,
    meta: 'ishow'
  },{
    path:'/user',
    component: User,
  },{
    path:'/shop',
    component: Shop,
    children:[ 
        {
          path: '/shop/goods',
          component: Goods
        },
        {
          path: '/shop/ratings',
          component: Ratings
        },
        {
          path: '/shop/info',
          component: Info
        },
        { 
          path: '/shop',
          redirect: '/shop/goods'
        }
    ] 
  },{
    path:'/',
    redirect: '/toke'
  }
]
