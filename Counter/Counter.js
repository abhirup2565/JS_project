// Element intialization
const display = document.getElementById('display');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
//intializing variable
let counter=0;
//Events
updateDisplay();
increase.addEventListener('click',()=>updateCounter('increase'));
decrease.addEventListener('click',()=>updateCounter('decrease'));

//Helper function
function updateCounter(input)
{
    console.log('change counter');
    switch(input){
        case 'increase':
            counter++;
            break;
        case 'decrease':
            counter--;
            break;
    }
    updateDisplay();
}

function updateDisplay()
{
    display.textContent=counter;
}
