import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// 2) Import the About component
import AboutView from "../views/AboutView.vue";

/* IMPORTANT: I create this project using the CLI with vue create.
There I choose the project to have a router. So, now I have the 
vue router in dependencies in packet.json and also in src file,
there is folder called router, inside it, this file, index.js.
It´s here were I can setup all my routes.*/

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    /* 1) Register About component */
    component: AboutView,
  },
];

/* IMPORTANT: this is what creates the router for the app.
The VueRouter function is being imported at the top from
the vue router package.  */
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* exporting router to be use in  main.js */
export default router;
