function clc() {
  let code = prompt("Введи код:");
  let correctCode = "5793";

  if (code === correctCode) {
    document.getElementById("body").style.background = "white";
  } else {
    alert("Неправильний код!");
  }
}
