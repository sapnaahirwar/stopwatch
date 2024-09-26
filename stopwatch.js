let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.getElementById('output');
let int = null;

function run() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
}

function reset() {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
}

function displayTimer() {
    milliseconds += 10;
    
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = Math.floor(milliseconds / 10);  // Only take the first two digits of milliseconds
    
    timerRef.innerHTML = `${m}:${s}:${ms < 10 ? '0' + ms : ms}`;
}

