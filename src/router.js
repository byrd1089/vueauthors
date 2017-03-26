import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './components/Hello'
import People from './components/People'
import Person from './components/Person'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { name: 'home', path: '/', component: Hello },
    { name: 'people', path: '/people', component: People },
    { name: 'new', path: '/people/new', component: Person },
    { name: 'edit', path: '/people/:id', component: Person }
  ]
})
