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
  /* 1) A route parameter is the last part of url. For example in 
  jobs/123, 123 is the parameter. In Vue, we set parameters using
  a semicolon and a name. For the route below, I call the parameter
  id. */
  /* 2) Now, If I go to /jobs/1, I will see the content of the component
  JobDetails. No matter what the value of id is, I still will go to the
  JobDetails component. If I go to /jobs/culquiercosa, I still will go
  the to JobDetails component. This happends, because Vue recognizes it 
  follows the same structure as /jobs/:id, where the thing after jobs
  (i.e the parameter) is changable. 
   */
  /* 3) We can access the id, i.e the parameter value inside the  
  JobDetails component. Next steps in that component.*/
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
