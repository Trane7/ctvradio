// Cards Wiggle Animation
var cards = document.querySelectorAll(".card"), i;

for (i = 0; i < cards.length; i++) {
  wiggle(cards[i])
  
};

function wiggle (card){
  card.addEventListener('mousemove', function (e) {
    var wh = window.innerHeight / 2,
    //ww = window.innerWidth / 2,
    offX = this.offsetLeft,
    //offY = this.offsetTop
    offW = this.offsetWidth/2;
    this.style.setProperty('--mouseX', (e.clientX - offX - offW) / 25);
    this.style.setProperty('--mouseY', (e.clientY - wh) / 25);
  
  });

card.addEventListener('mouseleave', function (e) {

  this.style.setProperty('--mouseX', 0);
  this.style.setProperty('--mouseY', 0);

});
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("mobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Carousel logic
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 


//Google Map API
// function myMap() {
//     myCenter = new google.maps.LatLng(40.7831, -73.9712);
//     var mapOptions = {
//       center: myCenter,
//       zoom: 11,
//       scrollwheel: false,
//       draggable: false,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     var map = new google.maps.Map(
//       document.getElementById("googleMap"),
//       mapOptions
//     );
  
//     var marker = new google.maps.Marker({
//       position: myCenter
//     });
//     marker.setMap(map);
//   }