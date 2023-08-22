<script>

import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios';

const API = 'http://localhost:8000/api/v1';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },

  mounted() {
    axios.get(API + '/projects-index')
      .then(res => {

        /*  const data = res.data.projects;
 
         this.projects = data.data; */

        this.projects = res.data.projects;
      })
      .catch(err => console.error(err));
  }
}

</script>

<template>
  <div class="container-fluid text-center">
    <h1>Projects</h1>
    <div class="row justify-content-center">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

