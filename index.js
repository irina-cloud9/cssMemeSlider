//          Слайдер
const sliderImagesWrapper = document.querySelector(".images__wrapper");
const slidertImages = document.querySelectorAll(".images__slider__wrapper");
const widthImage = slidertImages[0].offsetWidth;

const sliderButtons = document.querySelectorAll(".slider__button__wrapper");
const windowWidth = window.innerWidth;

let activeImageIndex = 0;

const handleSliderMove = (index) => {
  //   sliderButtons[activeImageIndex].classList.remove("active");

  activeImageIndex = index;
  console.log("kjvhkjvk");
  sliderImagesWrapper.style.transform = `translateX(${
    -widthImage * activeImageIndex
  }px)`;

  //   sliderButtons[activeImageIndex].classList.add("active");
};

// кнопки
sliderButtons.forEach(function (button, index) {
  button.addEventListener("click", () => handleSliderMove(index));
  console.log("kjglkg");
});
