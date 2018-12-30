import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const zh = require('../assets/i18n/zh');
const en = require('../assets/i18n/en');

const messages = {
    zh,
    en,
};

export default new VueI18n({
    locale: 'zh',
    messages,
});
