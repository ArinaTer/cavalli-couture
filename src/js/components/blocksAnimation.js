export function blockAnimation() {
    (function gsapMatchMedia() {
        let mmBlockAnim = gsap.matchMedia();
    
        mmBlockAnim.add("(max-width: 2500px) and (min-width: 993px)", () => {
          const tlAnimTop = gsap.utils.toArray(".gsap-bottom");
          tlAnimTop.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 50,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
    
          const tlAnimLeft = gsap.utils.toArray(".gsap-left");
          tlAnimLeft.forEach((elem) => {
            gsap.from(elem, {
              xPercent: -50,
              duration: 1,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
          const tlAnimRight = gsap.utils.toArray(".gsap-right");
          tlAnimRight.forEach((elem) => {
            gsap.from(elem, {
              xPercent: 50,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
        });
        mmBlockAnim.add("(max-width: 992px) and (min-width: 577px)", () => {
          const tlAnimTop = gsap.utils.toArray(".gsap-bottom");
          tlAnimTop.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 50,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
    
          const tlAnimLeft = gsap.utils.toArray(".gsap-left");
          tlAnimLeft.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 50,
              duration: 1,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
          const tlAnimRight = gsap.utils.toArray(".gsap-right");
          tlAnimRight.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 50,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
        });
        mmBlockAnim.add("(max-width: 576px) and (min-width: 320px)", () => {
          const tlAnimTop = gsap.utils.toArray(".gsap-bottom");
          tlAnimTop.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 30,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
    
          const tlAnimLeft = gsap.utils.toArray(".gsap-left");
          tlAnimLeft.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 30,
              duration: 1,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
          const tlAnimRight = gsap.utils.toArray(".gsap-right");
          tlAnimRight.forEach((elem) => {
            gsap.from(elem, {
              yPercent: 30,
              duration: 1,
              opacity: 0,
              scrollTrigger: {
                trigger: elem,
              },
            });
          });
        });
      })();
  }