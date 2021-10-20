let dataNum = "";
let screen = "";
let borrar = "0";

function nums(dataNum) {
  if (screen === "0") {
    screen = "";
  }
  screen = screen + dataNum;

  document.getElementsByClassName("resultado")[0].innerHTML = screen;

  console.log(dataNum);
}

function deleteAll() {
  screen = dataNum + borrar;
  document.getElementsByClassName("resultado")[0].innerHTML = screen;
}
//
function del() {
  var number = screen;
  var delate = number.substring(0, number.length - 1);
  document.getElementsByClassName("resultado")[0].innerHTML = delate;
  screen = screen.substring(0, screen.length - 1);

  if (screen == 0) {
    screen = "0";
    document.getElementsByClassName("resultado")[0].innerHTML = screen;
  }
}
