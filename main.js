let dataNum = "";
let result = "";
let borrar = "0";

function nums(dataNum) {
  if (result == "0") {
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
