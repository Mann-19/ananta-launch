const launchBtn = document.getElementById('launch-btn');
const rocket = document.getElementById('rocket');
const audio = new Audio('/public/audio/we_are_safemoon.mp3');

function startTimer() {
  launchBtn.style.display = 'none';
  let seconds = 10;
  audio.play();
  
  const timerInterval = setInterval(function () {
    document.getElementById('timer').innerHTML = seconds + ' seconds remaining';
    
    if (seconds === 0) {
          clearInterval(timerInterval);
          document.getElementById('timer').innerHTML = "Let's Go!!!";
          rocket.style.animationName = 'fly';
          rocket.style.animationDuration = '4s';
      } else {
          seconds--;
      }

      rocket.addEventListener('animationend', () => {
        rocket.style.bottom = "200vh";
        window.location = 'https://www.anantagsfcu.in/';
      })
  }, 1000);
}