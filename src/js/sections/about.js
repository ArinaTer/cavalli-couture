export function about() {
    const reqOverlay = document.querySelector('.about__overlay');
    const reqContent = document.querySelector('.about__flex');
    const reqImg = document.querySelector('.about__bg');

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => { 
        gsap.set(reqOverlay, {opacity: 0});
        gsap.set(reqContent, {transform: 'translateY(100vh)'});

        gsap.timeline({
            scrollTrigger: {
                trigger: '.about__wrapper',
                start: 'bottom bottom',
                end: 'top+=50% top',
                scrub: 3.5,
                // markers: true,
            }
        })
            .to(reqOverlay, {opacity: 0.7})
            .to(reqImg, {clipPath: 'inset(80px round 10px)', duration: 1.5, ease: "power2.inOut"}, '<')
            .to(reqContent, {transform: 'translate(0)', duration: 20, ease: "power4.out"})
    })

    mm.add("(max-width: 767px)", () => { 
        gsap.set(reqContent, {transform: "translateY(-5vh)"})
        gsap.timeline({
            scrollTrigger: {
                trigger: '.about__wrapper',
                start: 'bottom bottom',
                end: 'top+=50% top',
                scrub: 1,
                // markers: true,
            }
        })
        .to(reqContent, {transform: 'translateY(-75vh)', ease: "power1.out"})
    })
    
}