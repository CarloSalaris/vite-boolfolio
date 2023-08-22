<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col col-sm-12 col-md-5 col-xl-3">
        <div class="card">
            <router-link
                :to="{
                    name: 'project',
                    params: {id: project.id}
                }">
                <div class="card-header">
                    <h3>{{ project.title }}</h3>
                </div>
                <img :src="(project.main_picture && project.main_picture != 0) ? 'http://localhost:8000/storage/' + project.main_picture : 'http://localhost:8000/storage/img/default.jpg'" style="
                                width: 100%;
                                object-fit: cover;
                                aspect-ratio: 3/2;" alt="">
                <p>{{ project.description }}</p>
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
