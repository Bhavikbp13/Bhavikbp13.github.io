import { createRouter, createWebHistory } from 'vue-router'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SkillsView from './views/SkillsView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
  { path: '/about', name: 'about', component: AboutView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/skills', name: 'skills', component: SkillsView },
  { path: '/contact', name: 'contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router