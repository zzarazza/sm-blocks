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
		label: __( 'Default', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-small',
		label: __( 'Small', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-medium',
		label: __( 'Medium margin', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-large',
		label: __( 'Large margin', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-xlarge',
		label: __( 'XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-xxlarge',
		label: __( '2XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'spacing-none',
		label: __( 'None', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'default',
		label: __( 'Default margin', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-small',
		label: __( 'Small', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-medium',
		label: __( 'Medium', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-large',
		label: __( 'Large', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-xlarge',
		label: __( 'XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-xxlarge',
		label: __( '2XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/heading', {
		name: 'spacing-none',
		label: __( 'None', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'default',
		label: __( 'Default', 'sm' ),
		isDefault: true
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-small',
		label: __( 'Small', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-medium',
		label: __( 'Medium', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-large',
		label: __( 'Large', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-xlarge',
		label: __( 'XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-xxlarge',
		label: __( '2XLarge', 'sm' )
	});

	wp.blocks.registerBlockStyle('core/image', {
		name: 'spacing-none',
		label: __( 'None', 'sm' )
	});

});