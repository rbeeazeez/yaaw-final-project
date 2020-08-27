

//Changing customer sliders
var myslide=1;
slidedisplay(myslide);

function moveSlides(n) {
  slidedisplay(myslide += n);
}
function present(n) {
  slidedisplay(myslide = n);
}
function slidedisplay(n) {
  var i;
  var slides = document.getElementsByClassName("customer");
  if (n > slides.length) {
      myslide = 1}
  if (n < 1) {
      myslide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[myslide-1].style.display = "inline";
  console.log(slides[myslide-1])
  
}
var myslide = 0;
slidedisplay();

function slidedisplay() {
  var i;
  var slides = document.getElementsByClassName("customer");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myslide++;
  if (myslide > slides.length) {
      myslide = 1}
  slides[myslide-1].style.display = "inline";
  setTimeout(slidedisplay, 3000); 
}

//Email checker

document.getElementById("emailAddress").addEventListener("blur", e => {
    const regexEmail = /.+@.+\..+/;
    let valid = "";
    if (!regexEmail.test(e.target.value)) {
      valid = "This address is not valid";
    }
    document.getElementById("emailHelp").textContent = valid;
  });
  
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  
  navBarToggle.addEventListener('click', function () {
      
      mainNav.classList.toggle('mystyle');
  });

  function showMessage(){
    alert("You have successfully subscribed!");
}

//Slide for fast food, drinks



var myslide2=1;
slidedisplay2(myslide2);

function moveSlides(n) {
  slidedisplay2(myslide2 += n);
}




function present(n) {
  slidedisplay2(myslide2 = n);
}


function slidedisplay2(n) {
  var i;
  var slides2 = document.getElementsByClassName("img-container");
  if (n > slides2.length) {
      myslide2 = 1}
  if (n < 1) {
      myslide2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  
  slides2[myslide2-1].style.display = "flex";
  console.log(slides2[myslide2-1])
  
}
