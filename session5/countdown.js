const operating_hours = document.getElementById("operating_hours");
const countdown = document.getElementById("countdown");

const time_open = new Date();
time_open.setHours(10, 0, 0, 0); // 오전 10시

const time_close = new Date();
time_close.setHours(22, 0, 0, 0); // 오후 10시

function updateCountdown() {
  const now = new Date(); // 지금
  //   const now = new Date(2024, 4, 19, 7, 29, 30, 300); // 가게 오픈 전
  //   const now = new Date(2024, 4, 19, 10, 30, 29, 300); // 가게 오픈 중
  //   const now = new Date(2024, 4, 19, 22, 29, 30, 300); // 가게 마감 후

  if (now < time_open) {
    // 가게 오픈 전
    const timeUntilOpen = time_open - now; // 소수점 3자리 초
    const hours = Math.floor((timeUntilOpen % 86400000) / 3600000); // %24시간 / 1시간
    const minutes = Math.floor((timeUntilOpen % 3600000) / 60000); // %1시간 / 1분
    const seconds = Math.floor((timeUntilOpen % 60000) / 1000); // %1분 / 1초
    countdown.innerText = `금일 오픈까지 남은 시간
    ${hours} : ${minutes} : ${seconds}`;
  } else if (now >= time_open && now < time_close) {
    // 가게 오픈 중
    const timeUntilClose = time_close - now;
    const hours = Math.floor((timeUntilClose % 86400000) / 3600000);
    const minutes = Math.floor((timeUntilClose % 3600000) / 60000);
    const seconds = Math.floor((timeUntilClose % 60000) / 1000);
    countdown.innerText = `금일 마감까지 남은 시간
    ${hours} : ${minutes} : ${seconds}`;
  } else {
    // 가게 마감 후
    countdown.innerText = "가게 마감";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
