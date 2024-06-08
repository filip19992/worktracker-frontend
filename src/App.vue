<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
  </div>
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

