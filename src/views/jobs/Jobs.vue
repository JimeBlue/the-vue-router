<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- 1) Wrap the <h2> with a router link to make it a link -->
      <!-- 2) in the "to" attribute pass the component to
        which we want to link and also the parameter. To pass the
        parameter, I use the  params object, which will have
        key value pairs. The key will be the name of the paramenter
         i.e id: and the value is the id property, we have in the
         jobs object, here in this componet. So for the value, 
         I´ll say jobs.id. Now, this will link to the correct 
         route for that job. If I go to the link Ninja UX
         Designa, I will see that the job id is 1. The correct
         ids are also shown for the rest of the links.-->

      <!-- 3) The parameter can be sent to the component we´re
         linking to, in case we want to display it. To do that, I go to the
         component JobDetails. Next steps there -->
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
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

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
