<template>
    <div class="video" @pointermove.prevent="handleMouseMove($event)"
         @pointerup.prevent="stopDragging"
         @pointerleave="handleMouseLeave"
         @pointerenter="handleMouseEnter" ref="vcontainer">
        <video class="video__player" ref="v" @timeupdate="handleTimeUpdate"
               @ended="handleEnd">
            <source :src="videoSrc"/>
        </video>
        <div class="controller" v-show="isControlVisible">
            <div class="controller__progress-wrapper">
                <div class="controller__progress" ref="p" @click="handleProgressClick($event)">
                    <div class="controller__progress controller__progress--passed"
                         :style="{width: videoProgressPercent}"></div>
                    <div class="controller__dot"
                         :style="{left: videoProgressPercent}"
                         @pointerdown="startDragging($event)">
                        <div class="controller__inner-dot"></div>
                    </div>
                </div>
            </div>
            <div class="controller__btn-wrapper">
                <div class="controller__btn" @click="togglePlay">
                    <font-awesome-icon :icon="['fas', 'play']" v-if="isPaused"></font-awesome-icon>
                    <font-awesome-icon :icon="['fas', 'pause']" v-else></font-awesome-icon>
                </div>
                <div class="controller__btn" @click="stopPlay">
                    <font-awesome-icon :icon="['fas', 'stop']"></font-awesome-icon>
                </div>
                <div class="controller__btn" @click="toggleMute">
                    <font-awesome-icon :icon="['fas', 'volume-up']"
                                       v-if="isMuted"></font-awesome-icon>
                    <font-awesome-icon :icon="['fas', 'volume-mute']" v-else></font-awesome-icon>
                </div>
                <div class="controller__timer">
                    {{videoTimer()}}
                </div>
                <div class="controller__btn controller__btn--fullscreen" @click="toggleFullscreen">
                    <font-awesome-icon :icon="['fas', 'compress']" v-if="isFullscreen">
                    </font-awesome-icon>
                    <font-awesome-icon :icon="['fas', 'expand']" v-else></font-awesome-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import secToTimer from '../util/timeFormat';

export default {
    name: 'MyVideo',
    props: ['videoSrc'],
    data() {
        return {
            videoProgress: 0,
            video: null,
            progress: null,
            isPaused: true,
            isMuted: false,
            isFullscreen: false,
            isDragging: false,
            isControlVisible: false,
            hidingEvent: null,
            draggingStartX: 0,
            dotOffsetX: 0,
        };
    },
    computed: {
        videoProgressPercent() {
            return `${this.videoProgress * 100}%`;
        },
    },
    methods: {
        videoTimer() {
            if (!this.video) {
                return `${secToTimer(0)} / ${secToTimer(0)}`;
            }
            const currTime = this.video.currentTime || 0;
            const duration = this.video.duration || 0;
            console.log('timer');
            return `${secToTimer(currTime)} / ${secToTimer(duration)}`;
        },
        pauseVideo() {
            this.isPaused = true;
            this.video.pause();
        },
        setProgress(x) {
            const progressRect = this.progress.getBoundingClientRect();
            let progressPercent = (x - progressRect.left) / progressRect.width;
            if (progressPercent < 0) {
                progressPercent = 0;
            } else if (progressPercent > 1) {
                progressPercent = 1;
            }
            this.video.currentTime = this.video.duration * progressPercent;
        },
        togglePlay() {
            if (this.video.paused) {
                this.video.play();
            } else {
                this.video.pause();
            }
            this.isPaused = !this.isPaused;
        },
        stopPlay() {
            this.video.currentTime = 0;
            this.pauseVideo();
        },
        toggleMute() {
            this.video.muted = !this.video.muted;
            this.isMuted = this.video.muted;
        },
        hideControlBar() {
            const isFullscreen = document.webkitIsFullScreen || document.fullscreen;
            if (isFullscreen) {
                this.hideCursor();
            }
            this.isControlVisible = false;
        },
        showControlBar() {
            this.isControlVisible = true;
        },
        hideCursor() {
            document.body.style.cursor = 'none';
        },
        showCursor() {
            document.body.style.cursor = 'default';
        },
        toggleFullscreen() {
            const isFullscreen = document.webkitIsFullScreen || document.fullscreen;
            if (isFullscreen) {
                const exitFunc = document.exitFullscreen || document.webkitExitFullscreen;
                exitFunc.call(document);
            } else {
                const element = this.$refs.vcontainer;
                const fullscreenFunc = element.requestFullscreen || element.webkitRequestFullScreen;
                fullscreenFunc.call(element);
            }
            this.isFullscreen = !isFullscreen;
        },
        handleTimeUpdate() {
            this.videoProgress = this.video.currentTime / this.video.duration;
        },
        handleEnd() {
            this.pauseVideo();
        },
        handleProgressClick(event) {
            const clickX = event.clientX;
            this.setProgress(clickX);
        },
        startDragging(event) {
            this.pauseVideo();
            this.isDragging = true;
            this.draggingStartX = event.clientX;
        },
        moveDragging(event) {
            if (this.isDragging) {
                const offsetX = event.clientX - this.draggingStartX;
                this.dotOffsetX = offsetX < 0 ? 0 : offsetX;
                this.setProgress(event.clientX);
            }
        },
        stopDragging() {
            this.isDragging = false;
            this.dotOffsetX = 0;
        },
        handleMouseMove(event) {
            this.showControlBar();
            this.showCursor();
            if (this.hidingEvent !== null) {
                clearInterval(this.hidingEvent);
            }
            this.hidingEvent = setInterval(this.hideControlBar, 3000);
            this.moveDragging(event);
        },
        handleMouseLeave() {
            this.hideControlBar();
            this.stopDragging();
        },
        handleMouseEnter() {
            this.showControlBar();
        },
    },
    mounted() {
        this.video = this.$refs.v;
        this.progress = this.$refs.p;
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .video {
        position: relative;
    }

    .video__player {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .controller {
        flex-direction: column;
        height: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .controller__btn-wrapper {
        position: relative;
        height: calc(100% - 5px);
        display: flex;
        align-items: center;
        color: #fff;
        padding: 0 18px;
    }

    .controller__btn {
        cursor: pointer;
        transition: 0.5s;
        margin: 0 20px;
        &:hover {
            color: $blue;
        }
    }

    .controller__btn--fullscreen {
        position: absolute;
        right: 15px;
    }

    .controller__timer {
        margin-left: 15px;
    }

    .controller__progress-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .controller__progress {
        height: 5px;
        position: relative;
        width: calc(100% - 30px);
        border-radius: 100px;
        background: $dark-grey;
        cursor: pointer;
    }

    .controller__progress--passed {
        position: absolute;
        top: 0;
        left: 0;
        background: $blue;
    }

    .controller__dot {
        position: absolute;
        z-index: 50;
        left: 0;
        top: -5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .controller__inner-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: $blue;
    }
</style>
