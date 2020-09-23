import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/sobre',
      name: 'About',
      component: About,
    },
    {
      path: '/contato',
      name: 'Contact',
      component: Contact,
    },
  ],
});
