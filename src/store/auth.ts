import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      number: 0,
      token: '',
    }),
    getters: {
      countNumber: (state) => state.number,
      getToken: (state) => state.token,
    },
    actions: {
      increment() {
        this.number++
      },
      decrement () {
        this.number--
      },
      setToken (token: string) {
        this.token = token
      },
      clearToken () {
        this.token = ''
    },
    },
  })

