<template>
    <div class="unauth-layout">
        <h2>unauth layouts</h2>
        <Logo/>
        <slot/>
    </div>
</template>

<script>
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