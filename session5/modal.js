const modal_wrap = document.querySelector(".modal_wrap");
const modal_background = document.querySelector(".modal_background");

document.querySelector("#modal_btn").addEventListener("click", () => {
  open();
});

document.querySelector(".modal_close").addEventListener("click", () => {
  close();
});

function close() {
  modal_wrap.classList.remove("show-modal");
  modal_background.classList.remove("show-modal");
}

function open() {
  modal_wrap.classList.add("show-modal");
  modal_background.classList.add("show-modal");
}
