// get all required html data for manupulation
const openBtn = document.querySelector('[data-open]')
const closeBtn = document.querySelector('[data-close]')
const prevBtn = document.querySelector('[data-prev]')
const nextBtn = document.querySelector('[data-next]')
const overlay = document.querySelector('[data-overlay]')
const homeBg = document.querySelector('[data-homeimage]')

// for mobile menu toggle
openBtn.addEventListener('click', () => {
    overlay.style.setProperty('display', 'flex')
})
closeBtn.addEventListener('click', () => {
    overlay.style.setProperty('display', 'none')
})
// for swiping home images
let clickCount = 0
const imageArr = [
    'images/desktop-image-hero-1.jpg',
    'images/desktop-image-hero-2.jpg',
    'images/desktop-image-hero-3.jpg'
]
// adding event listener to next button
nextBtn.addEventListener('click', () => {
    clickCount++
    if(clickCount === 1 || clickCount === 2) {
        homeBg.setAttribute('src', imageArr[clickCount])
    } else {
        clickCount = 0
        homeBg.setAttribute('src', imageArr[clickCount])
    }
})
// adding event listener to previous button
prevBtn.addEventListener('click', () => {
    clickCount--
    if(clickCount === 0 || clickCount === 1) {
        homeBg.setAttribute('src', imageArr[clickCount])
    } else {
        clickCount = 2
        homeBg.setAttribute('src', imageArr[clickCount])
    }
})