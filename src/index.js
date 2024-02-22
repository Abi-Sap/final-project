// Automatic Slideshow - change image every 3 seconds
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Function to move slides manually
function plusSlides(n) {
  slideIndex += n;
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Dropdown menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function collectInformation() {
  // Collect information from the form
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
  var occupation = document.getElementById('occupation').value;
  var location = document.getElementById('location').value;

  // Display the collected information using an alert
  alert(`Thank you ${name}, we appreciate your kind gestures, we will revert through your email ${email} and communicate how to support`)
}

function collectInformations() {
  // Collect information from the form
  var name = document.getElementById('names').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('emails').value;
  var occupation = document.getElementById('occupation').value;
  var location = document.getElementById('location').value;

  // Display the collected information using an alert
  alert(`Thank you ${name}, we will revert through your email ${email}`)
}





// //static navbar
// window.addEventListener("scroll", function() {
//   var navbar = document.getElementById("navbar");
//   var headerHeight = document.querySelector('header').offsetHeight;

//   if (window.pageYOffset > headerHeight) {
//       navbar.classList.add("fixed");
//   } else {
//       navbar.classList.remove("fixed");
//   }
// });