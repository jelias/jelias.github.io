document.addEventListener("load", switchImage(1)); //switchImage(1) //getImageSize()

function switchImage(i) {
  var listElement = document.getElementsByClassName("project-link");
  for (var l = 0; l < listElement.length; l++) {
    listElement[l].classList.remove("hover");
  }

  document.getElementById(i + "_order").classList.add("hover");

  var elements = document.getElementsByClassName("right-image");
  for (var x = 0; x < elements.length; x++) {
    // elements[x].style.visibility = "hidden"
    elements[x].classList.remove("hover");
  }

  document.getElementById(i).classList.add("hover");
  // document.getElementById(i).style.visibility = "visible";
}

//arrow fade

// let scrollpos = window.scrollY;
// const arrow = document.querySelector(".arrow");

// const add_class_on_scroll = () => arrow.classList.add("fade");
// const remove_class_on_scroll = () => arrow.classList.remove("fade");

// window.addEventListener("scroll", function () {
//   scrollpos = window.scrollY;

//   if (scrollpos >= 20) {
//     add_class_on_scroll();
//   } else {
//     remove_class_on_scroll();
//   }
// });

// function getImageSize() {
//   var imageGallery = document.getElementsByClassName("bigImage");
//   for (var i = 0; i < imageGallery.length; i++) {
//     var imgLink = imageGallery[i].getAttribute("href");

//     var w; // undefined var
//     var h;

//     function getSize(url) {
//       var img = new Image();
//       img.onload = function () {
//         w = this.width;
//         h = this.height;

//         for (var i = 0; i < imageGallery.length; i++) {
//           // needs to be set larger by smaller, not width X height?
//           console.log(w + "x" + h);
//           imageGallery[i].setAttribute("data-size", w + "x" + h);
//         }
//       };

//       img.src = url;
//     }

//     getSize(imgLink);
//   }
// }
