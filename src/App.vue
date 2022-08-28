<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </nav>

    <!-- EXPLANATION: programatic navigation refers to the use
    of the router history. For example, by means of
    buttons, I can send the use to a previous page, the
    next page or redirect the user to the page I want.
     -->
    <!--1) Create buttons for Redirect, Go back and Go forward and 
    add click events  -->

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    /* 4) To redirect the user, we need to push on an extra
    route to the history. To do that, we use the push () method
    and inside it we use an object. In this object we include
    the name of the route we want to redirect the user to.
    In this case, we the user click on the redirect button,
    it will take it to the home component*/
    redirect() {
      this.$router.push({ name: "Home" });
    },
    /* 3) To make the user go back throug the route history, I use
    this, to refer to the component instance, then we use $router, 
    which we use when we want to move the router around, and 
    finally we use the go() method. Inside this mehtod, we 
    can pass a minus or plus numbers. Here I put -1
    inside of the method so that the user can go
    back one page at a time. If I wanted the user to go back
    two pages I would have used -2 */
    back() {
      this.$router.go(-1);
    },
    /* 4) To make the user go foward throug the route history,
    I do the same I did for going back. But this time I add
    a plus number inside the go () method. I don´t need to add
    the plus symbol. */
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
