<script>

import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios';

const API = 'http://localhost:8000/api/v1';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  mounted() {
    axios.get(API + '/projects-index')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
}

</script>

<template>
  <h1>Projects</h1>
  <ProjectCard />
</template>

