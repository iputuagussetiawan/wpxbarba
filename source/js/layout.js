
//1. IMPORT
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Modal from 'bootstrap/js/dist/modal';
import barba from '@barba/core';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Routes from './routes/Routes';
import Loader from './modules/Loader'
import Navbar from './modules/Navbar';
import PageHome from './pages/PageHome';

//2. VARIABLE
// gsap.registerPlugin(ScrollTrigger);
let cbMenu=document.querySelector(".cb-menu")

//3. INITIATION
const routes=new Routes();
const navbar=new Navbar(cbMenu);
const loader=new Loader();
const pageHome=new PageHome();

barba.init({
    transitions: [{
        name: 'transition-name',
        leave({ current, next, trigger }) {
            //Barba Loader Configuration
            const done = this.async();
            setTimeout(() => {
                done();
            }, 600);
            loader.showLoader()
        },
        after({ next }) {
            //Replaces all occurrences of the <body> tag in the HTML string with a custom tag <notbody>. 
            //This is done to avoid conflicts during parsing, as the DOMParser expects a single <body> tag in an HTML document.
            console.log(next.html);
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(
                next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>'),
                'text/html'
            );
            console.log(htmlDoc)

            //set page active with active what is current page active, for example "page-template-page-home"    
            let bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
            document.body.setAttribute('class', bodyClasses);
            
            //Init Javascript Routing
            routes.init();


            //Aditional JS
            loader.hideLoader();
            const mfCursorElements = document.querySelectorAll('.mf-cursor');
            // Loop through each element and remove it from the DOM
            mfCursorElements.forEach(element => {
                element.remove();
            });
            let cbMenuBarba=document.querySelector(".cb-menu")
            const navbarBarba=new Navbar(cbMenuBarba);
            navbarBarba.onInit()
            //end Additional JS
        }
    }]
});


//4. EVENT
navbar.onInit();
loader.hideLoader();
pageHome.init();


//5.FUNCTION

