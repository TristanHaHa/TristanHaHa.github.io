function animate() {
  var elem = document.getElementById('header-text');
  elem.style.left = "2500px";
  var timer = setInterval(function() {
    elem.style.left = parseInt(elem.style.left) - 25 + 'px';
    if (elem.style.left == "0px") {
      clearInterval(timer);
      return;
    }
  } , 5);
}

window.onload = animate;
