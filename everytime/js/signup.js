const formName = document.getElementById("formName");
const formNickname = document.getElementById("formNickname");
const formEmail = document.getElementById("formEmail");
const formPassword = document.getElementById("formPassword");
const formRePassword = document.getElementById("formRePassword");

const formSubmit = document.getElementById("formSubmit");

function validation() {
  const formNameValue = formName.value.trim();
  const formNicknameValue = formNickname.value.trim();
  const formEmailValue = formEmail.value.trim();
  const formPasswordValue = formPassword.value.trim();
  const formRePasswordValue = formRePassword.value.trim();

  if (
    formNameValue !== "" &&
    formNicknameValue !== "" &&
    formEmailValue !== "" &&
    formPasswordValue !== "" &&
    formRePasswordValue !== ""
  ) {
    on();
  } else {
    off();
  }
}

function off() {
  formSubmit.classList.remove("on");
}

function on() {
  formSubmit.classList.add("on");
}

formName.addEventListener("input", validation);
formNickname.addEventListener("input", validation);
formEmail.addEventListener("input", validation);
formPassword.addEventListener("input", validation);
formRePassword.addEventListener("input", validation);
