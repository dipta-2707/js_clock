const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setTime(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec / 60)*360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const minDeg = ((now.getMinutes() / 60)*360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hourDeg = ((now.getHours() / 12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;


    

}

setInterval(setTime,1000);