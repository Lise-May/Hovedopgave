//adgang til hamburger og nav-menu class
const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu");

//add en event lisenter til hamburger
hamburger.addEventListener("click", () => { //activer classen der ændre mine bar til et X og den class der viser menuen
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Søger for at min nav lukker sig og bliver "normal" når man klikker på et link. 
document.querySelectorAll(".nav-link").forEach(n => n. //add en eventlistener
    addEventListener("click", () => { //click event, der vil fjerne active class
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})) 

//Top 4 mest solgte produkter
function top_sold_product_btn() {
    var x = document.getElementById("indor_product");
    var y = document.getElementById("outdor_product");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
    }
}

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
  