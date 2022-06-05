import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/pages/Home.vue"),
    meta: { title: "HOME" }
  },
  {
    path: "/live",
    name: "live",
    component: () => import("@/components/pages/Live.vue"),
    meta: { title: "LIVE" }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/components/pages/About.vue"),
    meta: { title: "ABOUT" }
  },
  {
    path: "/music",
    name: "music",
    component: () => import("@/components/pages/Music.vue"),
    meta: { title: "MUSIC" }
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title ? "sly cat girl | " + to.meta.title : "sly cat girl"
})

export default router
