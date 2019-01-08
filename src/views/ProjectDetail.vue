<template>
    <div>
        <main class="container container--narrow">
            <h1 class="title">{{project.title}}</h1>
            <p class="support">
                <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
                {{time}}
            </p>
            <p class="support">
                <font-awesome-icon :icon="['fas', 'tags']"></font-awesome-icon>
                {{tags}}
            </p>
            <p class="support">
                <font-awesome-icon :icon="['fas', 'code-branch']"></font-awesome-icon>
                <a class="support__link" :href="project.link">{{project.link}}</a>
            </p>
            <div class="thumbnail-wrapper">
                <img class="thumbnail" :src="item" v-for="(item, index) in project.images"
                     :key="index" />
            </div>
            <p class="content" v-for="(block, outerIdx) in paragraphs" :key="outerIdx">
                <template v-for="(ele, innerIdx) in block">
                    <span v-if="ele.type === 'text'" :key="innerIdx">
                        {{ele.content}}
                    </span>
                    <a class="content__link" :href="ele.link" v-else :key="innerIdx">
                        {{ele.content}}
                    </a>
                </template>
            </p>
            <p class="content">
                <router-link class="content__link" to="/projects">
                    <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
                    {{$t('projects.goBack')}}
                </router-link>
            </p>
        </main>
    </div>
</template>

<script>
import projectDetail from '../data/projectDetail';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: null,
        };
    },
    computed: {
        tags() {
            return this.project.tags.join(', ');
        },
        paragraphs() {
            return this.$t(`projects['${this.project.camelCase}'].paragraphs`);
        },
        time() {
            return this.$t(`projects['${this.project.camelCase}'].time`);
        },
    },
    created() {
        const { projectName } = this.$route.params;
        if (projectDetail[projectName] === undefined) {
            this.$router.push('/projects');
            return;
        }
        this.project = projectDetail[projectName];
    },
};
</script>

<style lang="scss" scoped>
    @import '../assets/scss/main';

    .title {
        color: $dark-black;
        text-align: center;
        font-size: 3rem;
    }

    .support {
        color: $light-black-grey;
        text-align: center;
    }

    .support__link {
        margin-left: 0.3em;
        color: $blue;
        &:hover {
            text-decoration: none;
        }
    }

    .thumbnail-wrapper {
        text-align: center;
    }

    .thumbnail {
        max-width: 80%;
        border-radius: 8px;
        border: 2px solid #000;
        margin: {
            top: 10px;
            left: 10px;
            right: 10px;
        }
    }

    .content {
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: $light-black;
    }

    .content__link {
        color: $blue;
        text-decoration: none;
    }
</style>
