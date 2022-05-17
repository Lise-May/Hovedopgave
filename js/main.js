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
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}
  