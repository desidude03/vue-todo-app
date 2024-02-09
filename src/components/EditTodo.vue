<template>
    <div class="flex justify-center items-center h-screen">
      <div>
        <h2 class="text-center text-2xl font-semibold mb-4">Edit Todo</h2>
        <form @submit.prevent="updateTodo" class="space-y-4">
          <div class="mb-4 px-2">
            <input type="text" v-model="editedTodo.title" placeholder="Title" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4 px-2">
            <textarea v-model="editedTodo.description" placeholder="Description" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mb-4 px-2">
            <button type="submit"  class="inline-block border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      editedTodo: {}
    };
  },
  mounted() {
    this.fetchTodo();
  },
  methods: {
    async fetchTodo() {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`http://127.0.0.1:8000/api/todos/${this.$route.params.id}`, { headers });
        this.editedTodo = response.data.data;
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    },
    async updateTodo() {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        await axios.put(`http://127.0.0.1:8000/api/todos/${this.$route.params.id}`, this.editedTodo, { headers });
        // Redirect to todo list after update
        this.$router.push('/todos');
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
