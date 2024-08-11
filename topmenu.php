<header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <?php
                    if(function_exists('the_custom_logo')) {
                        the_custom_logo();
                    }
                ?>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav">
                        <?php 
                            // Header Main Navigation Menu
                            $args = array(
                                'theme_location' => 'main_menu',
                                'depth'          => 1,
                                'container'      => '', // remove div container
                                'items_wrap'      => '%3$s', // remove ul tag
                            );
                            wp_nav_menu( $args );
                        ?>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>