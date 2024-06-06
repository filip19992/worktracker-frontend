<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('${BASE_URL}/auth/login', {
          username: this.username,
          password: this.password
        });
        if (response.data.authenticated) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard'); // Redirect to dashboard or other protected route
        } else {
          this.errorMessage = 'Login failed. Please check your username and password.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred while trying to login.';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error {
  color: red;
}
</style>
