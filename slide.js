var slideIndex = 0;
var lastSlide;

window.onload = showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.zIndex = "1";
    setTimeout(showSlides, 3000); // Timer

    var idxToHide = slideIndex-3;
    if(idxToHide < 0){
        idxToHide = slides.length + idxToHide;
    }
    slides[idxToHide].style.display = "none";
    
    if(slideIndex == 1){
        console.log(slides.length)
        slides[slides.length-1].style.zIndex = "0";
    }
}