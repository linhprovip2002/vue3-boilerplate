<template>
          <h2>Day la home</h2>
          <dashboard></dashboard>
</template>

<script lang="ts">
import dashboard from '../components/auth/dashboard.vue';
export default {
    name: 'Home',
    components: {
        dashboard,
    },
    setup() {
        
    },
}
</script>
