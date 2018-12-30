<template>
    <section class="section">
        <h2 class="section__name">{{video.name}}</h2>
        <p class="section__description">{{$t(video.description)}}</p>
        <my-video :video-src="video.src"></my-video>
    </section>
</template>

<script>
import MyVideo from './MyVideo.vue';

export default {
    name: 'VideoSection',
    components: { MyVideo },
    props: {
        video: Object,
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .section {
        max-width: 800px;
        min-width: 400px;
        margin-top: 100px;
        &:first-child {
            margin-top: 0;
        }
        &:nth-child(odd) {
            @include swipe-in-from-right;
        }
        &:nth-child(even) {
            @include swipe-in-from-left;
        }
    }

    .section__name {
        font-size: 2rem;
        color: $dark-black;
        text-align: center;
    }

    .section__description {
        font-size: 1rem;
        color: $dark-black-grey;
        text-align: center;
    }

    @media (max-width: 1000px) {
        .section {
            width: 90%;
            min-width: 0;
        }
    }
</style>
