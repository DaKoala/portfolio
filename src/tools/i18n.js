import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from '../assets/i18n/zh';
import en from '../assets/i18n/en';

Vue.use(VueI18n);

const messages = {
    zh,
    en,
};

export default new VueI18n({
    locale: 'zh',
    messages,
});
