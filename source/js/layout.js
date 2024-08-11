import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Modal from 'bootstrap/js/dist/modal';
import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


barba.init({
    transitions: [{
        name: 'transition-name',
        leave({ current, next, trigger }) {
            const done = this.async();
            setTimeout(() => {
                done();
            }, 600);
            loader.showLoader()
        },
        after({ next }) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(
                next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>'),
                'text/html'
            );
            let bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
            document.body.setAttribute('class', bodyClasses);
            scripts.init();
            loader.hideLoader()
        }
    }]
});

let scripts = {
    init: function () {
        if (document.body.classList.contains('page-template-page-home')) {
            this.homepage();
        } else if (document.body.classList.contains('single-post')) {
            this.single_post();
        }
    },
    homepage: function () {
        console.log('from home page');
        // Add homepage-specific scripts here
    },
    single_post: function () {
        console.log('from single post');
        // Add single post-specific scripts here
    }
};

let loader = {
    showLoader: function () {
        let loader=document.querySelector('.cb-loader');
        let loaderFill=document.querySelector('.cb-loader-fill');
        let loaderBackdrop=document.querySelector('.cb-loader-backdrop');
        const tl = gsap.timeline();
        tl.set(loader, { display: "block", pointerEvents: "auto" })
        .set(loaderFill, { opacity: 1 })
       // .fromTo(loaderBackdrop, { opacity: 0 }, { opacity: 1 }, 0)
        .fromTo(loaderFill, 
                { scaleY: 0, transformOrigin: "bottom bottom" }, 
                { scaleY: 1, transformOrigin: "bottom bottom", duration: 0.7, ease: "power4.inOut", immediateRender: false }, 
                0);
        return tl;
    },
    hideLoader: function () {
        let loader=document.querySelector('.cb-loader');
        let loaderFill=document.querySelector('.cb-loader-fill');
        let loaderBackdrop=document.querySelector('.cb-loader-backdrop');
        const tl = gsap.timeline();
        tl.set(loader, { pointerEvents: "none" }, 0)
        .set(loaderBackdrop, { opacity: 0 }, 0)
        .to(loaderFill, { opacity: 0, duration: 0.4 }, 0)
        .set(loader, { display: "none" });
        return tl;
    }
};

loader.hideLoader()
