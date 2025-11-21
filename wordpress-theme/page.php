<?php get_header(); ?>

<main id="main-content" class="content-section">
    <div class="container">
        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                <article class="card" style="max-width: 1000px; margin: 0 auto;">
                    <header class="page-header" style="margin-bottom: 2rem;">
                        <h1 class="page-title" style="font-family: 'Bangers', cursive; font-size: 3rem; color: hsl(var(--primary)); margin-bottom: 0.5rem;">
                            <?php the_title(); ?>
                        </h1>
                        
                        <?php if (has_post_thumbnail()): ?>
                            <div class="page-thumbnail" style="margin: 1rem 0;">
                                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; border: 4px solid black; border-radius: 0.5rem; box-shadow: var(--shadow-comic);')); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="page-content">
                        <?php
                        the_content();
                        
                        wp_link_pages(array(
                            'before' => '<div class="page-links" style="margin: 2rem 0; text-align: center;">',
                            'after' => '</div>',
                            'pagelink' => '<span class="btn btn-primary" style="margin: 0 0.25rem; padding: 0.5rem 1rem;">%</span>',
                        ));
                        ?>
                    </div>

                    <?php if (comments_open() || get_comments_number()): ?>
                        <div class="comments-section" style="margin-top: 3rem; padding-top: 2rem; border-top: 3px solid black;">
                            <?php comments_template(); ?>
                        </div>
                    <?php endif; ?>
                </article>
            <?php endwhile; ?>
        <?php else: ?>
            <div class="card" style="text-align: center; max-width: 600px; margin: 0 auto;">
                <h1 class="card-title" style="color: hsl(var(--destructive));">Page Not Found</h1>
                <div class="card-content">
                    <p>Sorry, the page you are looking for could not be found.</p>
                    <div style="margin-top: 2rem;">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                            Return Home
                        </a>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        
        <!-- Page Navigation -->
        <div class="page-navigation" style="margin: 3rem 0; text-align: center;">
            <?php
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            
            if ($prev_post || $next_post):
            ?>
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <?php if ($prev_post): ?>
                        <div style="flex: 1; text-align: left;">
                            <a href="<?php echo esc_url(get_permalink($prev_post)); ?>" class="btn btn-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                                    <path d="M15 18l-6-6 6-6"/>
                                </svg>
                                Previous Page
                            </a>
                        </div>
                    <?php endif; ?>
                    
                    <div style="flex: 1; text-align: center;">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9,22 9,12 15,12 15,22"/>
                            </svg>
                            Home
                        </a>
                    </div>
                    
                    <?php if ($next_post): ?>
                        <div style="flex: 1; text-align: right;">
                            <a href="<?php echo esc_url(get_permalink($next_post)); ?>" class="btn btn-secondary">
                                Next Page
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
                                    <path d="M9 18l6-6-6-6"/>
                                </svg>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>