var element = document.querySelector(".top");
console.log(element)
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("fridgeOpen");
}