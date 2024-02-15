const email1 = document.getElementById("email");
const email2 = document.getElementById("emailConfirm");
const errorMessage = document.getElementById("errorSpan");

function confirmEmail() {
  console.log(email1.nodeValue);
  if (email1.value !== email2.value) {
    errorMessage.hidden = false;
  } else {
    errorMessage.hidden = true;
  }
}
email1.addEventListener('change', confirmEmail);
email2.addEventListener('change', confirmEmail);


