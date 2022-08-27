<template>
  <!-- EXPLANATION: All my pages, i.e all my routes, go in the views folder. If inside a 
  page I have subroute, I can create a sub-folder in views and all the related files
  there. This is what I did with the Jobs and JobDetails components.-->
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Ninja UX Designer", id: 1, details: "lorem" },
        { title: "Ninja Web Developer", id: 2, details: "lorem" },
        { title: "Ninja Vue Developer", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style></style>
