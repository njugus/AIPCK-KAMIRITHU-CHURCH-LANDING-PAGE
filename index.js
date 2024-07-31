let slideIndex = 0;
const slideShows = () => {
    let slides = document.getElementsByClassName("slide");
    //the for loop iterates over all the elemets in the slides array and sets their display property to none
    for(i = 0;i < slides.length;i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex >= slides.length) {slideIndex = 0}
    slides[slideIndex].style.display = "block";
    setTimeout(slideShows, 5000);
}
slideShows();