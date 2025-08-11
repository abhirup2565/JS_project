const hoursHolder = document.getElementById('hours'); 
const minsHolder = document.getElementById('mins');
const secsHolder = document.getElementById('seconds');

setInterval(()=>{
    const now = new Date();
    const hours = Number(now.getHours());
    const mins = now.getMinutes(); 
    const seconds = now.getSeconds();  

    const hoursRotate = Number((hours%12)*30 + (mins/60)*5);
    const minsRotate = Number(mins*6);
    const secondsRotate = Number(seconds*6);

    hoursHolder.style.rotate = `${hoursRotate}deg`;
    minsHolder.style.rotate = `${minsRotate}deg`;
    secsHolder.style.rotate = `${secondsRotate}deg`;
},1000);