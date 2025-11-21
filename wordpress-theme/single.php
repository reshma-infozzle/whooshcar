<?php get_header(); ?>

<main id="main-content" class="content-section">
    <div class="container">
        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                <article class="card" style="max-width: 1000px; margin: 0 auto;">
                    <header class="post-header" style="margin-bottom: 2rem;">
                        <h1 class="post-title" style="font-family: 'Bangers', cursive; font-size: 3rem; color: hsl(var(--primary)); margin-bottom: 1rem;">
                            <?php the_title(); ?>
                        </h1>
                        
                        <div class="post-meta" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 2px solid hsl(var(--border));">
                            <div class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.25rem;">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <strong>Published:</strong> <?php echo get_the_date('F j, Y'); ?>
                            </div>
                            
                            <?php if (get_the_modified_date() !== get_the_date()): ?>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.25rem;">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                    </svg>
                                    <strong>Updated:</strong> <?php echo get_the_modified_date('F j, Y'); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.25rem;">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <strong>By:</strong> <?php the_author(); ?>
                            </div>
                            
                            <?php $categories = get_the_category(); ?>
                            <?php if (!empty($categories)): ?>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.25rem;">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                                    </svg>
                                    <strong>Category:</strong> 
                                    <?php foreach ($categories as $i => $category): ?>
                                        <?php if ($i > 0) echo ', '; ?>
                                        <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" style="color: hsl(var(--primary)); text-decoration: none;">
                                            <?php echo esc_html($category->name); ?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                            
                            <?php $tags = get_the_tags(); ?>
                            <?php if (!empty($tags)): ?>
                                <div class="meta-item" style="flex-basis: 100%;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.25rem;">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                                    </svg>
                                    <strong>Tags:</strong> 
                                    <?php foreach ($tags as $i => $tag): ?>
                                        <?php if ($i > 0) echo ', '; ?>
                                        <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" style="color: hsl(var(--secondary)); text-decoration: none; font-size: 0.9rem;">
                                            #<?php echo esc_html($tag->name); ?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <?php if (has_post_thumbnail()): ?>
                            <div class="post-thumbnail" style="margin: 1rem 0;">
                                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; border: 4px solid black; border-radius: 0.5rem; box-shadow: var(--shadow-comic);')); ?>
                                <?php if (get_the_post_thumbnail_caption()): ?>
                                    <p style="font-style: italic; margin-top: 0.5rem; text-align: center; color: rgba(0,0,0,0.7);">
                                        <?php echo get_the_post_thumbnail_caption(); ?>
                                    </p>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="post-content" style="line-height: 1.8; font-size: 1.1rem;">
                        <?php
                        the_content();
                        
                        wp_link_pages(array(
                            'before' => '<div class="page-links" style="margin: 2rem 0; text-align: center;">',
                            'after' => '</div>',
                            'pagelink' => '<span class="btn btn-primary" style="margin: 0 0.25rem; padding: 0.5rem 1rem;">%</span>',
                        ));
                        ?>
                    </div>

                    <!-- Share Buttons -->
                    <div class="share-buttons" style="margin: 2rem 0; padding: 1.5rem; background: hsl(var(--muted)); border: 3px solid black; border-radius: 0.5rem;">
                        <h3 style="font-family: 'Bangers', cursive; font-size: 1.5rem; margin-bottom: 1rem; color: hsl(var(--primary));">Share This Post</h3>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem;">
                                Twitter
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                                Facebook
                            </a>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; background: hsl(var(--accent));">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <?php if (comments_open() || get_comments_number()): ?>
                        <div class="comments-section" style="margin-top: 3rem; padding-top: 2rem; border-top: 3px solid black;">
                            <?php comments_template(); ?>
                        </div>
                    <?php endif; ?>
                </article>

                <!-- Related Posts -->
                <?php
                $related_posts = get_posts(array(
                    'category__in' => wp_get_post_categories(get_the_ID()),
                    'numberposts' => 3,
                    'post__not_in' => array(get_the_ID()),
                ));
                
                if ($related_posts):
                ?>
                    <section class="related-posts" style="margin: 4rem 0;">
                        <div class="container">
                            <h2 style="font-family: 'Bangers', cursive; font-size: 2.5rem; text-align: center; margin-bottom: 2rem; color: hsl(var(--primary));">
                                Related Articles
                            </h2>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                                <?php foreach ($related_posts as $related_post): setup_postdata($related_post); ?>
                                    <div class="card" style="margin: 0;">
                                        <?php if (has_post_thumbnail($related_post->ID)): ?>
                                            <div style="margin-bottom: 1rem;">
                                                <?php echo get_the_post_thumbnail($related_post->ID, 'medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border: 3px solid black; border-radius: 0.5rem;')); ?>
                                            </div>
                                        <?php endif; ?>
                                        
                                        <h3 style="font-family: 'Bangers', cursive; font-size: 1.5rem; margin-bottom: 0.5rem;">
                                            <a href="<?php echo esc_url(get_permalink($related_post->ID)); ?>" style="color: hsl(var(--primary)); text-decoration: none;">
                                                <?php echo esc_html($related_post->post_title); ?>
                                            </a>
                                        </h3>
                                        
                                        <p style="margin-bottom: 1rem; color: rgba(0,0,0,0.7);">
                                            <?php echo wp_trim_words($related_post->post_excerpt ?: $related_post->post_content, 20); ?>
                                        </p>
                                        
                                        <a href="<?php echo esc_url(get_permalink($related_post->ID)); ?>" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                                            Read More
                                        </a>
                                    </div>
                                <?php endforeach; wp_reset_postdata(); ?>
                            </div>
                        </div>
                    </section>
                <?php endif; ?>
                
            <?php endwhile; ?>
        <?php else: ?>
            <div class="card" style="text-align: center; max-width: 600px; margin: 0 auto;">
                <h1 class="card-title" style="color: hsl(var(--destructive));">Post Not Found</h1>
                <div class="card-content">
                    <p>Sorry, the post you are looking for could not be found.</p>
                    <div style="margin-top: 2rem;">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                            Return Home
                        </a>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        
        <!-- Post Navigation -->
        <div class="post-navigation" style="margin: 3rem 0;">
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
                                Previous Post
                            </a>
                            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: rgba(0,0,0,0.7);">
                                <?php echo wp_trim_words($prev_post->post_title, 8); ?>
                            </div>
                        </div>
                    <?php endif; ?>
                    
                    <div style="flex: 1; text-align: center;">
                        <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                            All Posts
                        </a>
                    </div>
                    
                    <?php if ($next_post): ?>
                        <div style="flex: 1; text-align: right;">
                            <a href="<?php echo esc_url(get_permalink($next_post)); ?>" class="btn btn-secondary">
                                Next Post
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
                                    <path d="M9 18l6-6-6-6"/>
                                </svg>
                            </a>
                            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: rgba(0,0,0,0.7);">
                                <?php echo wp_trim_words($next_post->post_title, 8); ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>