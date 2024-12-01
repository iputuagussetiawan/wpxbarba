<?php

/*
    Template Name: Theme - Home
*/

get_header(); 

?>
<main data-barba="container" data-barba-namespace="home">
    <?php get_template_part('topmenu'); ?>
    <section class="banner">
        <div class="container">
            <h1>Welcome Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nam pariatur, eaque a soluta rem ipsam, ullam amet id nobis odit cum excepturi error commodi alias suscipit, ea deserunt quaerat!</p>
        </div>
    </section>

    <section class="test-swiper">
        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
            
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </section>
</main>
<?php

get_footer();

?>