// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

// MENU hamburger
function showBurger(id1, id2) {
  var x = document.getElementById(id1);
  var y = document.getElementById(id2);
  var about = document.getElementById("about");
  var services = document.getElementById("services");
  var clients = document.getElementById("clients");
  var talk = document.getElementById("talk");
  var footer = document.getElementById("footer")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "/images/svg/bars-solid.svg";
    about.style.display = "block";
    services.style.display = "grid";
    clients.style.display = "block";
    talk.style.display = "block";
    footer.style.display = "block";
  } else {
    x.style.display = "block";
    y.src = "/images/svg/times-solid.svg"
    about.style.display = "none";
    services.style.display = "none";
    clients.style.display = "none";
    talk.style.display = "none";
    footer.style.display = "none";
  }
}

// Header image selection
function imgChange(){
  var x = document.getElementById('img_city');
  var y0 = document.getElementById('client-2');
  var y1 = document.getElementById('client-21');
  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280){
    x.src = "/images/house-desktop.png";
    y0.style.display = "block";
    y1.style.display = "none";
  } else if (document.documentElement.clientWidth < 768){
    x.src = "/images/house-mobile.png";
    y0.style.display = "none";
    y1.style.display = "block";
  } else {
    x.src = "/images/house-desktop-3.png";
    y0.style.display = "block";
    y1.style.display = "none";
  };
}

// Open services list
function openService(clas1, clas2) {
  var parent = document.getElementById(clas1);
  var child = document.getElementById(clas2);

  if (child.style.display === "none") {
    child.style.display = "block";
    if (document.documentElement.clientWidth >= 768){
      parent.style.height = "340px";
    } else if (document.documentElement.clientWidth < 768){
      parent.style.height = "300px";
    };
  } else {
    if (document.documentElement.clientWidth >= 1280){
      parent.style.height = "140px";
    } else if (document.documentElement.clientWidth < 1280){
      parent.style.height = "125px";
    };
    child.style.display = "none";
  };
}





