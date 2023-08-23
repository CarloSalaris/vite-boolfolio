<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
  name: 'ProjectShow',

  data() {
    return {
      project: {}
    }
  },

  mounted() {
    const projectId = this.$route.params.id;
    axios.get(API_URL + '/project/' + projectId)
      .then(res => {

        /*  const data = res.data.projects;
 
         this.projects = data.data; */

        this.project = res.data.project;
      })
      .catch(err => console.error(err));
  }
}

</script>

<template>
    <div class="container-fluid text-center">
    <h1>Project n. {{ project.id }}</h1>
    <div class="row justify-content-center g-3"> 
        <div class="card">
            <div class="card-header">
                <h3>{{ project.title }}</h3>
            </div>
            <img :src="(project.main_picture && project.main_picture != 0) ? 'http://localhost:8000/storage/' + project.main_picture : 'http://localhost:8000/storage/img/default.jpg'" style="
                            width: 100%;
                            object-fit: cover;
                            aspect-ratio: 3/2;" alt="">
            <p>{{ project.description }}</p>
        </div>

        <router-link 
                :to="{
                    name:'home'
                }">
                <div class="btn btn-primary col-2">
                HOME
                </div>
      </router-link>

    </div>
  </div>

</template>

<style scoped> 
    a {
        text-decoration: none;
        color: inherit;
    }
</style>
