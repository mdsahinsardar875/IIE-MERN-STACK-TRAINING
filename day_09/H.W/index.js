function selectColor(color) {
  document.getElementById("colorFillBox").style.backgroundColor = color;
}

function selectPhoto(photoName) {
  document.getElementById("photoFill").src = `./image/${photoName}`;
}

function resetSelections() {
  document.getElementById("colorFillBox").style.backgroundColor = "";
  document.getElementById("photoFill").src = "";
}