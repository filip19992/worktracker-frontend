<template>
    <header class="header">
      <nav>
        <ul>
          <li>
            <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
            <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
            <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
          </li>
        </ul>
        <div>Is Logged In: {{ isLoggedIn }}</div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    computed: {
      isLoggedIn() {
        return !!localStorage.getItem('token');
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  };
  </script>
  
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
  