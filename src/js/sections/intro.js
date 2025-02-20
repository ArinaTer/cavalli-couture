export function Intro() {
  const firstWord = [
    ...document.querySelectorAll("[data-splitting][data-first]"),
  ];
  const secWord = [...document.querySelectorAll("[data-splitting][data-sec]")];
  const mobImgs = document.querySelectorAll(".intro__mob_img");
  gsap.set(".intro__span_top", { yPercent: 60 });
  gsap.set(".intro__span_last", { yPercent: -50 });
  gsap.set(".intro__text-italic", { scaleY: 0 });
  mobImgs.forEach((item, i) => {
    gsap.set(item, {xPercent: -50, yPercent: -50, top: `${50 + (i * 3)}%`, left: `${50 + (i % 2 === 0 ? (i * 4) : (i - (i * 4)))}%`})
    gsap.set(item, {scale: 0})
  })
  let mm = gsap.matchMedia();
  gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "bottom top",
      scrub: true,
      // markers: true
    }
  })
  .to([mobImgs[0], mobImgs[2], mobImgs[4]], {
    xPercent: -30
  }, "<")
  .to([mobImgs[1], mobImgs[3], mobImgs[5]], {
    xPercent: -70
  }, "<")
  .to([mobImgs[2], mobImgs[1], mobImgs[0]], {
    yPercent: -30
  }, "<")
  .to([mobImgs[4], mobImgs[5], mobImgs[3]], {
    yPercent: -70
  }, "<")
  


  function textSlide(chars, x) {
    chars.forEach((char, j) => {
      let delay = j * 0.04;
      gsap.to(
        char,
        // {x: x, opacity: 0, },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "back.out(0.5)",
          delay: delay,
        }
      );
    });
  }

 setTimeout(() => {
  firstWord.forEach((title) => {
    const words = title.querySelectorAll(".word");
    words.forEach((word) => {
      const chars = word.querySelectorAll(".char");
      textSlide(chars, "300px")
    });
  });

  secWord.forEach((title) => {
    const words = title.querySelectorAll(".word");
    words.forEach((word) => {
      const chars = word.querySelectorAll(".char");

      // gsap.set(chars, {
      //   display: "inline-block",
      //   transform: "translateX(-200px)",
      //   opacity: 0,
      // });

      gsap
        .timeline()
        .add(textSlide(chars, "-300px"), "<")
        .to(
          ".intro__sec",
          {
            xPercent: 0,
            duration: 0.7,
          },
          "<"
        )
        .to(".intro__text-italic", {
          scaleY: 1,
          duration: 0.2,
        }, ">+=1")
        .to(
          ".intro__span_top",
          {
            ease: "back.out",
            yPercent: 0,
            duration: 0.5,
          },
          "<"
        )
        .to(
          ".intro__span_last",
          {
            ease: "back.out",
            yPercent: 0,
            duration: 0.5,
          },
          "<"
        )
        .add(mobImgsAdd)
        
    });
  });

  function mobImgsAdd() {
    mm.add("(min-width: 769px)", () => { 
      gsap.timeline()
      .to(mobImgs, {
        scale: 1,
        duration: 0.1,
        stagger: {
          each: 0.2, 
          from: "start",
          // grid: "auto",
          ease: "bounce.inOut",
        },
      })
      .add(() => {
        mobImgs.forEach((item, i) => {
          gsap.to(item, {
            top: `${i < 3 ? ((i + 1) * 10) : (i * 17)}%`,
            left: `${i === 0 ? 32 :  (i % 2 === 0 ? 15 : (85))}%`,
            duration: 1.5,
            ease: "expo.out"
          })
        })
      })
    })
    mm.add("(max-width: 768px)", () => { 
      gsap.timeline()
      .to(mobImgs, {
        scale: 1,
        duration: 0.1,
        stagger: {
          each: 0.2, 
          from: "start",
          // grid: "auto",
          ease: "bounce.inOut",
        },
      })
      .add(() => {
        mobImgs.forEach((item, i) => {
          gsap.to(item, {
            top: `${i < 3 ? ((i + 1) * 15) : (90)}%`,
            left: `${i === 0 ? 50 :  (i % 2 === 0 ? 10 : 90)}%`,
            duration: 1.5,
            ease: "expo.out"
          })
        })
      })
    })
  }
 }, 3000)
}
