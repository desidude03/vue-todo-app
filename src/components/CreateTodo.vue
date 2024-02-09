<template>
    <div class="flex justify-center items-center">
        <div>
            <h3 class="text-center text-xl font-semibold mb-4">Create Todo</h3>
            <div class="md:w-96">
                <form @submit.prevent="addTodo" class="space-y-4">
                    <div class="mb-4 px-2 w-full">
                        <label for="title" class="block mb-1 text-sm">Title</label>
                        <input id="title" type="text"
                            class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
                            v-model="Todo.title" />
                    </div>
                    <div class="mb-4 px-2 w-full">
                        <label for="description" class="block mb-1 text-sm">Description</label>
                        <textarea id="description"
                            class="w-full border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
                            v-model="Todo.description"></textarea>
                    </div>
                    <button type="submit" class="inline-block border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Todo: {},
        };
    },
    methods: {
        async addTodo() {
            try {
                const token = localStorage.getItem("token");
                const headers = {
                    Authorization: `Bearer ${token}`,
                };
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/todos",
                    this.Todo,
                    { headers }
                );

                console.log(response, "response of todo list");
                this.todos = response.data.data;
                console.log(this.todo, "this todo");
                this.$router.push('/todos');
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        },
    },
};
</script>
