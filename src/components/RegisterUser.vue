<template>
  <div class="page-container">
    <div class="register-container">
      <h1>Register your account</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required class="register-input" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required class="register-input" />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required class="register-input" />
        </div>
        <button type="submit" class="register-button">Register</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
          return;
        }
        
        const response = await axios.post(`${BASE_URL}/auth/register`, {
          username: this.username,
          password: this.password
        });
        if (response.data.authenticated) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/login'); 
        } else {
          this.errorMessage = 'Registration failed.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred while trying to register.';
      }
    }
  }
};
</script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  
  .register-container {
    max-width: 400px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .register-container h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .register-input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .register-button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .register-button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
  }
  </style>
  