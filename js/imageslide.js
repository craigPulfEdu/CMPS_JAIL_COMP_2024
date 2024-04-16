//slide show js

// dom listener ensures page is loaded before showslides function is called
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    //console.log("Number of slides:", slides.length);
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;
    //console.log("Current slide index:", slideIndex);

    if (slideIndex > slides.length) {
      slideIndex = 1;
      //console.log("Resetting slide index to 1");
    }    

    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000);
  }

});