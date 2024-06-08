<template>
  <div class="page-container">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required class="login-input" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required class="login-input" />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button class="register-button" @click="redirectToRegistration">Go to registration</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../config';

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
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          username: this.username,
          password: this.password
        });
        if (response.data.authenticated) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/todos'); // Redirect to dashboard or other protected route
        } else {
          this.errorMessage = 'Login failed. Please check your username and password.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred while trying to login.';
      }
    },

    async redirectToRegistration() {
      this.$router.push('/register')
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.login-input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem; /* Add margin here for space */
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
}
</style>
