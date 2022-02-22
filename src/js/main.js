(function(){
  const NavigatePanel = document.querySelector('nav.nav')
  const sticky = NavigatePanel.offsetTop;
  const hamburgerBtn = document.querySelector("nav .nav__hamburger-btn")
  
  window.onscroll = () => myFunction();
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      NavigatePanel.classList.add("sticky");
    } else {
      NavigatePanel.classList.remove("sticky");
    }
  }

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
  })
})()