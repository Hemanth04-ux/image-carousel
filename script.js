const images = [
  { src: "images/image1.jpg", caption: "Image 1 of 5" },
  { src: "images/image2.jpg", caption: "Image 2 of 5" },
  { src: "images/image3.jpg", caption: "Image 3 of 5" },
  { src: "images/image4.jpg", caption: "Image 4 of 5" },
  { src: "images/image5.jpg", caption: "Image 5 of 5" }
];

let currentIndex = 0;

const imgElement = document.getElementById("carousel-image");
const captionElement = document.getElementById("caption");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateCarousel() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
    imgElement.style.opacity = 1;
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();
