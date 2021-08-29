import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authority: "user",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      authority: "admin",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// https://newbedev.com/vue-router-uncaught-in-promise-error-redirected-from-login-to-via-a-navigation-guard
// router.beforeEach((to, from, next) => {
//   const authority = "user";

//   if (to.meta.authority !== authority) {
//     alert("관리자가 아닙니다.");
//     next();
//     return;
//   }

//   next("/");
// });

export default router;
