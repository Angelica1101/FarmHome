import { Namespaces } from '@vue/compiler-core';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Carrito from './components/Carrito.vue'
import Item from './components/Item.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: LogIn
  },
  {

    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {

    path: '/carrito',
    name: 'miniCart',
    component: Carrito
  },
  {

    path: '/frutas',
    name: 'Item',
    component: Item
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
