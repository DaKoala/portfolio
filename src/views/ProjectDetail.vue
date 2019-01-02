<template>
    <div>
        <navigation></navigation>
        <contact></contact>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Contact from '../components/Contact.vue';

export default {
    name: 'ProjectDetail',
    components: { Contact, Navigation },
};
</script>

<style lang="scss" scoped>
    @import '../assets/scss/main';
</style>
