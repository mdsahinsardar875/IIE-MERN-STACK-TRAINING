const images = ["photo_01.png", "photo_02.png", "photo_03.png"];
let currentIndex = 0;

const imgElement = document.getElementById("slider-image");

function showSlide(index) {
  imgElement.src = `image/${images[index]}`; 
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
