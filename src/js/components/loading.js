import imagesLoaded from "imagesloaded";
export function loading() {
    const loadingSection = document.querySelector(".loading");
    const normalLetters = document.querySelectorAll(".loading__text_normal .word .char");
    const italicLeters =  document.querySelectorAll(".loading__text_italic .word .char");
    // gsap.set(document.body, {overflow: "hidden"})
    setTimeout(() => {
        normalLetters.forEach(item => {
             item.classList.add("anim")
        })
        italicLeters[0].classList.add("anim-italic")
        setTimeout(() => {
            italicLeters[1].classList.add("anim-italic")
        }, 400)
    }, 10)


    const images = document.querySelectorAll("img");
    const loader = document.querySelector("#preloader__num");
    const updateProgress = (instance) => {
    const prc = Math.round((instance.progressedCount * 100) / images.length);
    loader.innerHTML = prc + "%";
    };

    const showDemo = () => {
        setTimeout(() => {
            normalLetters.forEach((item, i) => {
                item.classList.add("top")
            })
            italicLeters[0].classList.add("top")
            setTimeout(() => {
                italicLeters[1].classList.add("top")
            }, 300)
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.body.classList.add("loaded");
                gsap.to(".loading", { autoAlpha: 0, duration: 1, onComplete: () => {
                    loadingSection.remove();
                    gsap.set(document.body, {overflow: "auto"})
                }});
            }, 1000)
        }, 1000);
    };

    setTimeout(
    () =>
        imagesLoaded(images).on("progress", updateProgress).on("always", showDemo),
    500
    );
}