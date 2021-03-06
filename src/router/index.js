import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/products",
        name: "Products",
        component: () =>
            import ("../views/Products.vue"),
    },
    {
        path: "/product",
        name: "Product",
        component: () =>
            import ("../views/Product.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ("../views/Contact.vue"),
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () =>
            import ("../views/Privacy.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;