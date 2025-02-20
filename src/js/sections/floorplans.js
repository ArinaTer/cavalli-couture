export function floorplans() {
  const sectionFloor = document.querySelector(".floorplans");
  const sectionGallery = document.querySelector(".gallery");

  ScrollTrigger.create({
    trigger: sectionFloor,
    start: "top 70%",
    end: "bottom bottom",

    onEnter: () => {
      sectionFloor.classList.add("light");
      sectionGallery.classList.add("light");
    },
    onEnterBack: () => {
      sectionFloor.classList.add("light");
      sectionGallery.classList.add("light");
    },
    onLeaveBack: () => {
      sectionFloor.classList.remove("light");
      sectionGallery.classList.remove("light");
    },
  });

  floorSwiperDesctop();
  floorSwiperMobile();

  function floorSwiperDesctop() {
    var mainSlides = document.querySelectorAll(".floorplans__swiper-body");

    mainSlides.forEach(function (mainSlide) {
      var floorThumb = mainSlide.querySelector(
        ".floorplans__swiper-thumb .swiper"
      );
      var floorMain = mainSlide.querySelector(
        ".floorplans__swiper-main .swiper"
      );

      var swiperMain = new Swiper(floorThumb, {
        modules: [Thumbs],
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
      });

      var swiperThumb = new Swiper(floorMain, {
        modules: [EffectFade, Thumbs],
        spaceBetween: 10,
        effect: "fade",
        allowTouchMove: false,
        thumbs: {
          swiper: swiperMain,
        },
      });
    });
    // Добавляем обработчик события на переключение табов
    var tabLinks = document.querySelectorAll(".floorplans__nav-link");
    tabLinks.forEach(function (tabLink) {
      tabLink.addEventListener("click", function () {
        // Задержка для переинициализации swiperMain после переключения табов
        setTimeout(function () {
          var activeTab = document.querySelector(".floorplans__tab-pan.active");
          var mainElements = activeTab.querySelectorAll(
            ".floorplans__swiper-main .swiper"
          );
          mainElements.forEach(function (mainSlider) {
            var swiperMain = new Swiper(mainSlider, {
              // Настройки Swiper для floorplans__swiper-main
              modules: [EffectFade, Thumbs],
              spaceBetween: 10,
              effect: "fade",
              allowTouchMove: false,
              thumbs: {
                swiper: swiperMain,
              },
            });
          });
        });
      });
    });
  }

  function floorSwiperMobile() {
    var tabPanes = document.querySelectorAll(".floorplans__mobile-swiper-body");

    tabPanes.forEach(function (tabPane) {
      var sliderElements = tabPane.querySelectorAll(
        ".floorplans__mobile-swiper-thumb .swiper"
      );
      var thumbElements = tabPane.querySelectorAll(
        ".floorplans__mobile-swiper-main .swiper"
      );

      sliderElements.forEach(function (slider) {
        var swiperBig = new Swiper(slider, {
          modules: [Pagination, Controller],
          spaceBetween: 10,
          slidesPerView: "auto",
          pagination: {
            el: ".floorplans__swiper-pagination.swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
        });

        thumbElements.forEach(function (thumbSlider) {
          var swiperThumbMob = new Swiper(thumbSlider, {
            modules: [EffectFade, Thumbs, Controller],
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 10,
            watchSlidesProgress: true,
            allowTouchMove: false,
            effect: "fade",
          });

          swiperBig.controller.control = swiperThumbMob;
          swiperThumbMob.controller.control = swiperBig;
        });
      });
    });

    var tabLinks = document.querySelectorAll(".floorplans__nav-link");
    tabLinks.forEach(function (tabLink) {
      tabLink.addEventListener("click", function () {
        setTimeout(function () {
          tabPanes.forEach(function (tabPane) {
            var thumbElements = tabPane.querySelectorAll(
              ".floorplans__mobile-swiper-main .swiper"
            );
            thumbElements.forEach(function (thumbSlider) {
              var swiperThumbMob = new Swiper(thumbSlider, {
                modules: [EffectFade],
                slidesPerView: "auto",
                freeMode: true,
                spaceBetween: 10,
                watchSlidesProgress: true,
                allowTouchMove: false,
                effect: "fade",
              });
            });
          });
        });
      });
    });
  }
}
