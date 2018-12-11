function secToTimer(originalSec) {
    const min = Math.floor(originalSec / 60);
    const sec = Math.floor(originalSec % 60);
    const minStr = min < 10 ? `0${min}` : String(min);
    const secStr = sec < 10 ? `0${sec}` : String(sec);
    return `${minStr}:${secStr}`;
}

export default secToTimer;
