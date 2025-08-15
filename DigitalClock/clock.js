const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');
const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

window.addEventListener('load',()=>{
    setInterval(()=>{
        const now = new Date();
        hours.textContent = now.getHours().toString().padStart(2,'0');
        mins.textContent = now.getMinutes().toString().padStart(2,'0');
        seconds.textContent = now.getSeconds().toString().padStart(2,'0');;
        day.textContent = daysOfWeek[now.getDay()];
        date.textContent = now.getDate().toString().padStart(2,'0');;
        month.textContent = monthsOfYear[now.getMonth()];
        year.textContent = now.getFullYear();
    },1000)
})