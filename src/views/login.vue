<template>
    <loginComponent/>
</template>

<script lang="ts">
// import { defineComponent, ref, watch } from 'vue';
import loginComponent from '../components/auth/login.vue';
import UnauthLayouts from './layouts/unauth.vue';
export default {
name: 'Login',
components: {
    loginComponent,
    UnauthLayouts
},
setup() {
  
},
}
</script>
