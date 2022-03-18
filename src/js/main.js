(function(){
  const NavigatePanel = document.querySelector('nav.nav')
  const sticky = NavigatePanel.offsetTop;
  const HamburgerBtn = document.querySelector("nav .nav__hamburger-btn")
  
  window.onscroll = () => myFunction();
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      NavigatePanel.classList.add("sticky");
    } else {
      NavigatePanel.classList.remove("sticky");
    }
  }

  HamburgerBtn.addEventListener('click', () => {
    HamburgerBtn.classList.toggle('active')
    document.querySelector(".nav__menu-mobile").classList.toggle('active')
  })

  let isVideoPLay = false;

  document.querySelector("body > div > main > div > sectin > div > div.video-payer").addEventListener('click', () => {
    isVideoPLay = !isVideoPLay
    console.log(isVideoPLay);

    isVideoPLay ? document.querySelector("#videoPlayer").play() : document.querySelector("#videoPlayer").pause()
    document.querySelector("body > div > main > div > sectin > div > div.video-payer > button").classList.toggle('hidden')
  })
})()