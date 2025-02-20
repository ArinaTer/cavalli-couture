export function payment() {

    // const circleBlack = document.querySelector(".payment__circle-bg");
    // const dataPercentage = parseFloat(circleBlack.getAttribute("data-black"));
    
    // if (!isNaN(dataPercentage) && dataPercentage >= 0 && dataPercentage <= 100) {
    //     const clipPercentage = dataPercentage; // Используйте значение data-black напрямую
    //     circleBlack.style.clipPath = `polygon(0 0, ${clipPercentage}% 0, ${clipPercentage}% 100%, 0 100%)`;
        
    //     console.log(`Круг заполнен на ${dataPercentage}%`);
    // }

    (function gsapMatchMedia() {
        let mmPayment = gsap.matchMedia();
        let tlPayment = gsap.timeline({
            scrollTrigger: {
              trigger: ".payment",
              start: "top 30%",
              end: "bottom bottom",
            //   scrub: true,
            //   markers: true,
            },
          });

          tlPayment.to(".payment__circle-black", {
            clipPath: "polygon(0% 0%, 40% 0%, 40% 100%, 0% 100%)",
            duration: 0.1,
          });

          tlPayment.from(".payment__circle-left .payment__percent", {
            yPercent: 10,
            duration: 1,
          });

          tlPayment.from(".payment__circle-right .payment__percent", {
            yPercent: 10,
            duration: 1,
          }, "<");

        mmPayment.add("(max-width: 2500px) and (min-width: 993px)", () => {});
        mmPayment.add("(max-width: 992px) and (min-width: 577px)", () => {});
        mmPayment.add("(max-width: 576px) and (min-width: 320px)", () => {});
      })();
}