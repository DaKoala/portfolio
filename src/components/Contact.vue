<template>
    <footer class="footer">
        <a class="footer__item footer__item--mail" href="mailto:yijie.zou@nyu.edu" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
        </a>
        <a class="footer__item footer__item--linkedin"
           href="https://www.linkedin.com/in/yijie-zou-1113b5132/"
           target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
        </a>
        <a class="footer__item footer__item--github" href="https://github.com/DaKoala"
           target="_blank">
            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
        </a>
        <a class="footer__item footer__item--facebook" href="https://www.facebook.com/billy.zou.921"
           target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
        </a>
        <a class="footer__item footer__item--wechat" href="/wechat.jpeg" target="_blank">
            <font-awesome-icon :icon="['fab', 'weixin']"></font-awesome-icon>
        </a>
        <a class="footer__item footer__item--blog" href="https://blog.csdn.net/zyj362633491"
           target="_blank">
            <font-awesome-icon :icon="['fas', 'blog']"></font-awesome-icon>
        </a>
    </footer>
</template>

<script>
export default {
    name: 'Contact',
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 0 35%;
        background: $dark-black;
    }

    .footer__item {
        font-size: 2.5rem;
        color: #fff;
        transition: 0.5s;
        &--mail:hover {
            color: #ff0000;
        }
        &--linkedin:hover {
            color: $linkedin;
        }
        &--github:hover {
            color: $github;
        }
        &--facebook:hover {
            color: $facebook;
        }
        &--wechat:hover {
            color: $wechat;
        }
        &--blog:hover {
            color: #cb381c;
        }
    }

    @media (max-width: 1000px) {
        .footer {
            display: flex;
            justify-content: space-around;
            padding: 0;
        }
    }

</style>
