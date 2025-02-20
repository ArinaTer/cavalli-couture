export function popup() {
  const closeButtons = document.querySelectorAll(".popup-close");
  const buttons = document.querySelectorAll("[data-popup]");
  const popupOverlay = document.querySelectorAll(".popup__overlay");
  const popups = document.querySelectorAll(".popup");
  let tlPopupMain;

  function gsapTimePopup() {
    let mmPopup = gsap.matchMedia();

    let tlPopupTime = gsap.timeline({
      scrollTrigger: {
        trigger: ".time-popup.popup",
      },
    });

    mmPopup.add("(max-width: 4000px) and (min-width: 2501px)", () => {
      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleX: 1,
          scaleY: 0.8,
          scale: 1,
          duration: 0.5,
        },
        0.5
      );

      tlPopupTime.to(
        ".time-popup .popup__form-wrapper",
        {
          yPercent: -40,
        },
        "<"
      );

      tlPopupTime.to(".time-popup .popup__form-wrapper", {
        yPercent: -110,
        delay: 0.5,
      });

      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleY: 1,
        },
        "<"
      );

      tlPopupTime.from(
        ".time-popup .popup__form-container",
        {
          opacity: 0,
        },
        
      );


      tlPopupTime.from(".time-popup .popup__button", {
        opacity: 0,
      });
    });

    mmPopup.add("(max-width: 2500px) and (min-width: 577px)", () => {
      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleX: 1,
          scaleY: 0.8,
          scale: 1,
          duration: 0.5,
        },
        0.5
      );

      tlPopupTime.to(
        ".time-popup .popup__form-wrapper",
        {
          yPercent: -40,
        },
        "<"
      );

      tlPopupTime.to(".time-popup .popup__form-wrapper", {
        yPercent: -110,
        delay: 0.5,
      });

      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleY: 1,
        },
        "<"
      );
      tlPopupTime.from(
        ".time-popup .popup__form-container",
        {
          opacity: 0,
        },
        
      );

      tlPopupTime.from(".time-popup .popup__button", {
        opacity: 0,
      });
    });
    mmPopup.add("(max-width: 576px) and (min-width: 320px)", () => {
      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleX: 1,
          scaleY: 0.8,
          scale: 1,
          duration: 0.5,
        },
        0.5
      );

      tlPopupTime.to(
        ".time-popup .popup__form-wrapper",
        {
          yPercent: -40,
        },
        "<"
      );

      tlPopupTime.to(".time-popup .popup__form-wrapper", {
        yPercent: -110,
        delay: 0.5,
      });

      tlPopupTime.to(
        ".time-popup .popup__row",
        {
          scaleY: 1,
        },
        "<"
      );
      tlPopupTime.from(
        ".time-popup .popup__form-container",
        {
          opacity: 0,
        },
        "<"
      );

      tlPopupTime.from(".time-popup .popup__button", {
        opacity: 0,
      });
    });
  }

  function gsapMainPopupOpen() {
    let mmPopup = gsap.matchMedia();

    let tlPopupMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-popup.popup",
      },
    });

    mmPopup.add("(max-width: 2500px) and (min-width: 993px)", () => {
      tlPopupMain.to(
        ".main-popup .popup__logo",
        {
          xPercent: 25,
          duration: 0.5,
        },
        0.5
      );

      tlPopupMain.to(
        ".main-popup .popup__even",
        {
          width: "60%",
          duration: 0.5,
        },
        "<"
      );

      tlPopupMain.to(
        ".main-popup .popup__odd",
        {
          width: "40%",
          duration: 0.5,
          opacity: 1,
        },
        "<"
      );

      tlPopupMain.to(".main-popup .popup__logo", {
        opacity: 0,
        zIndex: -1,
      });

      tlPopupMain.from(
        ".main-popup .popup__close",
        {
          opacity: 0,
          duration: 0.5,
        },
        "<"
      );
    });
    mmPopup.add("(max-width: 992px) and (min-width: 577px)", () => {});
    mmPopup.add("(max-width: 576px) and (min-width: 320px)", () => {});
  }

  function gsapMainPopupClose() {
    let mmPopup = gsap.matchMedia();

    let tlPopupMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-popup.popup",
      },
    });

    tlPopupMain.to(
      ".main-popup .popup__logo",
      {
        xPercent: -50,
        duration: 0.5,
      },
      0.5
    );

    tlPopupMain.to(
      ".main-popup .popup__even",
      {
        width: "0%",
        duration: 0.5,
      },
      "<"
    );

    tlPopupMain.to(
      ".main-popup .popup__odd",
      {
        width: "0%",
        duration: 0.5,
        opacity: 0,
      },
      "<"
    );

    tlPopupMain.to(".main-popup .popup__logo", {
      opacity: 1,
      zIndex: 6,
    });

    tlPopupMain.to(
      ".main-popup .popup__close",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    );

    mmPopup.add("(max-width: 2500px) and (min-width: 993px)", () => {});
    mmPopup.add("(max-width: 992px) and (min-width: 577px)", () => {});
    mmPopup.add("(max-width: 576px) and (min-width: 320px)", () => {});
  }

  let isPopupOpen = false;

  function close() {
    popups.forEach((popup) => {
      popup.classList.remove("active");
      document.body.style.overflowY = "auto";
      if (window.matchMedia("(min-width: 992px)").matches) {
        gsapMainPopupClose();
      }
    });

    isPopupOpen = false;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-popup");
      const popup = document.querySelector(target);

      if (!isPopupOpen) {
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
        if (window.matchMedia("(min-width: 992px)").matches) {
          gsapMainPopupOpen();
        }

        isPopupOpen = true;
      }
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      close();
    });
  });
  popupOverlay.forEach((closeOverlay) => {
    closeOverlay.addEventListener("click", () => {
      close();
    });
  });

  setTimeout(() => {

    if (!isPopupOpen) {
      const timePopup = document.querySelector("#time-popup");
      if (timePopup) {
        timePopup.classList.add("active");
        document.body.style.overflow = "hidden";
        gsapTimePopup();
      }
    }
  }, 20000);
}
