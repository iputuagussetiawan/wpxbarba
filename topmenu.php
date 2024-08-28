<header>
    <nav class="cb-menu custom-menu">
        <div class="cb-menu-logo">
            <?php
                if(function_exists('the_custom_logo')) {
                    the_custom_logo();
                }
            ?>
        </div>
        <!-- <ul class="main-menu" data-cursor="-opaque">
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    Home
                </a>
            </li>
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    About me
                </a>
            </li>
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    What we do
                </a>
            </li>
        </ul> -->

        <?php 
            // Header Main Navigation Menu
            $args = array(
                'theme_location' => 'main_menu',
                'depth'          => 2,
                'container'      => '', // remove div container
                'items_wrap'      => '%3$s', // remove ul tag
                'menu_class'      => 'main-menu',
                'add_li_class'    => 'main-menu__item',
                'link_class'      => 'main-menu__link'
            );
            wp_nav_menu( $args );
        ?>
        <div class="nav-search">
            <div class="nav-search__icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <div class="nav-search__input-container">
                <input class="form-control nav-search__input" type="search" placeholder="Search">
            </div>
        </div>
        <div class="burger-menu">
            <button class="burger-menu__button" aria-label="Menu" tabindex="0" data-cursor="-menu" data-cursor-stick="">
                <span class="burger-menu__line"></span>
                <span class="burger-menu__line"></span>
            </button>
        </div>
        <div class="menu-box">
            <div class="menu-box__backdrop"></div>
            <div class="menu-box__fill" ></div>
            <div class="menu-box__content">
                <div class="menu-box__body">
                    <div class="menu-box__container">
                        <div class="menu-box__grid">
                            <div class="-left menu-box__col">
                                <div class="menu-box__title">Social</div>
                                <div class="social-media" data-cursor="-opaque">
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="LinkedIn">LinkedIn</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="Behance">Behance</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="Dribbble">Dribbble</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="Instagram">Instagram</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="YouTube">YouTube</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="Twitter">Twitter</span></em></a>
                                    <a class="social-media__link" href="" target="_blank" rel="noopener"><em><span data-text="GitHub">GitHub</span></em></a>
                                </div>
                            </div>
                            <div class="-right menu-box__col">
                                <div class="menu-box__title">Menu</div>
                                <div class="side-menu" role="navigation" data-cursor="-opaque">
                                    <div class=side-menu__item"><a class="side-menu__link" href="http://localhost/iputuagussetiawan.com/what-we-do/"><em><span data-text="What we do">What we do</span></em></a></div>
                                    <div class="side-menu__item"><a class="side-menu__link"  href=""><em><span data-text="Projects">Projects</span></em></a></div>
                                    <div class="side-menu__item"><a class="side-menu__link"  href=""><em><span data-text="Company">Company</span></em></a></div>
                                    <div class="side-menu__item"><a class="side-menu__link"  href=""><em><span data-text="Tutorials">Tutorials</span></em></a></div>
                                    <div class="side-menu__item"><a class="side-menu__link"  href=""><em><span data-text="Contacts">Contacts</span></em></a></div>
                                </div>

                                <?php 
                                    // Header Main Navigation Menu
                                    $args = array(
                                        'theme_location' => 'main_menu',
                                        'depth'          => 2,
                                        'container'      => '', // remove div container
                                        'items_wrap'      => '%3$s', // remove ul tag
                                        'menu_class'      => 'side-menu',
                                        'add_li_class'    => 'side-menu__item',
                                        'link_class'      => 'side-menu__link'
                                    );
                                    wp_nav_menu( $args );
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-box__footer">
                    <div class="menu-box__container">
                        <div class="-sm menu-box__title">Get in touch</div>
                        <div class="side-mail">
                            <a class="side-mail__link" href="mailto:agussetiawaniputu@gmail.com"><span>agussetiawaniputu@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>