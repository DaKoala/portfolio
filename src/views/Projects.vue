<template>
    <div>
        <main class="container project-container">
            <project-card v-for="(project, idx) in projects" :key="idx"
                          :project="project"></project-card>
        </main>
    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../data/project';

export default {
    name: 'Projects',
    components: {
        ProjectCard,
    },
    data() {
        return {
            photoIndex: null,
            projects: projectsData,
        };
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
    .project-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
        align-content: center;
        grid-gap: 20px;
    }

    @media (max-width: 1500px) {
        .project-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
    }

    @media (max-width: 1000px) {
        .project-container {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 1fr);
        }
    }
</style>
