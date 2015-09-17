var projects = function(){
  $('.procontent').hide();

  $('.proitem').click(function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
      $('.procontent').hide();
    } else {
      $('.proitem').removeClass('selected');
      $('.procontent').hide();

      $(this).addClass('selected');
      $(this).next('.procontent').show();
    }
  });
};

window.derbeready(projects);
