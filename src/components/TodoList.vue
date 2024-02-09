<template>
  <div class="flex justify-center">
    <div class="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">
      <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <router-link to="/create"
          class="inline-block border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded">
          Create Todo
        </router-link>

        <table class="stripe hover" style="width:100%; padding-top: 2em; padding-bottom: 2em; margin-top: 1em;">
          <thead class="table-head">
            <tr>
              <th data-priority="1" class="py-4 font-bold">Title</th>
              <th data-priority="2" class="py-4 font-bold">Description</th>
              <th class="py-4 font-bold">Edit</th>
              <th class="py-4 font-bold">Delete</th>
            </tr>
          </thead>

          <tbody class="table-body">
            <tr v-for="todo in todos" :key="todo.id" class="py-2">
              <td>{{ todo.title }}</td>
              <td>{{ todo.description }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: todo.id } }"
                  class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </router-link>
              </td>
              <td>
                <button class="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  @click="deleteTodo(todo.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get('http://127.0.0.1:8000/api/todos', { headers });
        this.todos = response.data.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async deleteTodo(id) {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      const response = await axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, { headers });
      this.$router.push('/todos');
      this.fetchTodos();
      console.log(response, 'response')

    }
  }
}
</script>

<style scoped>
.table-head {
  background-color: #e2e8f0;
  font-weight: bold;
}

.table-body tr:nth-child(even) {
  background-color: #496577;
}
</style>

