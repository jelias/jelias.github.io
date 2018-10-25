// document.addEventListener("load", switchImage(1));

function switchImage(i) {
  var listElement = document.getElementsByClassName("project-link");
  for(var l=0; l<listElement.length; l++) {
    listElement[l].classList.remove("hover");
  }

  document.getElementById(i + "_order").classList.add("hover");

  var elements = document.getElementsByClassName("rightImage");
  for(var x=0; x<elements.length; x++) {
    elements[x].style.visibility = "hidden"
  }
  document.getElementById(i).style.visibility = "visible";
}
