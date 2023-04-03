//This function open and closes the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// --------------------- Dark Mode -------------------------

let darkMode = localStorage.getItem('darkMode'); // do we have a dark mode already set on the page? yes or no

const darkModeToggle= document.querySelector('#darkmode-toggle'); //if no, then we need to refer back to HTML and with querySelector choose the id = darkmode-toggle
//check if dark mode is enabled
//if it is enabled, we want turn it off
//if it is disabled, turn it on 

const enableDarkMode = () => {
    //1. add the class darkmode to the body
    document.body.classList.add("darkmode");
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    //1. add the class darkmode to the body
    document.body.classList.remove("darkmode");
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode");
}

darkModeToggle.addEventListener('click', () => {
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    
});


//MODAL 

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
