let slideIndex = 0;

function showSlide(){
    let slides = document.getElementById("slides");
    if(!slides) return;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide(){
    let total = document.querySelectorAll(".slides img").length;
    slideIndex = (slideIndex + 1) % total;
    showSlide();
}

setInterval(() =>{
    if (document.getElementById("slides")) nextSlide();
}, 3000);

`+-+`