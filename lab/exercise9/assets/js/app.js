function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

var w = today.getSeconds();

$(".water").css({"height": w + "vh"});

var f = today.getHours();

if (f <= 8) {
  $('.cls-2').css("fill",'blue');
  } else if (f <= 16) {
    $('.cls-2').css("fill",'red');
  } else if (f <= 24) {
    $('.cls-2').css("fill",'purple');
}