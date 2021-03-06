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

function is_admin_editor_block () {
	return \defined( 'REST_REQUEST' ) && REST_REQUEST && ! empty( $_REQUEST['context'] ) && 'edit' === $_REQUEST['context'];
}

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
			'wp-dom-ready',
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

add_action( 'init', function() {
	register_post_meta( 'page', 'sm_page_icon', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
	register_post_meta( 'page', 'sm_page_icon_bcolor', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
	register_post_meta( 'page', 'sm_page_icon_color', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
	register_post_meta( 'post', 'sm_page_icon', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
	register_post_meta( 'post', 'sm_page_icon_bcolor', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
	register_post_meta( 'post', 'sm_page_icon_color', array(
		'type' => 'string',
		'show_in_rest' => true,
		'single' => true,
	) );
});

// =======================================================================
// Recent Posts Widget
function sm_render_block_recent_posts( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
        'post_type'   => 'post'
    ) );
    if ( count( $recent_posts ) === 0 ) {
    	if ( is_admin_editor_block() ) {
        	return 'No recent posts';
        }
        return false;
    }

    $t = '';
	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		$post_id = $post['ID'];

		$title = get_the_title( $post_id );
		if ( ! $title ) {
			$title = __( '(Untitled)' );
		}

		$text = "";

		if ( has_excerpt( $post_id ) ) {
			$text = get_the_excerpt( $post_id );
		} else {
			$text = apply_filters('get_the_excerpt', $post['post_content'] );
		}

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
			wp_kses( $title, array( 'br' => array(), 'em' => array(), 'strong' => array()) ),
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

// Recent News Widget
function sm_render_block_recent_news( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
        'post_type'   => 'news'
    ) );
    if ( count( $recent_posts ) === 0 ) {
    	if ( is_admin_editor_block() ) {
        	return 'No recent news';
        }
        return false;
    }

    $t = '';
	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		$post_id = $post['ID'];

		$title = get_the_title( $post_id );
		if ( ! $title ) {
			$title = __( '(Untitled)' );
		}

		$text = "";

		if ( has_excerpt( $post_id ) ) {
			$text = get_the_excerpt( $post_id );
		} else {
			$text = apply_filters('get_the_excerpt', $post['post_content'] );
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
			wp_kses( $title, array( 'br' => array(), 'em' => array(), 'strong' => array()) ),
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

// Recent Events Widget
function sm_render_block_recent_events( $attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['postsToShow'],
        'post_status' => 'publish',
        'post_type'   => 'event',
        'tax_query' => array(
			array(
				'taxonomy' => 'event-timeline',
				'field' => 'slug',
				'terms' => 'upcoming'
			)
		)
    ) );

    if ( count( $recent_posts ) === 0 ) {
		if ( is_admin_editor_block() ) {
			return 'No events found';
		}

       	return false;
    }

	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		$post_id = $post['ID'];

		$title = get_the_title( $post_id );
		if ( ! $title ) {
			$title = __( '(Untitled)' );
		}

		$text = "";

		if ( has_excerpt( $post_id ) ) {
			$text = get_the_excerpt( $post_id );
		} else {
			$text = apply_filters('get_the_excerpt', $post['post_content'] );
		}

		$list_items_markup .= sprintf(
			'<article class="wp-block-recent-events-item">
				<header class="entry-header">
					<h3 class="entry-title"><a href="%1$s">%2$s</a></h3>
					%3$s
				</header>
				<div class="blog-content"><div class="entry-content"><p>%4$s</p></div></div></article>',
			esc_url( get_permalink( $post_id ) ),
			wp_kses( $title, array( 'br' => array(), 'em' => array(), 'strong' => array()) ),
			the_systemorph_event_meta($post_id),
			$text
		);

		$list_items_markup .= "\n";
	}

	$t = "";
	$class = 'wp-block-recent-events';

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['title'] ) ) {
		$t .= ' ' . $attributes['title'];
	}

	$l = '<a class="back-to-events-page" href="' . get_post_type_archive_link( 'event' ) . '">View all events</a>';

	$block_content = sprintf(
		'<div class="%1$s"><h2>%3$s</h2> %2$s <div class="wp-block-upcoming-events-view-all">%4$s</div></div>',
		esc_attr( $class ),
		$list_items_markup,
		$t,
		$l
	);

	wp_reset_postdata();

	return $block_content;
}

register_block_type( 'sm/recent-events',
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
    	'render_callback' => 'sm_render_block_recent_events',
	)
);

// =======================================================================
// Team Widget
function sm_render_block_team( $attributes, $content ) {
    $team = wp_get_recent_posts( array(
        'numberposts' => -1,
        'post_status' => 'publish',
        'post_type'   => 'management-team',
        'orderby'     => 'menu_order',
        'order'       => 'ASC',
        'tax_query' => array(
			array(
				'taxonomy' => 'level',
				'field' => 'slug',
				'terms' => 'management-team'
			)
		)
    ) );

    if ( count( $team ) === 0 ) {
    	if ( is_admin_editor_block() ) {
        	return 'No management team';
        }
        return false;
    }

	$list_items_markup = '';

	foreach ( $team as $t ) {
		$team_id = $t['ID'];

		$title = get_the_title( $team_id );
		if ( $title !== '') {
			$title = '<h2 class="t-m-name">' . $title . '</h2>';
		}

		$position = rwmb_meta( 'team_member_position', '', $team_id );
		if ( $position !== '') {
			$position = '<h3 class="t-m-position">' . $position . '</h3>';
		}

		$thumbnail = get_the_post_thumbnail( $team_id, 'systemorph-team-member' );

		if ( $thumbnail && $thumbnail !== '') {
			$thumbnail = '<div class="t-m-image">' . $thumbnail . '</div>';
		}

		$content = $t['post_content'];

		$list_items_markup .= sprintf(
			'<article id="team_member_%1$s" class="%2$s">
				<header class="t-m-header">%3$s
					<div>%4$s %5$s</div>
				</header>
				<div class="t-m-info">%6$s</div></article>',
			$team_id,
			implode( ' ', get_post_class(array("team-member", "wp-block-recent-posts-item"), $team_id)),
			$thumbnail,
			$title,
			$position,
			$content
		);

		$list_items_markup .= "\n";
	}

	$class = 'wp-block-team-management';

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	$block_content = sprintf(
		'<div class="%1$s"> %2$s </div>',
		esc_attr( $class ),
		$list_items_markup
	);

	wp_reset_postdata();

	return $block_content;
}

register_block_type( 'sm/team',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			)
		),
    	'render_callback' => 'sm_render_block_team',
	)
);

// Team Widget
// function sm_render_block_team_member( $attributes, $content ) {
//     $team = wp_get_recent_posts( array(
//         'numberposts' => 1,
//         'post_status' => 'publish',
//         'post_type'   => 'management-team'
//     ) );

//     if ( count( $team ) === 0 ) {
//         return 'No management team';
//     }

// 	$list_items_markup = '';


// 	$team_id = $t['ID'];

// 	$title = get_the_title( $team_id );
// 	if ( $title !== '') {
// 		$title = '<h3 class="t-m-name">' . $title . '</h3>';
// 	}

// 	$thumbnail = get_the_post_thumbnail( $team_id, 'systemorph-team-member' );

// 	if ( $thumbnail && $thumbnail !== '') {
// 		$thumbnail = '<div class="t-m-image">' . $thumbnail . '</div>';
// 	}

// 	$content = $t['post_excerpt'];

// 	$list_items_markup .= sprintf(
// 		'<article id="team_member_%1$s" class="%2$s">
// 			<header class="t-m-header">%3$s
// 				<div>%4$s %5$s</div>
// 			</header>
// 			<div class="t-m-info">%6$s</div></article>',
// 		$team_id,
// 		implode( ' ', get_post_class(array("team-member", "wp-block-recent-posts-item"), $team_id)),
// 		$thumbnail,
// 		$title,
// 		$content
// 	);

// 	$list_items_markup .= "\n";

// 	$class = 'wp-block-team-member';

// 	if ( isset( $attributes['className'] ) ) {
// 		$class .= ' ' . $attributes['className'];
// 	}

// 	$block_content = sprintf(
// 		'<div class="%1$s"> %2$s </div>',
// 		esc_attr( $class ),
// 		$list_items_markup
// 	);

// 	wp_reset_postdata();

// 	return $block_content;
// }

// register_block_type( 'sm/team-member',
// 	array(
// 		'attributes'      => array(
// 			'className'   => array(
// 				'type'    => 'string',
// 			)
// 		),
//     	'render_callback' => 'sm_render_block_team_member',
// 	)
// );

function sm_render_block_event_speakers( $attributes ) {

    $output = '';

	$speakers = rwmb_meta( 'event_speakers', '', $attributes['eventID'] );

	if ( count( $speakers ) === 0 ) {
		if ( is_admin_editor_block() ) {
        	return 'No speakers yet';
        }
        return false;
    }

	if ( $speakers ) :
		$output .= '<article class="event-speakers">';
		$output .= '<h3 class="event-speakers-title">Featuring</h3>';
		$output .= '<ul class="speaker-list">';

		foreach ($speakers as $speakerID) {
			$output .= '<li class="event-speaker">';
			$thumbnail = get_the_post_thumbnail( $speakerID, 'systemorph-team-member' );
			$title = get_the_title( $speakerID );
			$position = rwmb_meta( 'team_member_position', '', $speakerID );

			$output .= sprintf(  '<div class="event-speaker-image">%1$s</div> <div class="event-speaker-info"> <h4 class="speaker-name">%2$s</h4> <p class="speaker-position">%3$s</p></div>',
					$thumbnail,
					$title,
					$position
				);

			$output .= '</li>';
		}

		$output .= '</ul> </article>';

	endif;

	return $output;
}

register_block_type( 'sm/event-speakers',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'eventID'     => array(
				'type'    => 'number',
				'default' => 0
			),
			'title'   => array(
				'type'    => 'string',
				'default' => 'Featuring'
			),
			'postsToShow' => array(
				'type'    => 'number',
				'default' => 3,
			),
		),
    	'render_callback' => 'sm_render_block_event_speakers',
	)
);


function sm_render_block_event_location( $attributes ) {

    $output = '';

	$location = rwmb_meta( 'event_location', '', $attributes['eventID'] );

	if ( count( $location ) === 0 ) {
		if ( is_admin_editor_block() ) {
        	return 'No location set';
        }
        return false;
    }

	$output .= '<div class="event-location"><span>' . $location . '</span></div>';

	return $output;
}

register_block_type( 'sm/event-location',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'eventID'     => array(
				'type'    => 'number',
				'default' => 0
			)
		),
    	'render_callback' => 'sm_render_block_event_location',
	)
);

function sm_render_block_event_dates( $attributes ) {

    $output = the_systemorph_event_dates( $attributes['eventID'] );

	$output = '<div class="event-dates"><span>' . $output . '</span></div>';

	return $output;
}

register_block_type( 'sm/event-dates',
	array(
		'attributes'      => array(
			'className'   => array(
				'type'    => 'string',
			),
			'eventID'     => array(
				'type'    => 'number',
				'default' => 0
			)
		),
    	'render_callback' => 'sm_render_block_event_dates',
	)
);

function post_featured_image_json( $data, $post, $context ) {
	$featured_image_id = $data->data['featured_media'];
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'systemorph-thumbnail-avatar' );

	if ( $featured_image_url ) {
		$data->data['featured_image_url'] = $featured_image_url[0];
	}

	return $data;
}

add_filter( 'rest_prepare_management-team', 'post_featured_image_json', 10, 3 );

function wpse_20160421_get_author_meta ($object, $field_name, $request) {

    $user_data = get_userdata($object['author']); // get user data from author ID.

    $array_data = (array)($user_data->data); // object to array conversion.

    // prevent user enumeration.
    unset($array_data['user_login']);
    unset($array_data['user_nicename']);
    unset($array_data['user_email']);
    unset($array_data['user_registered']);
    unset($array_data['user_pass']);
    unset($array_data['user_activation_key']);

    return $array_data['display_name'];
}

function wpse_20160421_register_author_meta_rest_field() {

    register_rest_field('page', 'author_name', array(
        'get_callback'    => 'wpse_20160421_get_author_meta',
        'update_callback' => null,
        'schema'          => null,
    ));

}
add_action('rest_api_init', 'wpse_20160421_register_author_meta_rest_field');