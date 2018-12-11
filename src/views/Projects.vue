<template>
    <div>
        <navigation></navigation>
        <main class="container project-container">
            <project-card v-for="(project, idx) in projects" :key="project.name"
                          :project="project" @activate="showModal(idx)"></project-card>
        </main>
        <swiper :curr-index="photoIndex" :photos="photos" @hide="hideModal"
                @changephoto="handlePhotoChange"></swiper>
        <contact></contact>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import ProjectCard from '../components/ProjectCard.vue';
import Contact from '../components/Contact.vue';
import Swiper from '../components/Swiper.vue';
import { photosData, projectsData } from '../data/project';

export default {
    name: 'Projects',
    components: {
        Contact,
        Swiper,
        Navigation,
        ProjectCard,
    },
    data() {
        return {
            photoIndex: null,
            photos: photosData,
            projects: projectsData,
        };
    },
    methods: {
        showModal(index) {
            this.photoIndex = index;
        },
        hideModal() {
            this.photoIndex = null;
        },
        handlePhotoChange(isNext) {
            if (isNext && this.photoIndex < this.photos.length - 1) {
                this.photoIndex += 1;
            } else if (!isNext && this.photoIndex > 0) {
                this.photoIndex -= 1;
            }
        },
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
