window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
  vph = $(window).height();
  heightFooter = $('#wrapper-footer').height();
  heightauto = vph - (heightFooter);
  $('#wrapper-login').css({'height': heightauto + 'px'});
}