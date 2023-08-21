<template>
  <div id="app">
    <div id="nav">
      <transition name="fade" mode="out-in">
        <component :is="layout">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </component>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import DefaultLayout from './views/layouts/default.vue';
import UnauthLayout from './views/layouts/unauth.vue';

export default defineComponent({
  name: 'App',
  components: {
    DefaultLayout,
    UnauthLayout,
  },
  setup() {
    const layout = ref('DefaultLayout');
    const isAuth = ref(false);

    const checkAuth = () => {
      if (localStorage.getItem('token')) {
        isAuth.value = true;
        layout.value = 'DefaultLayout';
      } else {
        isAuth.value = false;
        layout.value = 'UnauthLayout';
      }
    };

    // Watch for changes in authentication status
    watch(isAuth, () => {
      layout.value = isAuth.value ? 'DefaultLayout' : 'UnauthLayout';
    });

    checkAuth();

    return {
      layout,
      isAuth,
      checkAuth,
    };
  },
});
</script>
