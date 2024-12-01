import Home from "../pages/PageHome";
import About from "../pages/About";

const home=new Home();
const about=new About();

class Routes {
    init() {
        if (document.body.classList.contains('page-template-page-home')) {
            this.homepage();
        }
        if (document.body.classList.contains('page-template-page-about')) {
            this.about();
        } else if (document.body.classList.contains('single-post')) {
            this.singlePost();
        }
    }

    homepage() {
        home.init();
    }

    about() {
        // Add about page-specific scripts here
        about.init();
    }

    singlePost() {
        console.log('from single post');
        // Add single post-specific scripts here
    }
}

export default Routes;
