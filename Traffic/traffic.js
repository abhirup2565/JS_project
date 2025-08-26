//Global variable
const colors = ['red', 'yellow', 'green']
let activeIndex = 0;

//code-flow
window.addEventListener('load',()=>{inteval});

//helper functions
/**changes bulb color after 1sec(1000ms) */
const inteval = setInterval(()=>{
    activeIndex = activeIndex%3;
    const bulbs = document.querySelectorAll('.bulb')
    bulbs.forEach((item) => {
      if(item.classList.contains(colors[activeIndex])){
        item.style.backgroundColor = (colors[activeIndex]);
      }else{
        item.style.backgroundColor = 'white';
      }
    })
    activeIndex++;
},1000)

