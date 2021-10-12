window.onscroll = function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("fixed-navbar", window.scrollY > 0);

  if (window.scrollY > 0) {
    document
      .querySelectorAll("header .navbar .navbar-nav .nav-item .nav-link")
      .forEach((e) => {
        e.style.color = "#fff";
        e.onmouseover = () => {
          e.style.color = "#fff";
          e.style.borderBottom = "2px solid #fff";
          e.style.transition = "0.6s";
        };
        e.onmouseout = () => {
          e.style.color = "#fff";
          e.style.transition = "0.6s";
          e.style.borderBottom = "0px";
        };
      });

    document.querySelector(
      "header .navbar .navbar-nav .nav-item .active"
    ).style.borderBottom = "0";

    document.querySelector("header .navbar .navbar-brand h1").style.color =
      "#fff";
    document.querySelector("header .navbar .navbar-brand h1 span").style.color =
      "#fff";
  } else {
    document
      .querySelectorAll("header .navbar .navbar-nav .nav-item .nav-link")
      .forEach((e) => {
        e.style.color = "#00318b";
        e.onmouseover = () => {
          e.style.color = "#00318b";
          e.style.borderBottom = "2px solid #fff";
          e.style.transition = "0.6s";
        };
        e.onmouseout = () => {
          e.style.transition = "0.6s";
          e.style.color = "#00318b";
          e.style.borderBottom = "0px";
        };
      });
    document.querySelector(
      "header .navbar .navbar-nav .nav-item .active"
    ).style.borderBottom = "2px solid #00318b";
    
    document.querySelector("header .navbar .navbar-brand h1").style.color =
      "#00318b";
    document.querySelector("header .navbar .navbar-brand h1 span").style.color =
      "#0089d9";
  }
};
