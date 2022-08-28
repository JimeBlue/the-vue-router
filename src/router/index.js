import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views//jobs/JobDetails.vue";
// 3) Import the NotFound component
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },

  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,

    props: true,
  },
  /* EXPLANATION: redirects if I I want to redirect an old path
  to new path. Imagine that the path for the Jobs component was
  /all-jobs and I changed it to /jobs. I want the user to still
  use /all-jobs but be able to go to /jobs. To do that, I use
  the redirect object below. path: is the old path, redirect:
  is the new path */
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },

  /* 2) To route the 404 catchall, as a path I add: "/:catchAll(.*)". 
  The path has to be exactly that. This path will catch any route
  that doesn´t match any of my route pages, and will should a 
  component that we want for the 404. In this case the 
  component NotFound.*/
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
