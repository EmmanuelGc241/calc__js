let dataNum = "";
let result = "";
let borrar = "0";

function nums(dataNum) {
  if (result === "0") {
    result = "";
  }
  result = result + dataNum;

  document.getElementsByClassName("resultado")[0].innerHTML = result;

  console.log(dataNum);
}

function deleteAll() {
  result = dataNum + borrar;
  document.getElementsByClassName("resultado")[0].innerHTML = result;
}
//
function del() {
  var number = result;
  var delate = number.substring(0, number.length - 1);
  document.getElementsByClassName("resultado")[0].innerHTML = delate;
  result = result.substring(0, result.length - 1);

  if (result == 0) {
    result = "0";
    document.getElementsByClassName("resultado")[0].innerHTML = result;
  }
}
