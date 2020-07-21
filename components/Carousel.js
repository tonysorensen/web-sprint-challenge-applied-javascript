/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselEntry = document.querySelector(".carousel-container");
const images = [
  "/assets/carousel/mountains.jpeg",
  "/assets/carousel/computer.jpeg",
  "/assets/carousel/trees.jpeg",
  "/assets/carousel/turntable.jpeg",
];
console.log(images);
const createCarousel = (images) => {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const mountains = document.createElement("img");
  const computer = document.createElement("img");
  const trees = document.createElement("img");
  const turntable = document.createElement("img");
  let img = document.createElement("img");

  carouselEntry.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(mountains);
  carousel.appendChild(img);
  // carousel.appendChild(mountains);
  // carousel.appendChild(computer);
  // carousel.appendChild(trees);
  // carousel.appendChild(turntable);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // mountains.src = images[0];
  // computer.src = images[1];
  // trees.src = images[2];
  // turntable.src = images[3];
  leftButton.textContent = "\u21a9";
  rightButton.textContent = "\u21aa";

  let i = 0;
  img.src = images[i];
  leftButton.addEventListener("click", () => {
    if (i > 0) {
      i--;
    } else {
      i = images.length - 1;
    }
    img.src = images[i];
    console.log(i);
  });

  rightButton.addEventListener("click", () => {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    img.src = images[i];
  });
};

createCarousel(images);
