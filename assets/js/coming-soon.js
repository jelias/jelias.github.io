myFunction();
window.addEventListener("resize", myFunction);

function myFunction() {
    var width = window.innerWidth || document.body.clientWidth

    if (width <= 950) {
      document.getElementById("main-page").style.display = "none";
      document.getElementById("coming-soon").style.display = "inline-block";
    } else {
        document.getElementById("main-page").style.display = "inherit";
        document.getElementById("coming-soon").style.display = "none";
    }
}
