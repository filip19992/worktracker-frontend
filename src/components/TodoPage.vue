<template>
  <div class="page-container">
    <div class="todo-container">
      <h1>What you have to do: </h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <div class="todo-content">
            <span>{{ todo.content }}</span>
            <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
          </div>
        </li>
      </ul>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodoContent" placeholder="Add a new todo" required class="todo-input" />
        <button type="submit" class="add-button">Add</button>
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
          this.$router.push('/login');
          this.errorMessage = 'You have to be logged in.';
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
          this.errorMessage = 'You have to be logged in.';
          this.$router.push('/login');
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
    height: 100vh;
  }
  
  .todo-container {
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .todo-container h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .todo-input {
    width: calc(100% - 80px);
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .add-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  
  .delete-button {
    padding: 0.5rem 1rem;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background-color: #c82333;
  }
  
  .error {
    color: red;
  }

  .todo-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-content span {
  flex-grow: 1;
}
  </style>
  