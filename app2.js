let timer;
let seconds = 0;

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(function() {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    document.getElementById('timer').innerText = seconds;
}




