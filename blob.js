$("html").mousemove(function(event) {
  var eye = $(".blob-eye");
  var x = (eye.offset().left) + (eye.width() / 1);
  var y = (eye.offset().top) + (eye.height() / 1);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});
