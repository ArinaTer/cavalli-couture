export function titleAnim() {

  SMinit();

  function SMinit() {
    gsap.utils.toArray(".split-title").forEach(SMcreateTrigger);
  }
  
  function SMcreateTrigger(el) {
    let SMtext = gsap.utils.toArray(".split-title-box", el);
  
    let lines = new SplitText(SMtext, { type: "lines", linesClass: "line" });
    let wrapLines = new SplitText(SMtext, {
      type: "lines",
      linesClass: "line-wrapper",
    });
    let initted, finished;
  
    SMsetup();
  
    function SMsetup() {
      // if (finished) {
      //   return;
      // }
      // if (initted) {
      //   gsap
      //     .getTweensOf(lines.lines)
      //     .forEach((anim) => anim.progress(0).kill());
      //   wrapLines.revert();
      //   lines.revert();
      //   lines.split();
      //   wrapLines.split();
      // } else {
      //   ScrollTrigger.addEventListener("refreshInit", SMsetup);
      //   initted = true;
      // }
  
      lines.lines.forEach((line, i) => {

        let xPercent = i % 2 === 0 ? 10 : -10;
        gsap.set(line, { xPercent: xPercent });

        let chars = new SplitText(line, { type: "chars", charsClass: "char" });
  

        chars.chars.forEach((char, j) => {
          let delay = j * 0.06;
          let xOffset = i % 2 === 0 ? 50 : -50;
          gsap.fromTo(
            char,
            { xPercent: xOffset, opacity: 0, },
            {
              xPercent: 0,
              opacity: 1,
              duration: 3,
              ease: "back.out(0.5)",
              delay: delay,
              scrollTrigger: {
                trigger: line,
                start: "top bottom",
                // markers: true,
              },
            }
          );
        });
  
        gsap.to(line, {
          xPercent: 0,
          stagger: 0.1,
          opacity: 1,
          duration: 3,
          ease: "back.out(0.5)",

          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            // markers: true,
          },
          
          // onComplete: () => {
          //   finished = i === lines.lines.length - 1;
          //   if (finished) {
          //   wrapLines.revert();
          //   lines.revert();
          //   ScrollTrigger.removeEventListener("refreshInit", SMsetup);
          //   }
          // },
        });

      });
    }
  }
}

export function textAnim() {
  SMinit();

  function SMinit() {
    gsap.utils.toArray(".split-text").forEach(SMcreateTrigger);
  }

  function SMcreateTrigger(el) {
    let SMtext = gsap.utils.toArray(".split-text-box", el);

    let lines = new SplitText(SMtext, { type: "lines", linesClass: "line" });
    let wrapLines = new SplitText(SMtext, {
      type: "lines",
      linesClass: "line-wrapper",
    });
    let initted, finished;

    SMsetup();

    function SMsetup() {
      if (finished) {
        return;
      }
      if (initted) {
        gsap
          .getTweensOf(lines.lines)
          .forEach((anim) => anim.progress(0).kill());
        wrapLines.revert();
        lines.revert();
        lines.split();
        wrapLines.split();
      } else {
        ScrollTrigger.addEventListener("refreshInit", SMsetup);
        initted = true;
      }

      gsap.set(lines.lines, { yPercent: 100, opacity: 0, duration: 1, });

      lines.lines.forEach((line, i) => {
        gsap.to(line, {
          yPercent: 0,
          stagger: 10,
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            // markers: true
          },
          onComplete: () => {
            finished = i === lines.lines.length - 1;
            if (finished) {
              wrapLines.revert();
              lines.revert();
              ScrollTrigger.removeEventListener("refreshInit", SMsetup);
            }
          },
        });
      });
    }
  }
}
