<template>
    <div>
        <div class="nav--placeholder"></div>
        <nav class="nav">
            <a class="nav__item nav__hamburger" @click="toggleNavLeft">
                <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
            </a>
            <router-link to="/" class="nav__item"
                         :class="{'nav__item--active': path.length === 1}">
                Home
            </router-link>
            <router-link to="/about" class="nav__item"
                         :class="{'nav__item--active': path.indexOf('about') > -1}">
                About
            </router-link>
            <router-link to="/projects" class="nav__item"
                         :class="{'nav__item--active': path.indexOf('projects') > -1}">
                Projects
            </router-link>
            <router-link to="/games" class="nav__item"
                         :class="{'nav__item--active': path.indexOf('games') > -1}">
                Games
            </router-link>
            <router-link to="/homework" class="nav__item"
                         :class="{'nav__item--active': path.indexOf('homework') > -1}">
                Homework
            </router-link>
        </nav>
        <transition name="nav-slide">
        <nav class="nav--left" v-if="isNavVisible">
            <router-link to="/" class="nav__item--small"
                         :class="{'nav__item--active': path.length === 1}"
                         @click.stop="hideNavLeft">
                Home
            </router-link>
            <router-link to="/about" class="nav__item--small"
                         :class="{'nav__item--active': path.indexOf('about') > -1}"
                         @click.stop="hideNavLeft">
                About
            </router-link>
            <router-link to="/projects" class="nav__item--small"
                         :class="{'nav__item--active': path.indexOf('projects') > -1}"
                         @click.stop="hideNavLeft">
                Projects
            </router-link>
            <router-link to="/games" class="nav__item--small"
                         :class="{'nav__item--active': path.indexOf('games') > -1}"
                         @click.stop="hideNavLeft">
                Games
            </router-link>
            <router-link to="/homework" class="nav__item--small"
                         :class="{'nav__item--active': path.indexOf('homework') > -1}"
                         @click.stop="hideNavLeft">
                Homework
            </router-link>
        </nav>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            path: this.$route.path,
            isNavVisible: false,
        };
    },
    methods: {
        toggleNavLeft() {
            this.isNavVisible = !this.isNavVisible;
        },
        hideNavLeft() {
            this.isNavVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .nav {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100px;
        background: $dark-black;
        z-index: 100;
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .nav--left {
        position: fixed;
        left: 0;
        top: 50px;
        bottom: 0;
        width: 50%;
        background-color: $dark-black;
        z-index: 500;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav--placeholder {
        height: 100px;
        z-index: -100;
    }

    .nav__item {
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 2em;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;

        &:hover {
            color: $dark-grey;
        }
    }

    .nav__item--active {
        background: $light-black;

        &:hover {
            color: #fff;
        }
    }

    .nav-slide-enter-active {
        animation: enter-in 0.5s;
    }

    .nav-slide-leave-active {
        animation: enter-in 0.5s reverse;
    }

    @keyframes enter-in {
        from {
            left: -50%;
        }
        to {
            left: 0;
        }
    }

    @media (min-width: 1001px) {
        .nav__hamburger {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .nav__item {
            display: none;
        }

        .nav__item--small {
            @include center-flex;
            text-decoration: none;
            color: #fff;
            width: 100%;
            height: 100px;
            font-size: 30px;
            font-family: 'Roboto Condensed', sans-serif;
        }

        .nav__hamburger {
            display: block;
            position: absolute;
            padding: 0;
            top: 5px;
            left: 10%;
        }

        .nav, .nav--placeholder {
            height: 50px;
        }
    }
</style>
