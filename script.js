let totalTime = 25 * 60;
let timeLeft = totalTime;
let interval = null;

const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("time");

const radius = 95;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

function updateUI() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;

    timeDisplay.innerText =
        (mins < 10 ? "0" : "") + mins + ":" +
        (secs < 10 ? "0" : "") + secs;

    let offset = circumference - (timeLeft / totalTime) * circumference;
    progress.style.strokeDashoffset = offset;
}

function startTimer() {
    if (interval) return;

    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateUI();
        } else {
            clearInterval(interval);
            alert("Time’s up.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = totalTime;
    updateUI();
}

updateUI();