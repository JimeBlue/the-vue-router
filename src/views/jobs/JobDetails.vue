<template>
  <div>
    <h1>Job Details</h1>
    <p>The job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  /* 4) Here I accept the parameter value, I set up in the 
    Jobs component (params: { id: job.id }), as a prop. */
  /* 5) Then, inside the router folder, in the index.js file,
    I need to set to true the props proprety. Next step in that
    file */
  props: ["id"],
  data() {
    return {
      /* 7) Now, because we accepted the parameter as a prop, We
    don´t need the code below  */
      //   id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
