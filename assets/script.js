//Responsive Navbar
let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menu_icon");

menuIcon.addEventListener("click", function togglemenu(){
    menuList.classList.toggle("res_heigth");
        } );


//Slider
let prev = document.getElementById("prev");
let next = document.getElementById("next"); 
let slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}   

prev.addEventListener("click", function plusSlides(n) {
    n = -1
    showSlides(slideIndex += n);
});
next.addEventListener("click", function plusSlides(n) {
    n = 1
    showSlides(slideIndex += n);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.querySelectorAll(".dot");
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
};

