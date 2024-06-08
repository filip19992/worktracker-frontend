<template>
  <div id="app">
    <HeaderPage />
    <router-view></router-view>
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 WorkTracker. All rights reserved.</p>
        <p>Designed and developed by [Your Company Name].</p>
        <p>Contact Us: contact@worktracker.com | (123) 456-7890</p>
      </div>
    </footer>
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

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
