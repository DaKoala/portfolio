<template>
    <div>
        <navigation></navigation>
        <main class="container container--row home-container fade-in">
            <header class="intro">
                <h1 class="intro__name">{{$t('home.name')}}</h1>
                <p class="intro__title">
                    <font-awesome-icon icon="graduation-cap" />
                    {{$t('home.academic')}}
                </p>
                <p class="intro__title">
                    <font-awesome-icon icon="code" />
                    {{$t('home.title')}}
                </p>
                <p class="intro__title">
                    <font-awesome-icon icon="gamepad" />
                    {{$t('home.game')}}
                </p>
                <div class="intro__btn-wrapper">
                    <router-link to="/about" class="btn">{{$t('home.about')}}</router-link>
                    <router-link to="/projects" class="btn">{{$t('home.projects')}}</router-link>
                </div>
            </header>
            <img class="photo" src="../assets/img/photo.jpeg" />
        </main>
        <contact></contact>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Contact from '../components/Contact.vue';

export default {
    name: 'home',
    components: {
        Contact,
        Navigation,
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";
    .photo {
        max-width: 360px;
        max-height: 480px;
        border-radius: 10px;
        margin-left: 5%;
        width: 90%;
    }

    .intro {
        max-width: 360px;
    }

    .intro__name {
        color: $blue;
        font-size: 3rem;
    }

    .intro__title {
        color: $light-black;
        font-size: 1.5rem;
        line-height: 2rem;
        &:before {
            content: '';
        }
    }

    .intro__btn-wrapper {
        margin-top: 50px;
    }

    @media (max-width: 1000px) {
        .home-container {
            width: 100%;
            flex-direction: column;
            align-items: center;
        }

        .intro {
            margin-bottom: 100px;
        }

        .photo {
            margin-left: 0;
        }
    }
</style>
