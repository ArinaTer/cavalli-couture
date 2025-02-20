export function brochure() {
    const text = [...document.querySelectorAll("[data-splitting][data-unlock]")];
    gsap.set(".brochure__left_img", {scale: 0.9});
    gsap.set(".brochure__bg", {clipPath: "circle(100% at 50% 50%)"});
    gsap.set(".brochure__left_text .word .char", {opacity: 0, xPercent: -50});
    gsap.set(".brochure__left_back", {opacity: 0});
    let mm = gsap.matchMedia();

    const textAnim = () => {
        text.forEach((title) => {
            const words = title.querySelectorAll(".word");
            words.forEach((word) => {
               const chars = word.querySelectorAll(".char");
    
                chars.forEach((char, j) => {
                    let delay = j * 0.06;
                    
                    gsap.to(
                      char,
                    //   { xPercent: -50, opacity: 0, },
                      {
                        xPercent: 0,
                        opacity: 1,
                        duration: 3,
                        ease: "back.out(0.5)",
                        delay: delay,
                        // scrollTrigger: {
                        //   trigger: line,
                        //   start: "top bottom",
                        //   // markers: true,
                        // },
                      }
                    );
                  });
            })
           })
        
    }

    mm.add("(min-width: 768px)", () => { 
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brochure',
                start: "+=40% bottom",
                end: "+=90% top",
                scrub: 2,
                // markers: true
            }
        })
        .to(".brochure__bg", {
            clipPath: "circle(0% at 50% 50%)",
            duration: 2,
            ease: "power1.out"
        })
    
        .to(".brochure__left_img", {
            scale: 1
        }, "<")
        .add(textAnim, "<")
        .to(".brochure__left_img", {
            opacity: 0,
            duration: 0.5
        })
        .to(".brochure__left_text", {
            opacity: 0,
            duration: 0.5
        }, "<")
        .to(".brochure__left_back", {
            opacity: 1,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            duration: 0.5,
            ease: "power1.out"
        }, "<+=25%")
        .to(".brochure__left", {
            transform: "translateX(0%)",
            duration: 0.5,
            ease: "power1.out"
        }, "<")
        .to(".brochure__right", {
            opacity: 1
        }, "<+=10%")
    })

    mm.add("(max-width: 769px)", () => { 
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brochure',
                start: "top+=700px bottom",
                end: "top+=700px top",
                scrub: true,
                // markers: true
            }
        })
        .to(".brochure__bg", {
            clipPath: "circle(0% at 50% 50%)"
        })
    
        .to(".brochure__left_img", {
            scale: 1
        }, "<")
        .add(textAnim, "<")
        .to(".brochure__left_img", {
            opacity: 0,
            duration: 0.2
        })
        .to(".brochure__left_text", {
            opacity: 0,
            duration: 0.2
        }, "<")
        .to(".brochure__left_back",
          // {transform: "translateX()"},
           {
            opacity: 1,
            // top: '0%',
            // transform: 'translateY(-50%)'
        }, "<+=25%")
        .fromTo(".brochure__left",
          { x: '0', y: '26vh'},
           {
            y: '2vh'
        }, "<")
        .to(".brochure__right", {
            opacity: 1
        }, "<+=10%")
    })



}