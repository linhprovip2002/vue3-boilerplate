<template>
   <button @click="getall">Get All
   </button>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in dataUsers" :key="user.id">
                <th scope="row">{{index+1}}</th>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.email}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { ref,onMounted } from 'vue'
import RepositoryFactory from '../../repository/factory'
import User from '../../model/User'
const usersRepository = RepositoryFactory.get('users')
export default {
    name: 'dashboard',
     setup() {
         const dataUsers = ref<User[]>([])
          const getall = async ()=>
          {
            const result = await usersRepository.getall(localStorage.getItem('token'))
            console.log(result);
            dataUsers.value = result.data
          };
          onMounted(()=>
            {
               getall()
            })
          return {
               dataUsers,
               getall,
               onMounted
          }
     }
}
</script>

<style>

</style>