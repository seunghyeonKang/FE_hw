const countdown = document.getElementById("countdown");

const timeOpen = new Date();
timeOpen.setHours(10, 0, 0, 0);

const timeClose = new Date();
timeClose.setHours(22, 0, 0, 0);

function formatTime(ms) {
  const countHour = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const countMin = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const countSec = Math.floor((ms % (1000 * 60)) / 1000);
  return `${countHour} : ${countMin} : ${countSec}`;
}
function updateCountdown() {
  const timeNow = new Date();

  if (timeNow < timeOpen) {
    countdown.innerText = `금일 오픈까지 남은 시간:
    ${formatTime(timeOpen - timeNow)}`;
  } else if (timeOpen <= timeNow && timeNow < timeClose) {
    countdown.innerText = `금일 마감까지 남은 시간:
    ${formatTime(timeClose - timeNow)}`;
  } else {
    countdown.innerText = "가게 마감";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
