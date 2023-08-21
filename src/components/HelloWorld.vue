<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('http://localhost:8000/api/v1/projects-index')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
}

</script>

<template>
  <h1>Hello World!</h1>
</template>

