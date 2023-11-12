var prevv = document.querySelector("#prev");
var nextt = document.querySelector("#next");

const slider = document.querySelector('.slider_block');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const slides = Array.from(slider.querySelectorAll('.slider'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function ShowActive() {
    if(slideIndex<=0){
        document.getElementById("prev").classList.remove('active');
        document.getElementById("next").classList.add('active');
    }
    else if(slideIndex==1){
        document.getElementById("prev").classList.add('active');
        document.getElementById("next").classList.add('active');
    }
    else if(slideIndex>=2){
        document.getElementById("prev").classList.add('active');
        document.getElementById("next").classList.remove('active');
    }
}

function showPreviousSlide() {
    if(prevv.classList.contains("active") == true){
    slideIndex = slideIndex - 1;
    updateSlider();
    ShowActive();
}}

function showNextSlide() {
    if(nextt.classList.contains("active") == true){
    slideIndex = slideIndex + 1;
    updateSlider();
    ShowActive();
}}

function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.remove("unvisible");
      } else {
        slide.classList.add("unvisible");
      }
    });
}



var prevt = document.querySelector("#prev_test");
var nexttest = document.querySelector("#next_test");

const test = document.querySelector('.test_block');
const prevButtont = document.querySelector('#prev_test');
const nextButtont = document.querySelector('#next_test');
const tests = Array.from(test.querySelectorAll('.test_item'));
const testCount = tests.length;
let testIndex = 1;

prevButtont.addEventListener('click', showPreviousSlidetest);
nextButtont.addEventListener('click', showNextSlidetest);

function ShowActivetest() {
    if(testIndex<=0){
        document.getElementById("prev_test").classList.remove('active');
        document.getElementById("next_test").classList.add('active');
        document.getElementById("left_p").classList.add('left_p');
    }
    else if(testIndex===1){
        document.getElementById("prev_test").classList.add('active');
        document.getElementById("next_test").classList.add('active');
        document.getElementById("right_p").classList.remove('right_p');
        document.getElementById("left_p").classList.remove('left_p');
    }
    else if(testIndex>=2){
        document.getElementById("prev_test").classList.add('active');
        document.getElementById("next_test").classList.remove('active');
        document.getElementById("right_p").classList.add('right_p');
    }
}

function showPreviousSlidetest() {
    if(prevt.classList.contains("active") == true){
    testIndex = testIndex - 1;
    updateSlidertest();
    ShowActivetest();
}}

function showNextSlidetest() {
    if(nexttest.classList.contains("active") == true){
    testIndex = testIndex + 1;
    updateSlidertest();
    ShowActivetest();
}}

function updateSlidertest() {
    tests.forEach((test_it, index) => {
      if (index === testIndex) {
        test_it.classList.remove("right");
        test_it.classList.remove("left");
        test_it.classList.remove("none");
      } else if(index === testIndex-1) {
        test_it.classList.add("left");
        test_it.classList.remove("none");
      } else if(index === testIndex+1) {
        test_it.classList.add("right");
        test_it.classList.remove("none");
      } else{
        test_it.classList.add("none");
      }
    });
}