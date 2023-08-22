<script>
import AppHeader from './components/AppHeader.vue';

const API = 'http://localhost:8000/api/v1';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}

</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>

