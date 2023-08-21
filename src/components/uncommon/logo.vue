<template>
    <div
      class="logo"
      @click="$router.push({
          path: '/',
        })">
      <div class="black" style="color: white">to</div>
      doApp
    </div>
</template>

<style scoped>
.logo {
  font-size: 30px;
  margin: 20px auto;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.black {
  background-color: #1e2731;
  position: relative;
  top: -8px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 55px;
  height: 45px;
  margin: 0px;
}
</style>

<script lang="ts">
import route from '../../route/index'
    export default {
        name: 'Logo',
        setup() {
            return {
                route
            }
        },
    }
</script>