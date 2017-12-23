//$(document).ready(function(){       
//   var scroll_start = 0;
//   var startchange = $('#project-scroll');
//   var offset = startchange.offset();
//    if (startchange.length){
//   $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top) {
//        document.getElementById("nav-project-scroll").className = "navbar navbar-expand navbar-light fixed-top";
//        document.getElementById("project-back-color").className = "back-arrow project-nav-color-light";
//        document.getElementById("project-svg-color").className = "back-arrow project-nav-color-light";
//        document.getElementById("nav-title").className = "nav-item nav-link text-center project-nav-color-light";
//       }
//   });
//    }
//});
//
//$(document).ready(function(){       
//   var scroll_start = 0;
//   var startchange = $('#nav-project-title');
//   var offset = startchange.offset();
//    if (startchange.length){
//   $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top) {
//        document.getElementById("nav-project-scroll").className = "navbar navbar-expand navbar-light fixed-top bg-light";
//        document.getElementById("project-back-color").className = "back-arrow project-nav-color-dark";
//        document.getElementById("project-svg-color").className = "back-arrow project-nav-color-dark";
//        document.getElementById("nav-title").className = "nav-item nav-link text-center project-nav-color-dark";
//        
//       }
//   });
//    }
//});

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
        document.getElementById("project-back-color").className = "back-arrow project-nav-color-light";
        document.getElementById("project-svg-color").className = "back-arrow project-nav-color-light";
        $("#project-svg-color").removeClass('project-nav-color-dark').addClass('project-nav-color-light');
        $("#nav-title").removeClass('project-nav-color-dark').addClass('project-nav-color-light');
	  }
  })
})