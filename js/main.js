document.getElementById("nav-btn").addEventListener("click", () => {
  const navigation = document.getElementById("navigation");
  const navBtnImg = document.getElementById("nav-btn-img");
  navigation.classList.toggle("open");
  document.body.classList.toggle("scroll-lock");
  if (navigation.classList.contains("open")) {
    navBtnImg.src = "images/icon-close.svg";
  } else {
    navBtnImg.src = "images/icon-hamburger.svg";
  }
});
