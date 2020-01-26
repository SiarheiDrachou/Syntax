<template>
  <div id="app">
    <navbar></navbar>
    <b-container class="mt-5">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar }
};
</script>

<style lang="scss">
</style>
