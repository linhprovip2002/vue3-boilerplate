<template>
   
        <h2>unauth layouts</h2>
        <router-view />
        <Logo/>
        <slot/>
</template>

<script lang="ts">
import Logo from '../../components/uncommon/logo.vue'
export default {
    name: 'UnauthLayouts',
    components: {
      Logo
    },
    setup() {
        
    },
}
</script>