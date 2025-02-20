export function gallery() {
  
  Fancybox.bind("[data-fancybox]", {});



  (function gsapMatchMedia() {
    let mmGallery = gsap.matchMedia();

    const items = document.querySelectorAll(".gallery__col");

    items.forEach(function (item) {
      let tlGallery = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom top",
          scrub: 2,
        },
      });

      let startY = parseFloat(item.getAttribute("data-start-y"));
      let endY = parseFloat(item.getAttribute("data-end-y"));
      tlGallery.from(item, {
        y: startY,
        duration: 2,
      });
      tlGallery.to(item, {
        y: endY,
        duration: 2,
      });

      const mediaQuery = window.matchMedia("(max-width: 320px)");

      const handleResize = function (event) {
        if (event.matches) {
          tlGallery.clear();
          gsap.set(item, {
            clearProps: "all",
          });
        } else {
          tlGallery.to(item, {
            y: endY,
            duration: 2,
          });
        }
      };

      mediaQuery.addListener(handleResize);

      handleResize(mediaQuery);
    });

    mmGallery.add("(max-width: 2500px) and (min-width: 993px)", () => {});
    mmGallery.add("(max-width: 992px) and (min-width: 577px)", () => {});
    mmGallery.add("(max-width: 576px) and (min-width: 320px)", () => {});
  })();
}
