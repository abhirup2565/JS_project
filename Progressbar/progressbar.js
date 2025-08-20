const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');

let initialProgress = 0;

window.addEventListener('load',()=>{
const interval = setInterval(()=>{
    initialProgress+=10;
    progress.style.width=`${initialProgress}%`;
    if(initialProgress==100)
    {
        clearInterval(interval);
    }

},1000)
})
