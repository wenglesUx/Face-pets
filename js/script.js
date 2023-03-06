const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slidePosition = 0;

prevButton.addEventListener("click",prevSlide) 
  function nextSlide(){
    if (slidePosition === 0) {
        slidePosition = slides.length - 1;
      } else {
        slidePosition--;
      }
      atualizarSlider();
  }

nextButton.addEventListener("click", nextSlide)
function prevSlide(){
    if (slidePosition === slides.length - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    atualizarSlider();

}

function atualizarSlider() {
  sliderWrapper.style.transform = `translateX(-${slidePosition * 100}%)`;
}
slides[0].classList.add("active");


let timerslide = setInterval(atua,5000)
function atua(){
 prevSlide()
    
}
