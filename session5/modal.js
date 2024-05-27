const modalContent = document.querySelector(".modal_content");
const modalBackground = document.querySelector(".modal_background");

document.querySelector("#modal_btn").addEventListener("click", openModal);
document.querySelector(".modal_close").addEventListener("click", closeModal);

function openModal() {
  modalContent.classList.add("show-modal");
  modalBackground.classList.add("show-modal");
}
function closeModal() {
  modalContent.classList.remove("show-modal");
  modalBackground.classList.remove("show-modal");
}
