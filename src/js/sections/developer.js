export function developer() {
  (function gsapMatchMedia() {
    let mmDeveloper = gsap.matchMedia();
    let tlDeveloper = gsap.timeline({
      scrollTrigger: {
        trigger: ".developer__wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true, 
      },
    });




    mmDeveloper.add("(max-width: 4000px) and (min-width: 2501px)", () => {
      tlDeveloper.to(".developer__title-img", {
        duration: 3,
        yPercent: 0,
        left: "65%",
        height: "70%",
        maxWidth: "20%",
        ease: "back.out(0.5)",
      });

      tlDeveloper.from(
        ".developer__title-first",
        {
          xPercent: -100,
          opacity: 0,
          duration: 3,
          ease: "back.out(0.5)",
        },
        "0.7"
      );

      tlDeveloper.from(
        ".developer__title-second",
        {
          xPercent: 100,
          opacity: 0,
          duration: 3,
          ease: "back.out(0.5)",
        },
        "<"
      );

      tlDeveloper.from(".developer__row", {
        yPercent: 100,
        opacity: 0,
        duration: 3,
        ease: "back.out(0.5)",
      });


  
    });
    mmDeveloper.add("(max-width: 2500px) and (min-width: 993px)", () => {
      tlDeveloper.to(".developer__title-img", {
        duration: 3,
        yPercent: 0,
        left: "62%",
        height: "70%",
        maxWidth: "20%",
        ease: "back.out(0.5)",
      });
      tlDeveloper.from(
        ".developer__title-first",
        {
          xPercent: -100,
          opacity: 0,
          duration: 3,
          ease: "back.out(0.5)",
        },
        "0.7"
      );

      tlDeveloper.from(
        ".developer__title-second",
        {
          xPercent: 100,
          opacity: 0,
          duration: 3,
          ease: "back.out(0.5)",
        },
        "<"
      );

      tlDeveloper.from(".developer__row", {
        yPercent: 100,
        opacity: 0,
        duration: 3,
        ease: "back.out(0.5)",
      });


  
    });

    mmDeveloper.add("(max-width: 576px) and (min-width: 320px)", () => {});
  })();
}
