const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var intClock;
//take a snapshot of the time when the script runs the first time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//find the degree rotation of each hand
let secPosition = sec * 6;
let minPosition = min * 6 + secPosition / 60;
let hrPosition = hr * 30 + minPosition / 12;

//each interval period (one second), calculate the rotational degree increase
function runTheClock() {
    //the second hand moves 6 degrees every second
    secPosition = secPosition + 6;
    //the minute hand moves 6 degrees every 60 seconds (each minute)
    minPosition = minPosition + (6/60);
    //the hour hand moves 30 degrees every 3600 seconds (each hour)
    hrPosition = hrPosition + (3/360);
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    console.log("Hour: " + hrPosition + " Minutes: " + minPosition + " Seconds: " + secPosition);
}
function startClock(){
    intClock = setInterval(runTheClock, 1000);
}
function stopClock() {
    clearInterval(intClock);
    console.log("interval = " + intClock);
}