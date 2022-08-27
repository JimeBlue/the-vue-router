<template>
  <div id="app">
    <nav>
      <!-- EXPLANATION: the router-link has the "to" attribure, in which
      we indicate where we want our route to go to.
      There are two benefits when using router-link:
       -->
      <!-- 1) When we use the router-link Vue intercepts the router
      call and hadles it, not sending a request to the server. On the
      other hand, if we use an anchor tag instead of the router-link,
      a request to the server will be sent for each route. -->
      <!-- 2) When using the router-link, we automatically get the
      classes "router-link-active" and  "router-link-exact-active,
      which we can use to style the links in the active state.
       Have a look in the style section below, where I use the class. "-->
      <!-- 3) Another benefit is that we can data bind the "to"
       attribue. So, instead of hard conding the path, I can pass
       an object that represents that route. For example, I can
       say the name I want to go is about. The advantage of this
       is that if we in the future change the path for the
       About component, to /about-us for example, we can don´t
       have to change anything here ´cause here we have the
       name and not the path -->
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

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

/* Use native class  router-link-exact-active*/
nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
