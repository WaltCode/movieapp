import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import movieDetails from "../views/movieDetails.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/movies/:id",
    name: "Movie Detail",
    component: movieDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
