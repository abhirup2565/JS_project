const startBtn = document.getElementById('start-btn');
const lapsBtn = document.getElementById('laps-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const timerHour = document.getElementById('timer-hour');
const timerMin = document.getElementById('timer-min');
const timerSec = document.getElementById('timer-sec');
const displayLaps = document.getElementById('display-laps');

let sec = 0;
let interval = null;
let laps = 0;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener('click',()=>{startWatch()});
lapsBtn.addEventListener('click',()=>{lapsWatch()});
stopBtn.addEventListener('click',()=>{stopWatch()});
resetBtn.addEventListener('click',()=>{resetWatch()});

window.addEventListener('load',()=>{updateDisplay()})
//helper funcions
const startWatch = ()=>
{
    startBtn.style.display = 'none';
    lapsBtn.style.display='block';
    stopBtn.style.display='block';
    resetBtn.style.display='block';
    interval = setInterval(()=>
    { 
        sec++;
        updateDisplay();
    },1000)
}

const lapsWatch = ()=>{
    const lap = document.createElement('div');
    lap.textContent = `Lap ${++laps}: time ${hours}Hours ${mins}Minutes ${secs}seconds`;
    displayLaps.appendChild(lap);
}

const stopWatch = ()=>
    {
        clearInterval(interval);
        stopBtn.style.display='none';
        lapsBtn.style.display = 'none';
        startBtn.style.display='block';
        resetBtn.style.display='block';
    }

const resetWatch = ()=>{
    sec = 0;
    lap = 0;
    resetBtn.style.display='none';
    displayLaps.innerHTML="";
    updateDisplay();
}

const updateDisplay = ()=>{
    console.log(sec);
    hours = Math.floor(sec/3600);
    mins = Math.floor((sec - (3600*hours))/60);
    secs = Math.floor(sec- (3600*hours) - (60*mins));
    timerHour.textContent = hours.toString().padStart(2,0)+":";
    timerMin.textContent = mins.toString().padStart(2,0)+":";
    timerSec.textContent = secs.toString().padStart(2,0);
}
