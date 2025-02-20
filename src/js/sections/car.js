export function car() {
    const carSec = document.querySelector(".car");
    const carInfo = document.querySelectorAll(".car__info");
    const carInfoLine = document.querySelectorAll(".car__item_cent_line");
    const carCircle = document.querySelectorAll(".car__item_circle");
    const carTime = document.querySelectorAll(".car__item_right")
    
    gsap.set(carInfoLine, {scaleX: 0});
    gsap.set(carCircle, {scale: 0.9});
    gsap.set(carTime, {scale: 0.9})
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => { 
        carCircle.forEach((item, i) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "-=220% top",
                    end: "bottom top",
                    // scrub: true,
                    // markers: true
                }
            })
            .to(item, {scale: 1})
            .to(carTime[i], {scale: 1}, "<")
            .to(carInfoLine[i], {scaleX: 1}, "<")
        })
    
        gsap.timeline({
            scrollTrigger: {
                trigger: ".car",
                start: "top+=1200px bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            }
        })
        .to(".car__logo_img", {
            y: '160vh'
        })
        .to(".car__logo_circle", {
            y: "140vh"
        }, "<")
        .to(".car__logo_circle", {
            scale: 5,
        }, "<")
        // .to(".car__logo_circle", {
        //     borderRadius: 0
        // }, "<+=75%")
    
        gsap.timeline({
            scrollTrigger: {
                trigger: ".car",
                start: "20% bottom",
                end: "40% bottom",
                // scrub: true,
                // markers: true,
                onLeaveBack: () => {
                    gsap.timeline()
                    .to(carSec, {backgroundColor: "#E9E4D9", duration: 0.7})
                    .to(".car__header", {color: "#000", duration: 0.7}, "<")
                    .to(".brochure", {backgroundColor: "#E9E4D9", duration: 0.7}, "<")
                },
                onEnter: () => {
                    gsap.timeline()
                    .to(carSec, {backgroundColor: "#000", duration: 0.7})
                    .to(".car__header", {color: "#fff", duration: 0.7}, "<")
                    .to(".brochure", {backgroundColor: "#000", duration: 0.7}, "<")
                }
            }
        })
        // .to(carSec, {backgroundColor: "#000", duration: 0.7})
        // .to(".brochure", {backgroundColor: "#000", duration: 0.7}, "<")
    })


    mm.add("(max-width: 769px)", () => { 
        carCircle.forEach((item, i) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "-=650% top",
                    end: "bottom top",
                    // scrub: true,
                    // markers: true
                }
            })
            .to(item, {scale: 1})
            .to(carTime[i], {scale: 1}, "<")
            .to(carInfoLine[i], {scaleX: 1}, "<")
        })
    
        gsap.timeline({
            scrollTrigger: {
                trigger: ".car",
                start: "top+=500px bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            }
        })
        .to(".car__logo_img", {
            y: '135vh'
        })
        .to(".car__logo_circle", {
            y: "140vh"
        }, "<")
        .to(".car__logo_circle", {
            scale: 5,
        }, "<")
        // .to(".car__logo_circle", {
        //     borderRadius: 0
        // }, "<+=75%")
    
        gsap.timeline({
            scrollTrigger: {
                trigger: ".car",
                start: "20% bottom",
                end: "40% bottom",
                // scrub: true,
                // markers: true,
                onLeaveBack: () => {
                    gsap.timeline()
                    .to(carSec, {backgroundColor: "#E9E4D9", duration: 0.7})
                    .to(".brochure", {backgroundColor: "#E9E4D9", duration: 0.7}, "<")
                },
                onEnter: () => {
                    gsap.timeline()
                    .to(carSec, {backgroundColor: "#000", duration: 0.7})
                    .to(".brochure", {backgroundColor: "#000", duration: 0.7}, "<")
                }
            }
        })
    })
}