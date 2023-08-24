<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our Clothing Store</h1>
    <h1>{{ userStore.number }}</h1>
    <p class="text-lg text-gray-600">Discover the latest trends in fashion.</p>
    <router-link to="/auth/login" class="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
      Start Shopping
    </router-link>
   
  </div>
</template>

<script lang="ts">
import router from '../../router/index'
import  { useAuthStore } from '../../store'
    export default {
        name: 'Logo',
        setup() {
          const userStore = useAuthStore()

            return {
              router,
                userStore
            }
        },
    }
</script>