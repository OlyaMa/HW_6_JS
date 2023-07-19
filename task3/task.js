const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const slides = Array.from(slider.querySelectorAll('.slider__item'));


function getIndex() {
    return slides.findIndex(element => element.classList.contains('slider__item_active'))
}

function changeIndex(Index) {
    let activeIndex = getIndex()
    slides[activeIndex].classList.remove('slider__item_active')
    slides[Index].classList.add('slider__item_active')
    
}

nextButton.onclick = () => {
    let activeIndex = getIndex()
    if (activeIndex >= slides.length - 1) {
        activeIndex = -1
    }
    changeIndex(activeIndex + 1)
}

prevButton.onclick = () => {
    let activeIndex = getIndex()
    if (activeIndex <= 0) {
        activeIndex = slides.length
    }
    changeIndex(activeIndex - 1)
}

