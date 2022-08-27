import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views//jobs/JobDetails.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

/* 6) Set props to true so that the can accept any
    route parameter in a desired component. Next step in the 
    JobDetails component. */
