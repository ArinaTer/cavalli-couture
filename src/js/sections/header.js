export function header() {
    const menuBody = document.querySelector(".header__body");
    const menuTogglerBtn = document.querySelector(".header__toggler_btn");
    const menuLinks = document.querySelectorAll(".header__nav-link");
    const menuLinksFooter = document.querySelectorAll(".footer__item-link");


    const toggleTl = gsap.timeline({ paused: true });
    let mm = gsap.matchMedia();


    toggleTl
        .to("body", {overflow: "hidden", duration: 0})
        .to(".header__toggler", {backgroundColor: "#ECE0C6", delay: 0.05})
        .to(".header__toggler_mob_svg path", {fill: "#000"}, "<")
        .to(".header__toggler_contacts", {autoAlpha: 0}, "<")
        .to(".header__toggler-line_top", { y: 3 }, 0)
        .to(".header__toggler-line_btm", { y: -4 }, 0)
        .to(".header__toggler-line_top", { rotate: 45 }, 0.5)
        .to(".header__toggler-line_btm", { rotate: -45 }, 0.5)
        .to(".header__toggler-line", {backgroundColor: "#000"}, "<")
        .to(".header__toggler_btn_text", {scale: 0}, "<-=45%")
        .add(textChanging)
        .to(".header__toggler_btn_text", {color: "#000"}, "<")
        .to(".header__toggler_btn_text", {scale: 1}, "<+=15%")
        .from(".header__nav-link", { autoAlpha: 0, stagger: 0.05 }, 0.2)
        .from(".header__nav-item", { y: -50, stagger: 0.05, duration: 0.3 }, 0.2)
        .from(".header__right_header", { autoAlpha: 0, y: -30 }, 0.3)
        .from(".header__input_container", { autoAlpha: 0, y: -30, stagger: 0.1 }, 0.4)
        .from(".header__btn_container .button-dark", { autoAlpha: 0, y: -30 }, 0.6)
        .from(".header-contacts__item", { autoAlpha: 0, stagger: 0.1 }, 0.8);


    menuTogglerBtn.addEventListener("click", () => {
      toggleMenu();
    }
    );

    function textChanging() {
         toggleTl.reversed() 
         ? document.querySelector(".header__toggler_btn_text_close").style.display = "none" 
         : document.querySelector(".header__toggler_btn_text_close").style.display = "block" 

         toggleTl.reversed() 
         ? document.querySelector(".header__toggler_btn_text_open").style.display = "block" 
         : document.querySelector(".header__toggler_btn_text_open").style.display = "none" 
    }

    function toggleMenu() {
        toggleTl.reversed() ? toggleTl.play() : toggleTl.reverse(1);
        document.querySelector(".header").classList.toggle("open");
        document.querySelector(".header").classList.toggle("close");
        document.querySelector(".header__content").classList.toggle("open");
        document.querySelector(".header__content").classList.toggle("close");
        menuBody.classList.toggle("open");
        menuBody.classList.toggle("close");
    }

    toggleTl.reverse();
    function getSamePageAnchor(link) {
        if (
          link.protocol !== window.location.protocol ||
          link.host !== window.location.host ||
          link.pathname !== window.location.pathname ||
          link.search !== window.location.search
        ) {
          return false;
        }

        return link.hash;
      }
      function scrollToHash(hash, e) {
        const elem = hash ? document.querySelector(hash) : false;
        if (elem) {
          if (e) e.preventDefault();
          gsap.to(window, { duration: 0, scrollTo: elem, ease: "power2" });
        }
      }
      document.querySelectorAll("a[href]").forEach((a) => {
        a.addEventListener("click", (e) => {
          scrollToHash(getSamePageAnchor(a), e);
        });
      });
      scrollToHash(window.location.hash);

    menuLinks.forEach((item) => {
        item.addEventListener("click", toggleMenu);
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let id = item.getAttribute("data-anchor");
            let target = document.getElementById(id);
            localStorage.setItem("dataAnchor", id);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: `#${id}`,
                        offsetY: 0,
                        duration: 0,
                        autoKill: false,
                    },
                });
            }

        })
    })

    menuLinksFooter.forEach((item) => {
        item.addEventListener("click", menuLinksFooter);
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let id = item.getAttribute("data-anchor");
            let target = document.getElementById(id);
            localStorage.setItem("dataAnchor", id);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: `#${id}`,
                        offsetY: 0,
                        duration: 0,
                        autoKill: false,
                    },
                });
            }

        })
    })

}