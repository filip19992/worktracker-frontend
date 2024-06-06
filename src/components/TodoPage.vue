<template>
    <div class="todo-container">
      <h1>Your ToDos</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.content }}
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodoContent" placeholder="Add a new todo" required />
        <button type="submit">Add</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { BASE_URL } from '../config';
  
  export default {
    data() {
      return {
        todos: [],
        newTodoContent: '',
        errorMessage: ''
      };
    },
    async created() {
      await this.fetchTodos();
    },
    methods: {
      async fetchTodos() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${BASE_URL}/todos`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.todos = response.data;
        } catch (error) {
          this.errorMessage = 'An error occurred while fetching todos.';
        }
      },
      async addTodo() {
        try {
          const token = localStorage.getItem('token');
          await axios.post(`${BASE_URL}/todos/add`, {
            content: this.newTodoContent
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.newTodoContent = '';
          await this.fetchTodos(); // Refresh the list after adding a new todo
        } catch (error) {
          this.errorMessage = 'An error occurred while adding the todo.';
        }
      },
      async deleteTodo(todoId) {
        try {
          const token = localStorage.getItem('token');
          await axios.delete(`${BASE_URL}/todos/delete/${todoId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          await this.fetchTodos(); // Refresh the list after deleting a todo
        } catch (error) {
          this.errorMessage = 'An error occurred while deleting the todo.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-container {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .error {
    color: red;
  }
  </style>
  