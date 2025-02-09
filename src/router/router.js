import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import login from '../views/login.vue';
import panel from '../views/panel.vue';
import register from '../views/register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: login },
  { path: '/register', component: register},
  { path: '/panel', component: panel, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Middleware de autenticación
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.requiresAuth && !token) {
      next('/') // Si no hay token, redirige al login
    } else {
      next()
    }
  })

export default router;