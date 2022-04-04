(function () {
  // const NavigatePanel = document.querySelector("nav.nav");
  const HamburgerBtn = document.querySelector("nav .nav__hamburger-btn");

  const animatedScreen = document.querySelector(".animate-screen");
  const fishWithText1 = document.querySelector(
    ".animate-screen .fish-with-text.fish-1"
  );
  const fishWithText2 = document.querySelector(
    ".animate-screen .fish-with-text.fish-2"
  );
  const fishWithText3 = document.querySelector(
    ".animate-screen .fish-with-text.fish-3"
  );
  const fishDecor1 = document.querySelector(".fishs-extras.fishs-extras_f2");
  const fishDecor2 = document.querySelector(".fishs-extras.fishs-extras_f3");
  const fishCoralGroup = document.querySelector(
    ".fishs-extras.fishs-extras_coral-group"
  );
  const boat = document.querySelector(".boat-wrapper");

  let isVideoPLay = false;
  let windowScrollPositionY = window.scrollY;
  let userScreen = document.body.clientWidth;

  if (userScreen > 1239 && animatedScreen) {
    let animateHeaderHeight = animatedScreen.offsetHeight;

    document.addEventListener("mousemove", paralax);

    window.addEventListener("scroll", () => {
      windowScrollPositionY = window.scrollY;

      if (windowScrollPositionY < animateHeaderHeight) {
        boat.style.bottom = -windowScrollPositionY + 280 + "px";
        boat.style.right = windowScrollPositionY + 160 + "px";

        fishWithText1.style.right = windowScrollPositionY / 4 + 762 + "px";
        fishWithText1.style.bottom = -windowScrollPositionY / 4 + 422 + "px";

        fishWithText2.style.right = windowScrollPositionY / 1.5 + 214 + "px";
        fishWithText2.style.bottom = -windowScrollPositionY / 6 + 306 + "px";

        fishWithText3.style.right = windowScrollPositionY / 4 + 377 + "px";
        fishWithText3.style.bottom = -windowScrollPositionY / 5 + 55 + "px";

        fishCoralGroup.style.left = -windowScrollPositionY / 3 + 330 + "px";
        fishCoralGroup.style.bottom = windowScrollPositionY / 7 + 55 + "px";

        fishDecor1.style.left = windowScrollPositionY / 3 + 780 + "px";
        fishDecor1.style.bottom = windowScrollPositionY / 7 + 91 + "px";

        fishDecor2.style.left = -windowScrollPositionY / 3 + 780 + "px";
        fishDecor2.style.bottom = windowScrollPositionY / 7 + 222 + "px";
      }
    });
  }

  function paralax(e) {
    const positiveParalax = (element, speed, offsetScale) => {
      const x = (window.innerWidth - e.pageX * speed) / offsetScale;
      const y = (window.innerHeight - e.pageY * speed) / offsetScale;
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    const negotiveParalax = (element, speed, offsetScale) => {
      const x = (window.innerWidth + e.pageX * speed) / offsetScale;
      const y = (window.innerHeight + e.pageY * speed) / offsetScale;
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    positiveParalax(boat, 2, 40);
    negotiveParalax(fishWithText1, 2, 80);
    negotiveParalax(fishWithText2, 1, 100);
    negotiveParalax(fishWithText3, 4, 60);
  }

  if (HamburgerBtn) {
    HamburgerBtn.addEventListener("click", () => {
      HamburgerBtn.classList.toggle("active");

      if (document.querySelector(".nav__menu-mobile")) {
        document.querySelector(".nav__menu-mobile").classList.toggle("active");
      }
    });
  }

  if (document.querySelector(".video-payer")) {
    document.querySelector(".video-payer").addEventListener("click", () => {
      isVideoPLay = !isVideoPLay;
      console.log(isVideoPLay);

      isVideoPLay
        ? document.querySelector("#videoPlayer").play()
        : document.querySelector("#videoPlayer").pause();
      document
        .querySelector(
          "body > div > main > div > sectin > div > div.video-payer > button"
        )
        .classList.toggle("hidden");
    });
  }

  // GALERY
    // baguetteBox.run(".news-context__images-wrapper");

    baguetteBox.run('.news-context__images-wrapper', {
      animation: 'fadeIn',
      noScrollbars: true,
    });
  // GALERY END

  if ($("#newslist")) {
    $(".blog-card").slice(0, 6).show();

    $("#loadMore").on("click", function(e){
      e.preventDefault();

      $(".blog-card:hidden").slice(0, 6).show();

      if($(".blog-card:hidden").length == 0) {
        $("#loadMore").remove();
      }
    });
  }
})();
