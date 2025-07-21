let input = document.getElementById("display");

function appendToDisplay(value) {
  const lastChar = input.value.slice(-1);

 
  if ("+-*/%".includes(value)) {
    if (input.value === "" || "+-*/%".includes(lastChar)) {
      return;
    }
  }


  if (value === ".") {
    const parts = input.value.split(/[\+\-\*\/\%]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) {
      return;
    }
  }

  input.value += value;
}
function result() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "Error";
  }
}

function clearExp() {
  input.value = "";
}

function back() {
  input.value = input.value.slice(0, -1);
}
