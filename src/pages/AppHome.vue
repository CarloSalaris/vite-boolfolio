
<script>
import axios from 'axios';
import ProjectCard from './../components/ProjectCard.vue'


const API_URL = 'http://localhost:8000/api/v1';

export default {
  name: 'AppHome',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },

  mounted() {
    axios.get(API_URL + '/projects-index')
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
    <h1>HOME</h1>
    <div class="row justify-content-center g-3"> 
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

