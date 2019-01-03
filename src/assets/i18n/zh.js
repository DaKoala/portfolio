export default {
    title: {
        home: '邹翊杰 Billy',
        about: '关于我',
        projects: '我的项目',
        games: '我的游戏',
    },
    nav: {
        language: 'English',
        home: '主页',
        about: '关于',
        projects: '项目',
        games: '游戏',
    },
    home: {
        name: '邹翊杰 Billy',
        academic: '纽约大学计算机科学与互动媒体艺术双专业学生',
        title: 'Web前端开发者',
        game: '游戏爱好者以及业余游戏开发者',
        about: '关于我',
        projects: '个人项目',
    },
    about: {
        about: '关于我',
        tech: '技术栈',
        programmingLanguages: '编程语言',
        otherLanguages: '其他语言',
        frameworks: '框架',
        libraries: '库',
        databases: '数据库',
        tools: '工具',
        link1: 'https://baike.baidu.com/item/%E5%94%AF%E5%93%81%E4%BC%9A',
        link2: 'https://baike.baidu.com/item/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/20171697?fr=aladdin',
        a1: '唯品会',
        a2: '微信小程序',
        p1: '我是邹翊杰，目前是上海纽约大学的一位大三学生，双修计算机科学和互动媒体艺术专业。我是一位初级Web前端开发者，在2017年接触了前端开发。',
        p2: '我大一开始学习编程，学的第一门编程语言是Processing，一门以设计可视化内容为主的Java的封装语言。我在大一下半学期确定了计算机科学专业并开始系统性地用Python学习编程。除了在学校学习基础的计算机课程外，我花了很多的课余时间学习网页开发。我的网页开发技术大部分是通过自学积累的。',
        p3First: 'JavaScript是我最擅长的编程语言。我熟悉JavaScript，包括ES6语法以及一些更加新的语法。我同样熟悉Sass和一些CSS的新语法，例如弹性布局和网格布局。我刚开始接触网页开发的时候主要用的是jQuery和Bootstrap。我第一份专业的网页开发方面的实习是在',
        p3Second: '担任实习前端开发工程师，我在这里开始了解',
        p3Third: '和Vue.js。现在我主要用Vue.js、Node.js和MongoDB进行开发工作。基于我的Python基础，我也可以用如Flask或者Django这样的框架进行网页应用的开发。',
    },
    games: {
        magicWar: '一个用Processing和Leap Motion开发的双人对战游戏',
        lineRun: '一个用Processing和Kinect2开发的3D跑酷游戏',
        breakoutForTwo: '一个用Python的Pygame库开发的双人打砖块游戏',
    },
    projects: {
        goBack: '查看其他项目',
        awesomeTimetable: {
            name: '日历应用',
            time: '2018年11月',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: '这是一个日历性质的网页应用。 用户可以创建每周计划并将它们可视化。这个应用非常适合学生们在选课前排课表，制定备选方案时使用。',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: '整个应用全部由我独立开发完成。我用了Vue.js作为前端框架，Express作为后端框架，MongoDB作为数据库。我还使用了饿了么前端团队开发的ElementUI来美化用户界面。这是一个借助了Vue Router和Vuex开发而成的单页应用。这个应用是前后端分离的，也就是说前端只是一个静态页面，前后端的交互全部通过RESTful API来完成。从零开始，我花了两周时间完成了这个应用的开发。',
                    },
                ],
            ],
        },
        miniMessage: {
            name: '网页聊天室应用',
            time: '2018年4月',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: '这是一个在线网页聊天室应用。用户可以在大厅中与陌生人聊天，也可以建立私人聊天室与朋友进行私聊。',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: '整个应用由我独立开发完成。我用了jQuery来处理前端逻辑并用Bootstrap来美化用户界面。后端我用了Flask，数据库是SQLite。最初这个应用是基于AJAX轮询的，但目前来看Web Socket协议是一个更好的解决方法，我正在考虑用Web Socket重构这个项目。',
                    },
                ],
            ],
        },
        focus: {
            name: '基于地理位置的社交应用',
            time: '2018年7月',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: '这是一款基于地理位置信息的社交应用。用户可以基于地理位置发送图文，所有的文章只能被附近的人看见。',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: '这是这款软件的网页端，用Vue.js和高德地图的SDK开发完成。在网页端，用户无需登录，但也只能查看文章。这个应用是一个产品原型，在24小时内开发完成，作为参加2018年7月举行的Hack Shanghai创客马拉松的参赛作品。',
                    },
                ],
            ],
        },
        billSplitter: {
            name: '账单分摊小程序',
            time: 'September, 2018',
            paragraphs: [
                [
                    {
                        type: 'text',
                        content: '这是一款用户分摊账单用的微信小程序。有时候人们的付款中包括了税费和小费但往往人们只知道商品的原价，在这种情况下，这款应用可以方便地帮助人们分摊账单。它同时也适用于多人一起点外卖时分摊账单的场景。请在微信小程序中搜索“AA分摊助手”来使用它。',
                    },
                ],
                [
                    {
                        type: 'text',
                        content: '这款应用借助微信小程序框架开发，同时使用了微信的官方UI库WeUI。',
                    },
                ],
            ],
        },
        daphneSLaurel: {
            name: '达芙妮之月桂（数字艺术）',
        },
        toDoList: {
            name: '待办事项应用',
        },
    },
};
