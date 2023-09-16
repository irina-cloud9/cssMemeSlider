//          Слайдер
const sliderImagesWrapper = document.querySelector(".images__wrapper");
const slidertImages = document.querySelectorAll(".images__slider__wrapper");
const widthImage = slidertImages[0].offsetWidth;

const textSliderWrapper = document.querySelector(".text__slider__wrapper");
const sliderText = document.querySelectorAll(".text__slider");
const widthText = sliderText[0].offsetWidth;

const sliderButtons = document.querySelectorAll(".slider__button__wrapper");
const windowWidth = window.innerWidth;

let activeImageIndex = 0;

const handleSliderMove = (index) => {
  sliderButtons[activeImageIndex].classList.remove("active");

  activeImageIndex = index;
  sliderImagesWrapper.style.transform = `translateX(${
    -widthImage * activeImageIndex
  }px)`;

  textSliderWrapper.style.transform = `translateX(${
    -widthText * activeImageIndex
  }px)`;

  sliderButtons[activeImageIndex].classList.add("active");
};

// кнопки
sliderButtons.forEach(function (button, index) {
  button.addEventListener("click", () => handleSliderMove(index));
});

//
