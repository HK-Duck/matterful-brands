const slider = document.querySelector('.slider');
const range = document.querySelector('.slider__range-js');
range.addEventListener('input', () => {
    slider.style.setProperty('--value', range.value + '%');
});


const sliderSeven = document.querySelector('.slider-seven');
const rangeSeven = document.querySelector('.slider__range-js7');
rangeSeven.addEventListener('input', () => {
    sliderSeven.style.setProperty('--value', rangeSeven.value + '%');
});