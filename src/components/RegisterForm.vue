<template>
    <div class="flex justify-center items-center">
      <div>
        <h2 class="text-center text-2xl font-semibold mb-4">Register</h2>
        <div class="mb-4 px-2">
          <input type="text" v-model="email" placeholder="Email" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <input type="text" v-model="name" placeholder="Name" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <input type="password" v-model="password" placeholder="Password" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <input type="password" v-model="c_password" placeholder="Confirm Password" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <button @click="register" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        c_password: '',
        name: ''
      };
    },
    methods: {
      async register() {
        try {
          if (this.password !== this.c_password) {
            console.error('Passwords do not match');
            return;
          }
          const response = await axios.post('http://127.0.0.1:8000/api/register', {
            email: this.email,
            password: this.password,
            c_password: this.c_password,
            name: this.name
          });
          const token = response.data.data.token;
          localStorage.setItem('token', token);
          this.$router.push('/todos');
        } catch (error) {
          console.error('Registration failed', error);
        }
      }
    }
  }
  </script>
  