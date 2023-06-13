import { createRouter, createWebHashHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import MenuView from '@/views/MenuView.vue'
import ContactView from '@/views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
