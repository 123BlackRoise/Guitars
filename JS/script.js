let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.opacity = '1';
    slides[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 6000); // Зміна зображення кожні 5 секунд
}
