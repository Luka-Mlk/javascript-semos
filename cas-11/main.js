function resize() {
  const domElements = document.getElementsByClassName("small");
  for (let i = 0; i < domElements.length; i++) {
    domElements[i].style.width = "300px";
  }
}
function resize2() {
  const domElements = document.querySelectorAll(".small");
  domElements.forEach((element) => {
    element.style.width = "300px";
  });
}
