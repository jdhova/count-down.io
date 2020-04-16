const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');



const targetDate = new Date('June 20 2023 00:00:00');

// const currentDate = new Date().getFullYear()

const currentTime = new Date()

const interval = targetDate - currentTime;

const y = Math.floor(interval/1000/60/60/24/365);
const m  = Math.floor(interval/1000/60/60/24);
const d  = Math.floor(interval/1000/60/60);

console.log(m,d)

// console.log(d,targetDate,currentTime,'here')


function millionTarget() {
    const y = Math.floor(interval/1000/60/60/24/365);
    const m  = Math.floor(interval/1000/60/60/24);
    const d  = Math.floor(interval/1000/60/60);

    console.log(m,d)
}





// setInterval();



