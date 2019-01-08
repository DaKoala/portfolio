<template>
    <div>
        <main class="container video-container">
            <video-section v-for="(item, index) in videos" :video="item"
                           :key="index"></video-section>
        </main>
    </div>
</template>

<script>
import VideoSection from '../components/VideoSection.vue';
import videoData from '../data/video';

export default {
    name: 'Games',
    components: {
        VideoSection,
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
