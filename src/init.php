<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package SM
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function sm_blocks_assets() {
	// Styles.
	wp_enqueue_style(
		'sm_blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function sm_blocks_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'sm_blocks_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function sm_blocks_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'sm_theme_colors', // Handle.
		get_stylesheet_directory_uri() . '/assets/js/colors.js',
		true // Enqueue the script in the footer.
	);

	wp_enqueue_script(
		'sm_blocks-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array(
			'sm_theme_colors',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-components',
			'wp-compose',
			'wp-data',
			'wp-edit-post',
			'wp-plugins',
			'wp-api'
		), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'sm_blocks-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function sm_blocks_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'sm_blocks_editor_assets' );

function sm_render_block_recent_posts( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
        'post_type'   => 'post'
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
    }

    $t = '';
	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		$post_id = $post['ID'];

		$title = get_the_title( $post_id );
		if ( ! $title ) {
			$title = __( '(Untitled)' );
		}

		$text = get_the_excerpt( $post_id );

		$thumbnail = get_the_post_thumbnail( $post_id, 'systemorph-blog-thumb' );
		if ('' == $thumbnail ) :
			$thumbnail = '<img src="' . get_template_directory_uri() . '/assets/images/default-blog-thumbnail.png" width="217" height="203" alt="' . $title . '">';
		endif;

		$author = sprintf(
			/* translators: %s: post author */
			__( 'by %s', 'systemorph' ),
			'<span class="author">' . get_the_author_meta( 'display_name', $post['post_author'] ) . '</span> '
		);

		$list_items_markup .= sprintf(
			'<article class="wp-block-recent-posts-item">
				<header class="entry-header">
					<h3 class="entry-title"><a href="%1$s">%2$s</a></h3>
					<div class="entry-meta"><span class="posted-on"><span class="screen-reader-text">Posted on</span> <time datetime="%3$s" class="wp-block-recent-posts__post-date">%4$s</time></span> - <span class="byline">%5$s</span></div>
				</header>
				<div class="blog-content"><div class="post-thumbnail"><a href="%1$s">%6$s</a></div><div class="entry-content"><p>%7$s</p></div></div></article>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( $title ),
			get_the_date( DATE_W3C, $post_id ),
			get_the_date("d M Y", $post_id),
			$author,
			$thumbnail,
			$text
		);

		$list_items_markup .= "\n";
	}

	$class = 'wp-block-recent-posts';

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['title']) && $attributes['title'] !== '' ) {
		$t .= '<h2>' . $attributes['title'] . '</h2>';
	}

	$l = '<a class="back-to-blog-link" href="' . get_post_type_archive_link( 'post' ) . '">View all blog posts</a>';

	$block_content = sprintf(
		'<div class="%1$s">%3$s %2$s <div class="wp-block-recent-posts-view-all">%4$s</div></div>',
		esc_attr( $class ),
		$list_items_markup,
		$t,
		$l
	);

	return $block_content;
}

register_block_type( 'sm/recent-posts',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'postsToShow' => array(
				'type'    => 'number',
				'default' => 2,
			),
			'title'       => array(
				'type'    => 'string',
				'default' => '',
			),
		),
    	'render_callback' => 'sm_render_block_recent_posts',
	)
);

function sm_render_block_recent_news( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
        'post_type'   => 'news'
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return 'No news';
    }

    $t = '';
	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		$post_id = $post['ID'];

		$title = get_the_title( $post_id );
		if ( ! $title ) {
			$title = __( '(Untitled)' );
		}

		$text = get_the_excerpt( $post_id );
		if ( ! $text ) {
			$text = '';
		}

		$thumbnail = get_the_post_thumbnail( $post_id, 'systemorph-news-thumb' );
		if ('' == $thumbnail ) :
			$thumbnail = '<img src="' . get_template_directory_uri() . '/assets/images/default-news-thumbnail.png" width="70" height="70" alt="' . $title . '">';
		endif;

		$author = sprintf(
			/* translators: %s: post author */
			__( 'by %s', 'systemorph' ),
			'<span class="author">' . get_the_author_meta( 'display_name', $post['post_author'] ) . '</span> '
		);

		$list_items_markup .= sprintf(
			'<article class="wp-block-recent-posts-item">
				<header class="entry-header">
					<h3 class="entry-title"><a href="%1$s">%2$s</a></h3>
					<div class="entry-meta"><span class="posted-on"><span class="screen-reader-text">Posted on</span> <time datetime="%3$s" class="wp-block-recent-posts__post-date">%4$s</time></span> - <span class="byline">%5$s</span></div>
				</header>
				<div class="blog-content"><div class="entry-content"><p>%6$s</p></div></div></article>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( $title ),
			get_the_date( DATE_W3C, $post_id ),
			get_the_date("d M Y", $post_id),
			$author,
			$text
		);

		$list_items_markup .= "\n";
	}

	$class = 'wp-block-recent-news';

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['title'] ) ) {
		$t .= ' ' . $attributes['title'];
	}

	$l = '<a class="back-to-blog-link" href="' . get_post_type_archive_link( 'news' ) . '">View all News</a>';

	$block_content = sprintf(
		'<div class="%1$s"><h2>%3$s</h2> %2$s <div class="wp-block-recent-news-view-all">%4$s</div></div>',
		esc_attr( $class ),
		$list_items_markup,
		$t,
		$l
	);

	return $block_content;
}

register_block_type( 'sm/recent-news',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'postsToShow' => array(
				'type'    => 'number',
				'default' => 2,
			),
			'title'       => array(
				'type'    => 'string',
				'default' => '',
			),
		),
    	'render_callback' => 'sm_render_block_recent_news',
	)
);