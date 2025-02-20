export function cursor() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const customCursor = document.getElementById("custom-cursor");
    const cursorDelay = 10;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    customCursor.style.left = windowWidth / 2 + "px";
    customCursor.style.top = windowHeight / 2 + "px";

    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      setTimeout(() => {
        customCursor.style.left = cursorX + "px";
        customCursor.style.top = cursorY + "px";
      }, cursorDelay);
    });

    document.addEventListener("mouseenter", () => {
      customCursor.style.opacity = 1;
    });

    document.addEventListener("mouseleave", () => {
      customCursor.style.opacity = 1;
    });

    const linksAndButtons = document.querySelectorAll(
      "a, button, .floorplans__img-thumb"
    );

    linksAndButtons.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        customCursor.style.transition = "transform 0.2s ease-in-out";
        customCursor.style.transform = "translate(-50%, -50%) scale(2.5)";
        customCursor.style.backgroundColor = "rgba(217, 217, 217, 0.50)";
        customCursor.style.border = "0.5px solid transparent";
      });

      element.addEventListener("mouseleave", () => {
        customCursor.style.transition = "transform 0.2s ease-in-out";
        customCursor.style.transform = "translate(-50%, -50%) scale(1)";
        customCursor.style.backgroundColor = "transparent";
        customCursor.style.border = "0.5px solid #fff";
      });
    });
  }
}
