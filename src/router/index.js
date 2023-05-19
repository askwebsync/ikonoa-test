import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/Services.vue"),
    },
    {
      path: "/services/risk-consulting",
      name: "risk-consulting",
      component: () => import("../views/RiskConsulting.vue"),
    },
    {
      path: "/services/risk-management",
      name: "risk-management",
      component: () => import("../views/RiskManagement.vue"),
    },
    {
      path: "/services/academy",
      name: "academy",
      component: () => import("../views/Academy.vue"),
    },
    {
      path: "/services/insurance-policy",
      name: "insurance-policy",
      component: () => import("../views/InsurancePolicy.vue"),
    },
    {
      path: "/claim-experience",
      name: "claim-experience",
      component: () => import("../views/ClaimExperience.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
window.addEventListener("wheel", () => {}, { passive: true });
export default router;
