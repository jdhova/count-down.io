const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const years = document.getElementById('years');
const months = document.getElementById('months');

const targetDate = new Date('June 20 2023 00:00:00');



function millionTarget() {

const currentTime = new Date()
const interval = targetDate - currentTime;

const y = Math.floor(interval/1000/60/60/24/12/30);
 const m = Math.floor(interval/1000/60/60/24/12) % 30
 const d = Math.floor(interval/1000/60/60/24) % 12
 const min = Math.floor( (interval/1000/60) % 60 );
 const h = Math.floor( (interval/(1000*60*60)) % 24 );
 const sec = Math.floor( (interval/1000) % 60 );

 days.innerHTML = d < 10 ? '0' + d : d; 
 hours.innerHTML = h < 10 ? '0' + h : h;
 minutes.innerHTML = min < 10 ? '0'+ min : min;
 years.innerHTML = y < 10 ? '0' + y : y;
 months.innerHTML = m < 10 ? '0' + m : m;
 seconds.innerHTML = sec < 10 ? '0' + sec : sec;


}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
  }, 1000);



 setInterval(millionTarget,1000);



