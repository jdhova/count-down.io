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

 days.innerHTML = d
 hours.innerHTML = h
 minutes.innerHTML = min
 seconds.innerHTML = sec
 years.innerHTML = y
 months.innerHTML = m


}





 setInterval(millionTarget,1000);



