let input = document.getElementById("display");

function appendToDisplay(x) {
  input.value = input.value + x;
}


function result() {
  input.value = eval(input.value);
}

function clear() {
  input.value = "";
}

function back() {
  input.value = input.value.slice(0, -1);
}
