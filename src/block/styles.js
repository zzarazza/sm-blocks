const { __ } = wp.i18n;

wp.domReady( function() {

	$default = {
		name: 'default',
		label: __( 'Default', 'sm' ),
		isDefault: true
	};

	$small = {
		name: 'spacing-small',
		label: __( 'Small', 'sm' )
	};

	$medium = {
		name: 'spacing-medium',
		label: __( 'Medium', 'sm' )
	}

	$large = {
		name: 'spacing-large',
		label: __( 'Large', 'sm' )
	};

	$xlarge = {
		name: 'spacing-xlarge',
		label: __( 'XLarge', 'sm' )
	};

	$xxlarge = {
		name: 'spacing-xxlarge',
		label: __( 'XXLarge', 'sm' )
	};

	$none = {
		name: 'spacing-none',
		label: __( 'None', 'sm' )
	};

	// Remove default blocks
	wp.blocks.unregisterBlockType('core/embed' );
	wp.blocks.unregisterBlockType('core-embed/twitter');
	wp.blocks.unregisterBlockType('core-embed/facebook');
	wp.blocks.unregisterBlockType('core-embed/instagram');
	wp.blocks.unregisterBlockType('core-embed/wordpress');
	wp.blocks.unregisterBlockType('core-embed/soundcloud');
	wp.blocks.unregisterBlockType('core-embed/spotify');
	wp.blocks.unregisterBlockType('core-embed/flickr');
	wp.blocks.unregisterBlockType('core-embed/animoto');
	wp.blocks.unregisterBlockType('core-embed/cloudup');
	wp.blocks.unregisterBlockType('core-embed/collegehumor');
	wp.blocks.unregisterBlockType('core-embed/dailymotion');
	wp.blocks.unregisterBlockType('core-embed/hulu');
	wp.blocks.unregisterBlockType('core-embed/imgur');
	wp.blocks.unregisterBlockType('core-embed/issuu');
	wp.blocks.unregisterBlockType('core-embed/kickstarter');
	wp.blocks.unregisterBlockType('core-embed/meetup-com');
	wp.blocks.unregisterBlockType('core-embed/mixcloud');
	wp.blocks.unregisterBlockType('core-embed/polldaddy');
	wp.blocks.unregisterBlockType('core-embed/reddit');
	wp.blocks.unregisterBlockType('core-embed/reverbnation');
	wp.blocks.unregisterBlockType('core-embed/screencast');
	wp.blocks.unregisterBlockType('core-embed/scribd');
	wp.blocks.unregisterBlockType('core-embed/slideshare');
	wp.blocks.unregisterBlockType('core-embed/smugmug');
	wp.blocks.unregisterBlockType('core-embed/speaker');
	wp.blocks.unregisterBlockType('core-embed/ted');
	wp.blocks.unregisterBlockType('core-embed/tumblr');
	wp.blocks.unregisterBlockType('core-embed/videopress');
	wp.blocks.unregisterBlockType('core-embed/wordpress-tv' );
	wp.blocks.unregisterBlockType('core-embed/speaker-deck' );

	wp.blocks.unregisterBlockType('core/latest-posts');
	wp.blocks.unregisterBlockType('core/latest-comments');
	wp.blocks.unregisterBlockType('core/archives');
	wp.blocks.unregisterBlockType('core/categories');
	wp.blocks.unregisterBlockType('core/cover');
	wp.blocks.unregisterBlockType('core/spacer');
	wp.blocks.unregisterBlockType('core/nextpage');
	wp.blocks.unregisterBlockType('core/verse');

	// Pull quote
	wp.blocks.unregisterBlockStyle('core/pullquote', 'default');
	wp.blocks.unregisterBlockStyle('core/pullquote', 'solid-color');

	// Quote
	wp.blocks.unregisterBlockStyle('core/quote', 'default');
	wp.blocks.unregisterBlockStyle('core/quote', 'large');
	wp.blocks.registerBlockStyle('core/quote', $default);
	wp.blocks.registerBlockStyle('core/quote', $small);
	wp.blocks.registerBlockStyle('core/quote', $medium);
	wp.blocks.registerBlockStyle('core/quote', $large);
	wp.blocks.registerBlockStyle('core/quote', $xlarge);
	wp.blocks.registerBlockStyle('core/quote', $xxlarge);
	wp.blocks.registerBlockStyle('core/quote', $none);

	// List
	wp.blocks.registerBlockStyle('core/list', $default);
	wp.blocks.registerBlockStyle('core/list', {
		name: 'columned',
		label: __( 'Two columns', 'sm' )
	});

	// Paragraph
	wp.blocks.registerBlockStyle('core/paragraph', $default);
	wp.blocks.registerBlockStyle('core/paragraph', $small);
	wp.blocks.registerBlockStyle('core/paragraph', $medium);
	wp.blocks.registerBlockStyle('core/paragraph', $large);
	wp.blocks.registerBlockStyle('core/paragraph', $xlarge);
	wp.blocks.registerBlockStyle('core/paragraph', $xxlarge);
	wp.blocks.registerBlockStyle('core/paragraph', $none);

	// Heading
	wp.blocks.registerBlockStyle('core/heading', $default);
	wp.blocks.registerBlockStyle('core/heading', $small);
	wp.blocks.registerBlockStyle('core/heading', $medium);
	wp.blocks.registerBlockStyle('core/heading', $large);
	wp.blocks.registerBlockStyle('core/heading', $xlarge);
	wp.blocks.registerBlockStyle('core/heading', $xxlarge);
	wp.blocks.registerBlockStyle('core/heading', $none);

	// Image
	wp.blocks.registerBlockStyle('core/image', $default);
	wp.blocks.registerBlockStyle('core/image', $small);
	wp.blocks.registerBlockStyle('core/image', $medium);
	wp.blocks.registerBlockStyle('core/image', $large);
	wp.blocks.registerBlockStyle('core/image', $xlarge);
	wp.blocks.registerBlockStyle('core/image', $xxlarge);
	wp.blocks.registerBlockStyle('core/image', $none);

	var el = wp.element.createElement;
	var allowColumnStyle = wp.compose.createHigherOrderComponent( function( BlockEdit ) {
		return function( props ) {
			var content = el( BlockEdit, props );

			if ( props.name === 'core/columns' && typeof props.insertBlocksAfter === 'undefined' ) {
				content = el( 'div', {} );
			}

			return el(
				wp.element.Fragment, {}, content
			);
		};
	}, 'allowColumnStyle' );

	wp.hooks.addFilter( 'editor.BlockEdit', 'my/gutenberg', allowColumnStyle );

	// Columns
	wp.blocks.registerBlockStyle('core/columns', $default);
	wp.blocks.registerBlockStyle('core/columns', $small);
	wp.blocks.registerBlockStyle('core/columns', $medium);
	wp.blocks.registerBlockStyle('core/columns', $large);
	wp.blocks.registerBlockStyle('core/columns', $xlarge);
	wp.blocks.registerBlockStyle('core/columns', $xxlarge);
	wp.blocks.registerBlockStyle('core/columns', $none);

	// Vimeo
	wp.blocks.registerBlockStyle('core-embed/vimeo', $default);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $small);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $medium);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $large);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $xlarge);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $xxlarge);
	wp.blocks.registerBlockStyle('core-embed/vimeo', $none);

});