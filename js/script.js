
const mobileBtn = document.querySelector('#menu-mobile')
const mobilemenu = document.querySelector('nav')
const openIcon = document.querySelector('#menu-mb')
const closeIcon = document.querySelector('#menu-close')

const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dot = document.querySelector("#dot");
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


let timerslide = setInterval(atua,3000)
function atua(){
 prevSlide()
    
}

mobileBtn.addEventListener('click',menuInteraction)

function menuInteraction(){
mobilemenu.classList.toggle('activedt')
if(mobilemenu.classList.contains('activedt') == true){
  openIcon.style.opacity = '0'
  closeIcon.style.opacity = '1'
}else{
  openIcon.style.opacity = ''
  closeIcon.style.opacity = ''
}
}