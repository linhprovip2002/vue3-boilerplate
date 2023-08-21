<template>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="username" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </template>
  
  <script lang="ts">
  import RepositoryFactory from '../../repository/factory'
  import { ref } from 'vue'
  
  const authRepository = RepositoryFactory.get('auth')
  
  export default {
    setup() {
      const username = ref('')
      const password = ref('')
      const payload = ref({}) // Define the type of payload
  
      const login = async () => {
        try {
          payload.value = {
            username: username.value,
            password: password.value
          }
  
          const result = await authRepository.login(payload.value)
          console.log('Login successful')
          console.log(result)
          localStorage.setItem('token', result.token)
        } catch (error) {
          console.log(username.value, password.value)
          console.log(error)
        }
      }
  
      return {
        username,
        password,
        login
      }
    }
  }
  </script>
  
  <style>
  /* Your styles here */
  </style>
  