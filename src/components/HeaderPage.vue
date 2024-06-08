<template>
    <header class="header" :key="shouldRefresh">
      <nav>
        <ul>
          <li>
            <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
            <a v-if="!isLoggedIn" @click.prevent="goToRegister">Register</a>
            <a v-if="!isLoggedIn" @click.prevent="goToLogin">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      shouldRefresh: 0 // Initialize shouldRefresh
    };
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      this.vm.$forceUpdate();
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    goToRegister(){
        this.vm.$forceUpdate();
        this.$router.push('/register'); 
    }
    ,
    goToLogin(){
        this.vm.$forceUpdate();
        this.$router.push('/login'); 
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
  