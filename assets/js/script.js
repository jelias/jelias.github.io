$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 220) {
        $("#nav-project-scroll").addClass('bg-light');
        $("#project-back-color").removeClass('project-nav-color-light').addClass('project-nav-color-dark');
        $("#project-svg-color").removeClass('project-nav-color-light').addClass('project-nav-color-dark');
        $("#nav-title").removeClass('project-nav-color-light').addClass('project-nav-color-dark');
	  }

	  else{
        $("#nav-project-scroll").removeClass('bg-light');
        document.getElementById("project-back-color").className="back-arrow project-nav-color-light";
        document.getElementById("project-svg-color").className="back-arrow project-nav-color-light";
        $("#project-svg-color").removeClass('project-nav-color-dark').addClass('project-nav-color-light');
        $("#nav-title").removeClass('project-nav-color-dark').addClass('project-nav-color-light');
	  }
  })
})