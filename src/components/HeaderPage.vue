<template>
  <header class="header" :key="shouldRefresh">
    <div class="brand">WORK TRACKER</div>
    <nav>
      <ul>
        <li>
          <a v-if="isLoggedIn" @click.prevent="goToProfile">Profile</a>
          <a v-if="isLoggedIn" @click.prevent="goToTodos">Planned work</a>
          <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
          <a v-if="!isLoggedIn" @click.prevent="goToRegister">Register</a>
          <a v-if="!isLoggedIn" @click.prevent="goToLogin">Login</a>
        </li>
      </ul>
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
    },
    goToRegister() {
      this.$router.push('/register');
    },
    goToProfile() {
      this.$router.push('/profile');
    },
    goToTodos() {
      this.$router.push('/todos');
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.brand {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-right: auto;
}
</style>


<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5%;
  display: flex; 
  align-items: center; 
}

.header nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.header nav ul li {
  display: inline;
}

.header nav ul li a {
  text-decoration: none;
  color: #007bff;
  padding: 0.5rem 1rem;
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
