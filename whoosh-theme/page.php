<?php get_header(); ?>

<main style="padding-top: 120px;">
    <?php while (have_posts()) : the_post(); ?>
        <section class="content-section">
            <div class="container">
                <div class="comic-panel bg-white p-8" style="max-width: 1000px; margin: 0 auto;">
                    <header class="entry-header" style="margin-bottom: 2rem; text-center;">
                        <h1 class="entry-title font-comic" style="font-size: 3rem; margin-bottom: 1rem;">
                            <?php the_title(); ?>
                        </h1>
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem;">
                                <?php the_post_thumbnail('large', array('class' => 'hero-image', 'style' => 'max-width: 100%; height: auto;')); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8; color: rgba(0, 0, 0, 0.8);">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </section>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>