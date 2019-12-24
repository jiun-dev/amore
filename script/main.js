$(document).ready(function(){
    $("#nav").mouseenter(function(){
      $("#nav_menu").stop().slideDown();
    })
    $("#nav_menu").mouseleave(function(){
      $("#nav_menu").stop().slideUp();
    })
  })