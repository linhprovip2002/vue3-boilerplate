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
                <td><button @click="xemchitiet(user.id)"> xem chi tiet </button></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { ref,onMounted } from 'vue'
import RepositoryFactory from '../../repository/factory'
import User from '../../model/User'
// import { useAuthStore } from '../../store'
const usersRepository = RepositoryFactory.get('users')
// const userStore  = useAuthStore()
export default {
    name: 'dashboard',
     setup() {
         const dataUsers = ref<User[]>([])
          const getall = async ()=>
          {
            const result = await usersRepository.getall(localStorage.getItem('token'))
            console.log(result);
            dataUsers.value = result
          };
          const getpage= async ()=>
          {     
                const params = 
                {
                    page:2,
                    limit:2
                }
                console.log(params);
                
                const result = await usersRepository.getall(localStorage.getItem('token'),params)
                console.log(result);
          };
          onMounted(()=>
            {
                getall(),
                getpage()
            })
            const xemchitiet = async (id: number) => {
                const  result = await usersRepository.getDetail(id,localStorage.getItem('token'))
                 console.log(result);
            }
          return {
               dataUsers,
               getall,
               onMounted,
               xemchitiet,
               getpage
          }
     }
}
</script>

<style>

</style>