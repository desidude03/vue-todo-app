  <template>
    <div class="flex justify-center items-center">
      <div>
        <h2 class="text-center text-2xl font-semibold mb-4">Login</h2>
        <div class="mb-4 px-2">
          <input type="text" v-model="email" placeholder="Email" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <input type="password" v-model="password" placeholder="Password" class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4 px-2">
          <button @click="login" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
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
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password
          });
          // Assuming the API returns a token
          const token = response.data.data.token;
          localStorage.setItem('token', token);
          // Redirect to todo list
          this.$router.push('/todos');
        } catch (error) {
          console.error('Login failed', error);
        }
      }
    }
  }
  </script>
  