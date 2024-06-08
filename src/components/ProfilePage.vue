<template>
    <div class="page-container">
      <div class="profile-container">
        <h1>Your Profile</h1>
        <div class="profile-photo">
          <img :src="profilePhotoUrl" alt="Profile Photo" v-if="profilePhotoUrl" />
          <p v-else>No profile photo uploaded.</p>
        </div>
        <form @submit.prevent="uploadProfilePhoto">
          <input type="file" @change="onFileChange" required />
          <button type="submit" class="upload-button">Upload Photo</button>
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
        profilePhotoUrl: '',
        selectedFile: null,
        errorMessage: ''
      };
    },
    async created() {
      await this.fetchProfilePhoto();
    },
    methods: {
      async fetchProfilePhoto() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${BASE_URL}/image`, {
            responseType: 'blob',
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
          if (response.status === 200) {
            this.profilePhotoUrl = URL.createObjectURL(response.data);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            this.errorMessage = 'No profile photo found.';
          } else {
            this.errorMessage = 'You have to be logged in.';
            this.$router.push('/login');
          }
        }
      },
      onFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadProfilePhoto() {
        if (!this.selectedFile) {
          this.errorMessage = 'Please select a file.';
          return;
        }
  
        try {
          const token = localStorage.getItem('token');
          const formData = new FormData();
          formData.append('file', this.selectedFile);
  
          await axios.post(`${BASE_URL}/image`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
  
          this.selectedFile = null;
          await this.fetchProfilePhoto(); // Refresh the photo after uploading
        } catch (error) {
          this.errorMessage = 'You have to be logged in.';
          this.$router.push('/login');
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
  
  .profile-container {
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile-container h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .profile-photo img {
    width: 100%;
    height: auto;
    max-width: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  .upload-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .upload-button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
  }
  </style>
  