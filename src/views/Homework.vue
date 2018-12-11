<template>
    <div>
        <navigation></navigation>
        <main class="container hw-container">
            <homework-card v-for="homework in homeworkList" :key="homework.name"
                           :homework="homework"></homework-card>
        </main>
        <contact></contact>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import HomeworkCard from '../components/HomeworkCard.vue';
import Contact from '../components/Contact.vue';
import homeworkData from '../data/homework';

export default {
    name: 'Homework',
    components: { Contact, HomeworkCard, Navigation },
    data() {
        return {
            homeworkList: homeworkData,
        };
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .hw-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
