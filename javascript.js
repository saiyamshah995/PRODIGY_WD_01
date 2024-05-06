document.querySelector('.humbutton').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  
  
  
  
  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("side-bar").style.left = "2%"
      document.getElementById("up-btn").style.bottom = "20px"
    } else {
      document.getElementById("navbar").style.top = "-70px";
      document.getElementById("side-bar").style.left = "-5%"
      document.getElementById("up-btn").style.bottom = "-50px"
    }
    prevScrollpos = currentScrollPos;
  }
  
  
  window.addEventListener('load', function() {
    var container = document.getElementById('main-display');
    container.classList.remove('hidden'); // Remove the 'hidden' class to reveal the container smoothly
  });
  
  
  window.onload = function() {
    alert('For better experience use desktop or desktop mode in phone.');
  };