//get element by id
const inputSeconds = document.getElementById('InputSeconds');
const startBtn = document.getElementById('btn-start');
const resetBtn = document.getElementById('btn-reset');
const pauseBtn = document.getElementById('btn-pause');
const resumeBtn = document.getElementById('btn-resume');
const displayHours = document.getElementById('displayHours');
const displayMinutes = document.getElementById('displayMinutes');
const displaySeconds = document.getElementById('displaySeconds');
//Declaring varibales
let totalSeconds
let interval;

//code-flow 
startBtn.addEventListener('click',start);
resetBtn.addEventListener('click',reset);
pauseBtn.addEventListener('click',pause);
resumeBtn.addEventListener('click',resume);

//helper functions

function input()
{
   console.log("Input function called");
   totalSeconds=Number(inputSeconds.value);
   console.log(`input seconds ${totalSeconds}`);
}  

function start()
{
    inputSeconds.disabled=true;
    input();
    timer(totalSeconds);
}

function pause()
{
    clearInterval(interval);
} 

function reset ()
{
    totalSeconds=0;
    updateDisplay(0);
    inputSeconds.disabled=false;
    inputSeconds.value="";
}

function resume()
{
    timer(totalSeconds);
}

function updateDisplay(totalSeconds)
{
    let hours = Math.floor(totalSeconds/(60*60));
    let mins = Math.floor((totalSeconds-hours*60*60)/(60));
    let secs = totalSeconds-(hours*60*60)-(mins*60);
    displayHours.textContent=hours.toString().padStart(2,'0');
    displayMinutes.textContent=mins.toString().padStart(2,'0');
    displaySeconds.textContent=secs.toString().padStart(2,'0');
    console.log(`totalSeconds: ${totalSeconds}, hours${hours} mins${mins} secs:${secs}`);
}

function timer(timerSeconds)
{
    interval=setInterval(()=>{
        if(timerSeconds<=0)
        {
            clearInterval(interval);
            reset();
        }
        console.log(`timer function timerSeconds: ${timerSeconds}`)
        updateDisplay(timerSeconds);
        timerSeconds--; 
        totalSeconds=timerSeconds;
    },1000)
}


