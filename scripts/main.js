function animate() {
  var elem = document.getElementById('header-text');
  elem.style.left = "2000px";
  var start = Date.now();
  var timer = setInterval(function() {
    var timePassed = Date.now() - start;
    elem.style.left = parseInt(elem.style.left) - 20 + 'px';
    if (timePassed >= 500) {
      clearInterval(timer);
      return;
    }
  } , 5);
}

window.onload = animate;
