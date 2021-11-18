import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../components/HomePage'
import MachineComponents from './../components/MachineComponents'

const routes = [
    {
      path: "/Home",
      name: "Home",
      component: HomePage,
    },

    {
      path: "/MachineComponents",
      name: "MachineComponents",
      component: MachineComponents,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;