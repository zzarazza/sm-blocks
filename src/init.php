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

function sm_render_block_recent_items( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
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
		$list_items_markup .= sprintf(
			'<li><a href="%1$s">%2$s</a>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( $title )
		);

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$list_items_markup .= sprintf(
				'<time datetime="%1$s" class="wp-block-latest-posts__post-date">%2$s</time>',
				esc_attr( get_the_date( 'c', $post_id ) ),
				esc_html( get_the_date( '', $post_id ) )
			);
		}

		$list_items_markup .= "</li>\n";
	}

	$class = 'wp-block-recent-items';
	if ( isset( $attributes['align'] ) ) {
		$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
		$class .= ' is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$class .= ' columns-' . $attributes['columns'];
	}

	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$class .= ' has-dates';
	}

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['title'] ) ) {
		$t .= ' ' . $attributes['title'];
	}

	$block_content = sprintf(
		'<h3>%3$s</h3><ul class="%1$s">%2$s</ul>',
		esc_attr( $class ),
		$list_items_markup,
		$t
	);

	return $block_content;
    // return sprintf(
    //     '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
    //     esc_url( get_permalink( $post_id ) ),
    //     esc_html( get_the_title( $post_id ) )
    // );
}

register_block_type( 'sm/recent-items',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'postsToShow' => array(
				'type'    => 'number',
				'default' => 5,
			),
			'displayPostDate' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'order'       => array(
				'type'    => 'string',
				'default' => 'desc',
			),
			'orderBy'     => array(
				'type'    => 'string',
				'default' => 'date',
			),
			'title'       => array(
				'type'    => 'string',
				'default' => '',
			),
		),
    	'render_callback' => 'sm_render_block_recent_items',
	)
);