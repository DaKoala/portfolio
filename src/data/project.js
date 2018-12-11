const miniMessageImg = require('../assets/img/projects/miniMessage.png');
const awesomeTimetableImg = require('../assets/img/projects/awesomeTimetable.png');
const focusImg = require('../assets/img/thumbnails/focus.png');
const focusWholeImg = require('../assets/img/projects/focus.png');
const billSpliterImg = require('../assets/img/thumbnails/billSpliter.png');
const billSpliterWholeImg = require('../assets/img/projects/billSpliter.png');
const daphnesLaurelImg = require('../assets/img/projects/daphnesLaurel.png');
const toDoListImg = require('../assets/img/thumbnails/toDoList.png');
const toDoListWholeImg = require('../assets/img/projects/toDoList.gif');

const photosData = [
    awesomeTimetableImg,
    miniMessageImg,
    focusWholeImg,
    billSpliterWholeImg,
    daphnesLaurelImg,
    toDoListWholeImg,
];

const projectsData = [
    {
        name: 'Awesome Timetable',
        imagePath: awesomeTimetableImg,
    },
    {
        name: 'Mini Message',
        imagePath: miniMessageImg,
    },
    {
        name: 'Focus',
        imagePath: focusImg,
    },
    {
        name: 'Bill Spliter',
        imagePath: billSpliterImg,
    },
    {
        name: 'Daphne\'s Laurel',
        imagePath: daphnesLaurelImg,
    },
    {
        name: 'To-do List',
        imagePath: toDoListImg,
    },
];

export { photosData, projectsData };
