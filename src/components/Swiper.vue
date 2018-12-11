<template>
    <div class="swiper" v-if="currIndex !== null" @click.capture.stop="handleMaskClick($event)"
         @touchstart.capture="handleMaskClick($event)"
         @pointermove.prevent="handlePointerMove($event)"
         @touchmove.prevent="handlePointerMove($event)"
         @touchend.prevent="handlePointerUp"
         @pointerup.prevent="handlePointerUp">
        <img class="swiper__item"
             :class="{'swiper__item--right': isFromRight, 'swiper__item--left': !isFromRight}"
             :src="item" :style="{transform: photoTransform}"
             @pointerdown.prevent="handlePointerDown($event)"
             @touchstart.prevent.stop="handlePointerDown($event)"
             v-for="(item, index) in photos" v-if="index === currIndex" :key="index"
        />
        <div class="swiper__dot-wrapper">
            <div class="swiper__dot" :class="{'swiper__dot--active': index === currIndex}"
                 v-for="(item, index) in photos" :key="index"></div>
        </div>
    </div>
</template>

<script>
/* eslint vue/no-use-v-if-with-v-for: 0 */
export default {
    name: 'Swiper',
    props: {
        currIndex: Number,
        photos: Array,
    },
    data() {
        return {
            photoOriginalX: 0,
            photoOffsetX: 0,
            isFromRight: true,
            length: 0,
        };
    },
    computed: {
        photoTransform() {
            return `translateX(${this.photoOffsetX}px)`;
        },
    },
    methods: {
        handleMaskClick(event) {
            if (event.target.classList.contains('swiper')) {
                this.$emit('hide');
            }
        },
        handlePointerDown(event) {
            this.photoOriginalX = event.clientX || event.changedTouches[0].clientX;
        },
        handlePointerMove(event) {
            const clientX = event.clientX || event.changedTouches[0].clientX;
            if (this.photoOriginalX !== 0) {
                this.photoOffsetX = clientX - this.photoOriginalX;
            }
        },
        handlePointerUp() {
            if (this.photoOffsetX > 20 || this.photoOffsetX < -20) {
                this.$emit('changephoto', this.photoOffsetX < -20);
                this.isFromRight = this.photoOffsetX < -20;
            }
            this.photoOriginalX = 0;
            this.photoOffsetX = 0;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .swiper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .swiper__item {
        height: 50%;
        width: auto;
        cursor: pointer;
    }

    .swiper__item--right {
        @include swipe-in-from-right;
    }

    .swiper__item--left {
        @include swipe-in-from-left;
    }

    .swiper__dot-wrapper {
        margin-top: 10px;
    }

    .swiper__dot {
        transition: 0.5s;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 10px;
        border-radius: 10px;
        background-color: $light-black-grey;
    }

    .swiper__dot--active {
        width: 20px;
        background-color: $blue;
    }

    @media (max-width: 1000px) {
        .swiper__item {
            max-width: 80%;
            height: auto;
        }
    }
</style>
