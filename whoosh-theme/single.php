<?php get_header(); ?>

<main style="padding-top: 120px;">
    <?php while (have_posts()) : the_post(); ?>
        <article class="content-section">
            <div class="container">
                <div class="comic-panel bg-white p-8" style="max-width: 800px; margin: 0 auto;">
                    <header class="entry-header" style="margin-bottom: 2rem;">
                        <h1 class="entry-title font-comic" style="font-size: 2.5rem; margin-bottom: 1rem; color: hsl(39, 77%, 51%);">
                            <?php the_title(); ?>
                        </h1>
                        <div style="font-size: 0.875rem; color: rgba(0, 0, 0, 0.6); margin-bottom: 1rem;">
                            Published on <?php echo get_the_date(); ?> by <?php the_author(); ?>
                        </div>
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem;">
                                <?php the_post_thumbnail('large', array('class' => 'hero-image')); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8;">
                        <?php the_content(); ?>
                    </div>

                    <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #000;">
                        <?php if (get_the_tags()) : ?>
                            <div style="margin-bottom: 1rem;">
                                <strong>Tags:</strong> <?php the_tags('', ', '); ?>
                            </div>
                        <?php endif; ?>
                    </footer>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>