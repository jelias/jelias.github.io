let scrollpos = window.scrollY
const arrow = document.querySelector(".arrow")


const add_class_on_scroll = () => arrow.classList.add("fade")
const remove_class_on_scroll = () => arrow.classList.remove("fade")


window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= 20) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})
