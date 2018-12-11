<template>
    <section class="hw">
        <img class="hw__thumbnail" :src="homework.image" />
        <aside class="hw__description">
            <h2 class="hw__title">{{homework.title}}</h2>
            <h3 class="hw__subtitle">{{homework.subtitle}}</h3>
            <p class="hw__tags">
                <font-awesome-icon :icon="['fas', 'tags']"></font-awesome-icon>
                <span class="hw__tag">{{tags}}</span>
            </p>
        </aside>
    </section>
</template>

<script>
export default {
    name: 'HomeworkCard',
    props: {
        homework: Object,
    },
    computed: {
        tags() {
            return this.homework.tags.join(', ');
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .hw {
        background-color: #fff;
        margin-top: 25px;
        box-sizing: border-box;
        border: 1px solid $dark-grey;
        padding: 30px;
        border-radius: 10px;
        &:first-child {
            margin-top: 0;
        }
        &:nth-child(odd) {
            @include swipe-in-from-left;
        }
        &:nth-child(even) {
            @include swipe-in-from-right;
        }
    }

    .hw__thumbnail {
        transition: 0.5s;
        max-width: 600px;
        width: 50%;
        height: auto;
        vertical-align: middle;
        border: 3px solid #000;
        border-radius: 5px;
        &:hover {
            transform: scale(1.5, 1.5);
        }
    }

    .hw__description {
        min-width: 240px;
        margin-left: 3%;
        display: inline-block;
        height: 100%;
        vertical-align: top;
    }

    .hw__title {
        color: $dark-black;
        font-size: 2rem;
        margin: 0;
    }

    .hw__subtitle {
        color: $dark-black-grey;
        font-size: 1.2rem;
        font-weight: normal;
    }

    .hw__tags {
        color: $dark-black;
        font-size: 1rem;
    }

    .hw__tag {
        color: $blue;
        margin-left: 1em;
    }

    @media (max-width: 1000px) {
        .hw {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .hw__thumbnail {
            width: 90%;
            margin-bottom: 20px;
        }

        .hw__description {
            text-align: center;
        }
    }
</style>
