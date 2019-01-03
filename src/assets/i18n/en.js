export default {
    title: {
        home: 'Yijie "Billy" Zou',
        about: 'About Me',
        projects: 'My Projects',
        games: 'My Games',
    },
    nav: {
        language: '中文',
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        games: 'Games',
    },
    home: {
        name: 'Yijie "Billy" Zou',
        academic: 'Student major in Computer Science & Interactive Media Arts at NYU',
        title: 'Web front-end developer',
        game: 'Game lover and amateur game developer',
        about: 'About me',
        projects: 'Projects',
    },
    about: {
        about: 'About Billy',
        tech: 'Tech Stack',
        programmingLanguages: 'Programming Languages',
        otherLanguages: 'Other Languages',
        frameworks: 'Frameworks',
        libraries: 'Libraries',
        databases: 'Databases',
        tools: 'Tools',
        link1: 'https://en.wikipedia.org/wiki/Vipshop',
        link2: 'https://walkthechat.com/wechat-mini-programs-simple-introduction',
        a1: 'Vip.com',
        a2: 'Wechat Mini Program',
        p1: 'Billy is currently a junior student at NYU Shanghai. He double majors in Computer Science & Interactive Media Arts. He is a junior Web Front-end developer, who started doing front-end development work in 2017.',
        p2: 'He started coding in freshman year with Processing as the first programming language he learned. He declared major as Computer Science the second semester and started learning programming systematically using Python. Apart from the fundamental computer science courses taken in school, Billy spent much time studying web development in his spare time. His web development skills are mainly acquired through self-studying.',
        p3First: 'JavaScript is Billy\'s primary programming language. He is familiar with Javascript, including ES6 and newer syntax. He is also familiar with Sass and some new CSS features such as flexbox and grid. He got started with front-end development using jQuery and Bootstrap. His first professional front-end work was at ',
        p3Second: 'where he became experienced in',
        p3Third: 'and Vue.js as an intern front-end engineer. Now Billy mainly works with Vue.js, Node.js and MongoDB. With his Python experience, he is also able to develop web application using frameworks like Flask and Django.',
    },
    games: {
        magicWar: 'A two-player competitive action game, powered by Processing and Leap Motion',
        lineRun: 'An 3D endless running game, powered by Processing and KinectV2',
        breakoutForTwo: 'An two-player breakout game, powered by Python and Pygame',
    },
    projects: {
        goBack: 'View other projects',
        awesomeTimetable: {
            name: 'Calendar Application',
            time: 'November, 2018',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: 'This is a web calendar application. Users can create different weekly plans and visualize them. This application is suitable for students to visualize course timetable before enroll and manage their back-up plans.',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: 'The application is developed by Billy independently. Billy used Vue.js as the front-end framework, Express as the back-end framework and MongoDB as the database. Billy also used ElementUI, a UI library developed by ele.me. It is a single page application powered by Vue Router and Vuex. The front-end and the back-end are separated, that is, the front-end website is a static website and all the interactions are carried out by RESTful APIs. It took Billy 2 weeks to finish the project from scratch.',
                    },
                ],
            ],
        },
        miniMessage: {
            name: 'Chat Room Application',
            time: 'April, 2018',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: 'This is an online chat room application. Users can either talk with strangers in the public lobby or talk with friends by creating their own private chat rooms.',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: 'The application is developed by Billy independently. Billy used jQuery and Bootstrap as front-end libraries, Flask as the back-end framework and SQLite as the database. The application was initially developed using AJAX Polling, however, Web Socket could be a better choice. Billy is considering refactoring the project using Web Socket.',
                    },
                ],
            ],
        },
        focus: {
            name: 'LBS Social Application',
            time: 'July, 2018',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: 'This is a LBS social application. Users can post articles based on location. Articles can only be viewed by people nearby.',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: 'This is the web end of the application, developed using Vue.js and SDK of Amap. Users do not need to sign in but they can only view articles. The application is an entry for Hack Shanghai held in July, 2018. It is a prototype of the product, developed within 24 hours.',
                    },
                ],
            ],
        },
        billSplitter: {
            name: 'Bill Splitting Application',
            time: 'September, 2018',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: 'This is a Wechat Mini Program to split bills. Sometimes the final payment includes tax and tip but people only know the original price. In this case, the application can help people split the bill conveniently. It is also good for people who share food delivery with others. Please Search "AA分摊助手" on Wechat to access the Mini Program.',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: 'The application is developed using Wechat Mini Program framework and the official UI library of Wechat, WeUI.',
                    },
                ],
            ],
        },
        daphneSLaurel: {
            name: 'Daphne\'s Laurel(Digital Art)',
            time: 'December, 2017',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: 'This is a digital artwork. It tell the Greek myth about Apollo and Daphne. Apollo fell in love with Daphne but Daphne hated Apollo. In order to elude Apollo\'s courting, Daphne became a laurel tree.',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: 'The project is developed using p5.js, a JavaScript library for visual arts development. Please visit',
                    },
                    {
                        type: 'link',
                        content: 'https://im.billyzou.com/Daphne-s-Laurel/',
                        link: 'https://im.billyzou.com/Daphne-s-Laurel/',
                    },
                    {
                        type: 'text',
                        content: 'to view the project.',
                    },
                ],
            ],
        },
        toDoList: {
            name: 'To-do List Application',
        },
    },
};
