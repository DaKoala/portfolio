<template>
    <div>
        <main class="container container--narrow">
            <span class="title" :class="{'title--deactive': !aboutIsActive}" @click="toggleActive">
                {{$t('about.about')}}
            </span>
            <span class="title" :class="{'title--deactive': aboutIsActive}" @click="toggleActive">
                {{$t('about.tech')}}
            </span>
            <article class="intro">
                <template v-if="aboutIsActive">
                    <p class="intro__para intro__para--indent">
                        {{$t('about.p1')}}
                    </p>
                    <p class="intro__para intro__para--indent">
                        {{$t('about.p2')}}
                    </p>
                    <p class="intro__para intro__para--indent">
                        {{$t('about.p3First')}}
                        <a class="intro__link" :href="$t('about.link1')">
                            {{$t('about.a1')}}
                        </a>
                        {{$t('about.p3Second')}}
                        <a class="intro__link" :href="$t('about.link2')">
                            {{$t('about.a2')}}
                        </a>
                        {{$t('about.p3Third')}}
                    </p>
                </template>
                <template v-else>
                    <tech-stack-item v-for="(item, i) in techStack" :section="item"
                                     :key="item + i"></tech-stack-item>
                </template>
            </article>
        </main>
    </div>
</template>

<script>
import TechStackItem from '../components/TechStackItem.vue';
import techStackData from '../data/techStack';

export default {
    name: 'About',
    components: {
        TechStackItem,
    },
    data() {
        return {
            aboutIsActive: true,
            techStack: techStackData,
        };
    },
    methods: {
        toggleActive() {
            this.aboutIsActive = !this.aboutIsActive;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .title {
        position: absolute;
        font-size: 2.5rem;
        color: $blue;
        transition: 0.5s;
        cursor: pointer;
        z-index: 10;
        left: 20%;
        user-select: none;
    }

    .title--deactive {
        left: calc(20% + 15rem);
        color: $color-disable;
    }

    .intro {
        position: relative;
        padding-top: 2.5rem;
    }

    .intro__title {
        color: $light-black;
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 0;
    }

    .intro__para {
        color: $light-black;
        font-size: 1.5rem;
        line-height: 2.5rem;
        @include slide-in;
    }

    .intro__para-item {
        display: inline-block;
        margin-top: 0.5rem;
        margin-left: 1rem;
        &:first-child {
            margin-left: 0;
        }
    }

    .intro__para--indent {
        &:before {
            content: '\00a0\00a0';
        }
    }

    .intro__line {
        background-color: $light-black;
        height: 2px;
        width: 100%;
    }

    .intro__link {
        color: $light-black;
        &:hover {
            color: $blue;
            text-decoration: none;
        }
    }

    @media (max-width: 1000px) {
        .title {
            position: static;
        }

        .intro {
            padding-top: 0;
        }
    }
</style>
