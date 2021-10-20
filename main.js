var dataNum = "";
var screen = "0";
var clicks = 0;
var result = 0;
var signos = ["+", "-", "*", "/"];
var operations = ["suma", "resta", "multi", "div"];

function nums(dataNum) {
  if (screen === "0") {
    screen = "";
  }
  screen = screen + dataNum;

  document.getElementsByClassName("resultado")[0].innerHTML = screen;
}

function deleteAll() {
  screen = "0";
  clicks = 0;
  result = 0;
  document.getElementsByClassName("resultado")[0].innerHTML = screen;
}
function clear() {
  screen = "0";
  document.getElementsByClassName("resultado")[0].innerHTML = screen;
}

function suma() {
  screen = parseFloat(screen);

  if (clicks == 0) {
    result = screen;
  } else {
    result += screen;
  }
  clicks++;
  clear();
  document.getElementsByClassName("resultado")[0].innerHTML = result;
}

function del() {
  var number = screen;
  var delate = number.substring(0, number.length - 1);
  document.getElementsByClassName("resultado")[0].innerHTML = delate;
  screen = screen.substring(0, screen.length - 1);

  if (screen.length == 0) {
    screen = "0";
    document.getElementsByClassName("resultado")[0].innerHTML = screen;
  }
}
