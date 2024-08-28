import { gsap } from "gsap";

class Loader {
    constructor() {
        this.loader = document.querySelector('.cb-loader');
        this.loaderFill = document.querySelector('.cb-loader-fill');
        this.loaderBackdrop = document.querySelector('.cb-loader-backdrop');
    }
    showLoader() {
        const tl = gsap.timeline();
        tl.set(this.loader, { display: "block", pointerEvents: "auto" })
        .set(this.loaderFill, { opacity: 1 })
          //.fromTo(this.loaderBackdrop, { opacity: 0 }, { opacity: 1 }, 0)
        .fromTo(this.loaderFill, 
                { scaleY: 0, transformOrigin: "bottom bottom" }, 
                { scaleY: 1, transformOrigin: "bottom bottom", duration: 0.7, ease: "power4.inOut", immediateRender: false }, 
                0);
        return tl;
    }

    hideLoader() {
        const tl = gsap.timeline();
        tl.set(this.loader, { pointerEvents: "none" }, 0)
            .set(this.loaderBackdrop, { opacity: 0 }, 0)
            .to(this.loaderFill, { opacity: 0, duration: 0.4 }, 0)
            .set(this.loader, { display: "none" });
        return tl;
    }
}

export default Loader