export function footer() {
  (function gsapMatchMedia() {
    let mmDeveloper = gsap.matchMedia();

    // function getSamePageAnchor(link) {
    //   if (
    //     link.protocol !== window.location.protocol ||
    //     link.host !== window.location.host ||
    //     link.pathname !== window.location.pathname ||
    //     link.search !== window.location.search
    //   ) {
    //     return false;
    //   }

    //   return link.hash;
    // }
    // function scrollToHash(hash, e) {
    //   const elem = hash ? document.querySelector(hash) : false;
    //   if (elem) {
    //     if (e) e.preventDefault();
    //     gsap.to(window, { duration: 0, scrollTo: elem, ease: "power2" });
    //   }
    // }
    // document.querySelectorAll(".footer__item-link").forEach((a) => {
    //   a.addEventListener("click", (e) => {
    //     scrollToHash(getSamePageAnchor(a), e);
    //   });
    // });

    // document.querySelectorAll(".footer__item-link").forEach((a) => {
    //   a.addEventListener("click", (e) => {
    //     toggleMenu();
    //   });
    // });

    scrollToHash(window.location.hash);


  })();
}
