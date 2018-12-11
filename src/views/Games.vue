<template>
    <div>
        <navigation></navigation>
        <main class="container video-container">
            <video-section v-for="(item, index) in videos" :video="item"
                           :key="index"></video-section>
        </main>
        <contact></contact>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Contact from '../components/Contact.vue';
import VideoSection from '../components/VideoSection.vue';
import videoData from '../data/video';

export default {
    name: 'Games',
    components: {
        VideoSection, Contact, Navigation,
    },
    data() {
        return {
            videos: videoData,
        };
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
