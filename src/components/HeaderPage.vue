<template>
    <header class="header" :key="shouldRefresh">
      <nav>
        <ul>
          <li>
            <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
            <a v-if="!isLoggedIn" @click.prevent="goToRegister">Register</a>
            <a v-if="!isLoggedIn" @click.prevent="goToLogin">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
import { eventBus } from '../event-bus.js';
export default {
  name: 'HeaderComponent',
  created() {
    eventBus.$on('userLoggedIn', this.refreshHeader);
    eventBus.$on('userRegistered', this.refreshHeader);
    eventBus.$on('userLoggedOut', this.refreshHeader);
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      eventBus.$emit('userLoggedOut');
      this.$router.push('/login');
    },
    goToRegister(){
        this.$router.push('/register');
    }
    ,
    goToLogin(){
        this.$router.push('/login');
     },
     refreshHeader() {
      console.log('User state has changed')
    }
    }
};
</script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  
  
  <style scoped>
  .header {
    background-color: #f8f9fa;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
  
  .header nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center; /* Center the navigation items */
    gap: 1rem;
  }
  
  .header nav ul li {
    display: inline;
  }
  
  .header nav ul li a {
    text-decoration: none;
    color: #007bff;
    padding: 0.5rem 1rem; /* Add padding for better click area */
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .header nav ul li a:hover {
    background-color: #0056b3;
    color: #fff;
  }
  
  .error {
    color: red;
  }
  </style>
  