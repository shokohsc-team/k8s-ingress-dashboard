<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: {
    Home
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
}
body::-webkit-scrollbar {
  display: none;
}
html {
  background-color: #23232e;
  height: 100%
}
</style>
