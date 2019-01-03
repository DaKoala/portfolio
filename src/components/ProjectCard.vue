<template>
    <figure class="card">
        <img class="card__image" :src="project.imagePath" :alt="project.name"
             @click="handleImageClick">
        <figcaption class="card__caption">{{$t(project.name)}}</figcaption>
    </figure>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
    methods: {
        handleImageClick() {
            this.$router.push(`/projects/${this.project.param}`);
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .card {
        margin: 0;
        background-color: #000;
        box-sizing: border-box;
        border: 1px solid $light-grey;
        border-radius: 8px;
        width: 450px;
        height: 300px;
        overflow: hidden;
        @include fade-in;
    }

    .card__image {
        transition: 0.5s;
        filter: brightness(70%) grayscale(30%);
        width: 450px;
        height: 253.125px;
        cursor: pointer;
        &:hover {
            filter: brightness(100%) grayscale(0);
        }
    }

    .card__caption {
        @include center-flex;
        font-size: 1.3rem;
        color: #fff;
        cursor: default;
        user-select: none;
    }

    @media (max-width: 1000px) {
        .card {
            width: 90%;
            align-self: center;
            justify-self: center;
            height: auto;
        }

        .card__image {
            width: 100%;
            height: 66%;
            filter: none;
            &:hover {
                filter: none;
            }
        }
    }
</style>
