const { __ } = wp.i18n;

wp.domReady( function() {

	wp.blocks.registerBlockStyle('core/list', {
		name: 'default',
		label: __( 'Default', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/list', {
		name: 'columned',
		label: __( 'Two columns', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'default',
		label: __( 'Default margin', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-medium',
		label: __( 'Medium margin', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-large',
		label: __( 'Large margin', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'default',
		label: __( 'Default margin', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-medium',
		label: __( 'Medium margin', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-large',
		label: __( 'Large margin', 'sm' )
	});

});