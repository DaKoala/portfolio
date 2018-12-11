const magicWarVideo = require('../assets/video/magicWar.mp4');
const lineRunVideo = require('../assets/video/lineRun.mp4');
const breakoutForTwoVideo = require('../assets/video/breakoutForTwo.mp4');

export default [
    {
        name: 'Magic War',
        description: 'A two-player competitive action game, powered by Processing and Leap Motion',
        src: magicWarVideo,
    },
    {
        name: 'Line Run',
        description: 'An 3D endless running game, powered by Processing and KinectV2',
        src: lineRunVideo,
    },
    {
        name: 'Breakout For Two',
        description: 'An two-player breakout game, powered by Python and Pygame',
        src: breakoutForTwoVideo,
    },
];
