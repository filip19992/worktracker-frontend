<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderPage />
    <router-view></router-view>
  </div>
  <footer>
    © 2024 WorkTracker. All rights reserved.
    Designed and developed by [Your Company Name].
    Contact Us: contact@worktracker.com | (123) 456-7890
  </footer>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage
  }
};
</script>

