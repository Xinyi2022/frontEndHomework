function confirmEmail() {
  var email1 = document.getElementById("email");
  var email2 = document.getElementById("emailConfirm");
  var span = document.getElementById("errorSpan");
  if (!email1 === email2) {
    span.setAttribute("hidden", "hidden");
  }
}