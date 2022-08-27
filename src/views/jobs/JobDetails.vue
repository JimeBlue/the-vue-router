<template>
  <div>
    <h1>Job Details</h1>
    <!-- 4) Here I can access the value of the parameter. To do
        that, I use the $route object, which will give me all
        the information about this current route. Then,
        I go to the property params and finally to the
        name I gave to the parameter, i.e id.  

        This is the reusult:
            <p>The job id is {{ $route.params.id }}</p>
    -->

    <!-- 6) Output the value of id in data -->
    <p>The job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    /* 5) I can do the same I did in step 4, but
    this time I´m going to store the value
    of the parameter here, in the property
    id */
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
