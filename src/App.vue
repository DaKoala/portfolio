<template>
    <div id="app">
        <navigation></navigation>
        <router-view/>
        <contact></contact>
    </div>
</template>

<style lang="scss">
    @import "assets/scss/main";
</style>
<script>
import Navigation from './components/Navigation.vue';
import Contact from './components/Contact.vue';

export default {
    components: {
        Contact,
        Navigation,
    },
};
</script>
