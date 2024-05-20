const formIdElement = document.getElementById("form_id");
const formPasswordElement = document.getElementById("form_password");
const formSubmitButton = document.getElementById("form_submit");

function validation() {
  const formIdValue = formIdElement.value.trim();
  const formPasswordValue = formPasswordElement.value.trim();

  if (formIdValue !== "" && formPasswordValue !== "") {
    on();
  } else {
    off();
  }
}

function off() {
  formSubmitButton.classList.remove("on");
}

function on() {
  formSubmitButton.classList.add("on");
}

formIdElement.addEventListener("input", validation);
formPasswordElement.addEventListener("input", validation);
