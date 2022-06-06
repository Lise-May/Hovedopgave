//adgang til hamburger og nav-menu class
const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu");

//add en event lisenter til hamburger
hamburger.addEventListener("click", () => { //activer classen der ændre mine bar til et X og den class der viser menuen
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/*//Søger for at min nav lukker sig og bliver "normal" når man klikker på et link. 
document.querySelectorAll(".nav-link").forEach(n => n. //add en eventlistener
    addEventListener("click", () => { //click event, der vil fjerne active class
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})) */

//dropdown content på tlf. og tablet
const buttons = Array.from(document.querySelectorAll(".dropbtn"));
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle('show_drop_menu')
  });
});

//Skift farve på knapperne
let btns = document.querySelectorAll(".most_sold_btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active_btn");
  current[0].className = current[0].className.replace(" active_btn", "");
  this.className += " active_btn";
  });
}

//Top 4 mest solgte produkter
const top_sold_product_btn = () =>{
    let x = document.getElementById("indor_product");
    let y = document.getElementById("outdor_product");
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

// Til top knap

//få knappen
var mybutton = document.getElementById("myBtn");

// Når man klikker på knappen så ruller den til toppen
function topFunction() {
  document.body.scrollTop = 0; //så den virker i safari
  document.documentElement.scrollTop = 0; //så jeg er sikker på at den virker i chrome
}