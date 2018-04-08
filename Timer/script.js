const startButton = document.querySelector("#start");
startButton.addEventListener("click", start, false);

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", stop, false);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset, false);

const theTimer = document.querySelector(".timer");

//timer[0] == minutes, timer[1] == seconds, timer[2] == hundredths of seconds, timer[3] == thousandths of seconds
let timer = [0,0,0,0];
let interval;
let currentTime;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    //use the timer array's first three parts to represent the minutes, seconds, and hundredths of a second
    currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;
    //use Math.floor() to avoid decimals
    //take the thousandths position and divide by 100 to get seconds; then divide seconds by 60 to get minutes
    timer[0] = Math.floor(timer[3]/100/60);
    //after getting the seconds value, subtract 60 times the minutes display so the displayed seconds value returns to 0 after 60 seconds;
    //otherwise, the seconds value will continue to increment beyond its ceiling value of 60 seconds
    timer[1] = Math.floor(timer[3]/100) - (timer[0] * 60);
    //similarly, after getting the thousandths value, subtract 100 times the seconds display and 6000 times the minutes display
    //so the displayed hundredths value returns to 0 after 100 seconds and 6000 thousandths of a second;
    //otherwise, the hundredths value will continue to increment beyond its ceiling value of 100 hundredths of a second
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Start the timer:
function start() {
    interval = setInterval(runTimer, 10);
}
//Stop the timer:
function stop(){
    clearInterval(interval);
}
// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    theTimer.innerHTML = "00:00:00";
}