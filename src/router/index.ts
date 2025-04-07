import { createRouter, createWebHistory } from "vue-router";
import login from "../pages/Login.vue";
import dashboard from "../pages/Dashboard.vue";
import products from "../pages/Products.vue";
import rentListing from "../pages/RentListing.vue";
import customers from "../pages/Customers.vue";
import setting from "../pages/Setting.vue";
import income from "../pages/Income.vue";
import expense from "../pages/Expense.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: login,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: dashboard,
    },
    {
      path: "/products",
      name: "Products",
      component: products,
    },
    {
      path: "/rent-listing",
      name: "RentListing",
      component: rentListing,
    },
    {
      path: "/customers",
      name: "Customers",
      component: customers,
    },
    {
      path: "/setting",
      name: "Setting",
      component: setting,
    },
    {
      path: "/income",
      name: "Income",
      component: income,
    },
    {
      path: "/expense",
      name: "Expense",
      component: expense,
    },
  ],
});

export default router;
