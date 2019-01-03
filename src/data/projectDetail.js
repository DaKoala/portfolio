const awesomeTimetableImg1 = require('../assets/img/projectDetail/awesomeTimetable/1.png');
const awesomeTimetableImg2 = require('../assets/img/projectDetail/awesomeTimetable/2.png');
const miniMessageImg1 = require('../assets/img/projectDetail/miniMessage/1.png');
const miniMessageImg2 = require('../assets/img/projectDetail/miniMessage/2.png');
const miniMessageImg3 = require('../assets/img/projectDetail/miniMessage/3.png');
const focusImg1 = require('../assets/img/projectDetail/focus/1.png');
const focusImg2 = require('../assets/img/projectDetail/focus/2.png');
const billSplitterImg1 = require('../assets/img/projectDetail/billSplitter/1.png');
const billSplitterImg2 = require('../assets/img/projectDetail/billSplitter/2.png');
const daphneSLaurelImg1 = require('../assets/img/projectDetail/daphneSLaurel/1.png');
const toDoListImg1 = require('../assets/img/projectDetail/toDoList/1.gif');
const toDoListImg2 = require('../assets/img/projectDetail/toDoList/2.gif');

export default {
    'awesome-timetable': {
        camelCase: 'awesomeTimetable',
        title: 'Awesome Timetable',
        link: 'https://github.com/DaKoala/awesome-timetable',
        tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'ElementUI'],
        images: [awesomeTimetableImg1, awesomeTimetableImg2],
    },
    'mini-message': {
        camelCase: 'miniMessage',
        title: 'Mini Message',
        link: 'https://github.com/DaKoala/MiniMessage',
        tags: ['jQuery', 'Bootstrap', 'Flask', 'SQLite'],
        images: [miniMessageImg1, miniMessageImg2, miniMessageImg3],
    },
    focus: {
        camelCase: 'focus',
        title: 'Focus',
        link: 'https://github.com/DaKoala/Focus',
        tags: ['Vue.js', 'Amap'],
        images: [focusImg1, focusImg2],
    },
    'bill-splitter': {
        camelCase: 'billSplitter',
        title: 'Bill Splitter',
        link: 'https://github.com/DaKoala/bill-spliter',
        tags: ['Mini Program(小程序)'],
        images: [billSplitterImg1, billSplitterImg2],
    },
    'daphne-s-laurel': {
        camelCase: 'daphneSLaurel',
        title: 'Daphne\'s Laurel',
        link: 'https://github.com/DaKoala/Daphne-s-Laurel',
        tags: ['p5.js'],
        images: [daphneSLaurelImg1],
    },
    'to-do-list': {
        camelCase: 'toDoList',
        title: 'To-do List',
        link: 'https://github.com/DaKoala/Pre-Work---Todo-List',
        tags: ['Bootstrap', 'Django', 'PostgreSQL'],
        images: [toDoListImg1, toDoListImg2],
    },
};
