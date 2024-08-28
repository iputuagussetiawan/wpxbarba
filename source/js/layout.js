
//1. IMPORT
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Modal from 'bootstrap/js/dist/modal';
import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Routes from './routes/Routes';
import Loader from './modules/Loader'
import Navbar from './modules/Navbar';

//2. VARIABLE
gsap.registerPlugin(ScrollTrigger);
let cbMenu=document.querySelector(".cb-menu")

//3. INITIATION
const routes=new Routes();
const navbar=new Navbar(cbMenu);
const loader=new Loader();

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
            routes.init();
            loader.hideLoader();
            const mfCursorElements = document.querySelectorAll('.mf-cursor');
            // Loop through each element and remove it from the DOM
            mfCursorElements.forEach(element => {
                element.remove();
            });
            let cbMenuBarba=document.querySelector(".cb-menu")
            const navbarBarba=new Navbar(cbMenuBarba);
            navbarBarba.onInit()
        }
    }]
});


//4. EVENT
navbar.onInit();
loader.hideLoader()


//5.FUNCTION

