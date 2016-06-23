$("#orb").on("click",function(){
  if ($("#orb").hasClass("sun")) {
    $("#orb").removeClass("sun").addClass("moon");
    $("#sky").removeClass("stylesun").addClass("stylemoon");

  }
  else {
      $("#orb").removeClass("moon").addClass("sun");
      $("#sky").removeClass("stylemoon").addClass("stylesun");

  }
});
