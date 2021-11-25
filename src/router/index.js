import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../components/HomePage'
import ComponentHealth from '../components/ComponentHealth'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/componenthealth",
      name: "ComponentHealth",
      component: ComponentHealth,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;