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
    <div class="card col-sm-12 col-md-5 col-xl-3 m-3">
        <h3>{{ project.title }}</h3>
        <img :src="(project.main_picture && project.main_picture != 0) ? 'http://localhost:8000/storage/' + project.main_picture : 'http://localhost:8000/storage/img/default.jpg'" alt="">
        <p>{{ project.description }}</p>
        
    </div>
</template>
