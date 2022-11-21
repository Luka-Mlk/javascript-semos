const btn = document.getElementById("login");
function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  console.log(user, pass);
  user = document.getElementById("user").value = "";
  pass = document.getElementById("pass").value = "";
}
btn.addEventListener("click", login);
