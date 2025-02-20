import * as flsFunctions from "./modules/functions.js";
import * as bootstrap from "bootstrap";

flsFunctions.isWebp();
import { plugins } from "./modules/plugins.js";
import "latest-createjs/lib/preloadjs/preloadjs.js";

plugins();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);

(function scroller() {
  SmoothScroll({
    animationTime: 2000,
    stepSize: 80,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
  });
})();
window.createjs = createjs;

import { cursor } from "./components/cursor.js";
import { blockAnimation } from "./components/blocksAnimation.js";
import { popup } from "./components/popup.js";
import { gallery } from "./sections/gallery.js";
import { floorplans } from "./sections/floorplans.js";
import { payment } from "./sections/payment.js";
import { developer } from "./sections/developer.js";
import Splitting from "splitting";
import { Intro } from "./sections/intro.js";
import { about } from "./sections/about.js";
import { amenities } from "./sections/amenities.js";
import { brochure } from "./sections/brochure.js";
import { car } from "./sections/car.js";
import { header } from "./sections/header.js";
import { loading } from "./components/loading.js";

cursor();
document.addEventListener("DOMContentLoaded", function () {


  blockAnimation();
  Splitting();

  loading();
  header();
  Intro();
  about();
  amenities();
  brochure();
  car();
  gallery();
  floorplans();
  payment();
  developer();
  popup();

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
});
