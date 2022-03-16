var targetDate = "11 Nov 2021";
var myDate = new Date(targetDate);
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
function countDown() {
  
  const currentDate = new Date();
  const totalSeconds = (myDate - currentDate)/1000;
  const days = Math.floor(totalSeconds / 3600 / 24); 
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = format(days);
  hoursEl.innerHTML = format(hours);
  minutesEl.innerHTML = format(minutes);
  secondsEl.innerHTML = format(seconds);
}

countDown();

setInterval(countDown,1000);
// setInterval(Submit,1000);

function format(time){
  return (time < 10 && time > 0) ?  '0' + time : time;
}

function Submit(){
  const x = document.getElementById('text').value;
  document.getElementById('title').innerHTML = x;
  const y = document.getElementById('date').value;
  myDate = new Date(y);
}

document.querySelector('#text').addEventListener('keypress', function(e) {
  if(e.key =='Enter'){
    Submit();
  }
});

document.querySelector('#date').addEventListener('keypress', function(e) {
  if(e.key =='Enter'){
    Submit();
  }
});
