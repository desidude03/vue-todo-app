import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import TodoList from '../components/TodoList.vue'
import EditTodo from '../components/EditTodo.vue';
import CreateTodo from '../components/CreateTodo.vue'
import RegisterForm from '../components/RegisterForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodoList
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditTodo
  },
  {
    path: '/Create',
    name: 'create',
    component: CreateTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
