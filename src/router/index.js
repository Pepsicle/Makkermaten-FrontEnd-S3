import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../components/HomePage'
import ComponentHealth from '../components/ComponentHealth'
import Dashboard from '../components/Dashboard'
import UptimeGraph from '../components/UptimeGraph'
import MaintenancePage from '../components/MaintenancePage'

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
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/uptimegraph",
      name: "UptimeGraph",
      component: UptimeGraph,
    },
    {
      path: "/maintenance",
      name: "Maintenance",
      component: MaintenancePage,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;