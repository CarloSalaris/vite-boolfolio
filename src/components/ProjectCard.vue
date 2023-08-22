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
    <div class="card col-3 m-3">
        <h1>{{ project.title }}</h1>
    </div>
</template>
