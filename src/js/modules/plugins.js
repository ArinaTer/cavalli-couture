import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";
import { SplitText } from "gsap/SplitText.js";
import SmoothScroll from "smoothscroll-for-websites";

// import Splitting from "splitting";
import Swiper, { Autoplay, Pagination, EffectFade, Navigation, Thumbs, Controller } from "swiper";
import { Fancybox } from "@fancyapps/ui";

export function plugins() {
	window.SmoothScroll = SmoothScroll;
	window.gsap = gsap;
	window.ScrollTrigger = ScrollTrigger;
	window.ScrollToPlugin = ScrollToPlugin;
	window.CSSRulePlugin = CSSRulePlugin;
	window.SplitText = SplitText;
	window.Fancybox = Fancybox;
	// window.Splitting = Splitting;
	window.Swiper = Swiper;
	window.Navigation = Navigation;
	window.Autoplay = Autoplay;
	window.Pagination = Pagination;
	window.EffectFade = EffectFade;
	window.Thumbs = Thumbs;
	window.Controller = Controller;
}
