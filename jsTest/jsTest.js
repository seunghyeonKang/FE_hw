// 총 점수 : 5/8

// # 1 (O)
/*
lion = () => {
  return "Hello LikeLion12";
};
*/

// # 2 (X) -> 삼항 연산자를 사용해주세요.
/*
let input = prompt("숫자를 입력해주세요!");

let number = parseInt(input, 10);

if (number % 2 == 0) {
  alert(`${number}는 짝수입니다.`);
} else if (number % 2 == 1) {
  alert(`${number}는 홀수입니다.`);
} else {
  alert(`숫자를 작성해주세요.`);
}
*/

// # 3 (O)
/*
let numQ3;
do {
  numQ3 = prompt("숫자를 입력해주세요!");
} while (numQ3 <= 100);
*/

// # 4 (O)
/*
let str = prompt("문자열을 입력하세요:");
let str02 = str.split("i");
console.log(str02[1]);
*/

// # 5 (O)
/*
let dateQ5 = new Date("May 27, 2022 12:30:00");
alert(dateQ5);
*/

// # 6 (X)
/*
function getSecondsToday() {
  const now = new Date();
  return alert(now.getSeconds);
}
getSecondsToday();
*/

// # 7 (O)
/*
function randomNum() {
  document.write(`첫번째 랜덤 난수 : ${Math.floor(Math.random() * 100)}`);
  document.write(`두번째 랜덤 난수 : ${Math.floor(Math.random() * 100)}`);
  document.write(`세번째 랜덤 난수 : ${Math.floor(Math.random() * 100)}`);
}
randomNum();
*/

// # 8(X)

function change() {
  const name = document.getElementById("name");
  let num = 1;
  name.classList(`likelion_${num + 1}`);
}
