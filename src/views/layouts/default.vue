<template>
    <div class="default-layout">
        <h2>default layouts</h2>
        <navbar/>
        <slot/>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import navbar from '../../components/common/navbar.vue'
// import Footer from '../components/common/Footer.vue'

export default {
    name: 'DefaultLayout',
    components: {
        navbar,
        // Footer
    },
    setup() {
        
    },
}
</script>

<style scoped>
.default-layout{
    margin: 0;
}
</style>