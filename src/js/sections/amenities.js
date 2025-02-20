export function amenities() {
    const aboutCardsCont = document.querySelector(".amenities__right");
    const aboutCards = document.querySelectorAll(".amenities__mob");

    gsap.set(aboutCards, {scale: 0.95});
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

        mm.add('(min-height: 750px)', () => {

        })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".amenities",
                start: "top top-=200px",
                end: "bottom-=800px top",
                scrub: true,
                // markers: true
            }
        })
            .to(aboutCardsCont, {
                y: '-160vh'
            })
        
        aboutCards.forEach((item) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true
                }
            })
            .to(item, {scale: 1})
        })
    })



   mm.add("(max-width: 767px)", () => {
    aboutCards.forEach((item) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top top+=300px",
                end: "bottom top+=200px",
                scrub: true,
                // markers: true
            }
        })
        .to(item, {scale: 1})
    })
   })
}