/**
 * BLOCK: SM Section
 */

import classnames from 'classnames';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const {
	InnerBlocks,
	InspectorControls,
	BlockControls,
	ColorPalette,
	getColorObjectByColorValue
} = wp.editor;

const {
	PanelBody,
	ToggleControl,
	BaseControl,
	ColorIndicator
} = wp.components;

const { Component, Fragment } = wp.element;


class smSection extends Component {
	constructor() {
		super( ...arguments );
		this.onColorChange = this.onColorChange.bind(this);
		this.onBgColorChange = this.onBgColorChange.bind(this);
		this.toggleBoxShadow = this.toggleBoxShadow.bind( this );
		this.toggleBorderRadius = this.toggleBorderRadius.bind( this );
		this.toggleNoTopPadding = this.toggleNoTopPadding.bind( this );
		this.toggleNoBottomPadding = this.toggleNoBottomPadding.bind( this );
		this.toggleStriped = this.toggleStriped.bind( this );
	}

	onColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { textColor: value } );
	}

	onBgColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { bgColor: value } );
	}

	toggleBoxShadow() {
		const { attributes, setAttributes } = this.props;
		setAttributes( { boxShadow: ! attributes.boxShadow } );
	}

	toggleBorderRadius() {
		const { attributes, setAttributes } = this.props;
		setAttributes( { borderRadius: ! attributes.borderRadius } );
	}

	toggleNoTopPadding() {
		const { attributes, setAttributes } = this.props;
		setAttributes( { noTopPadding: ! attributes.noTopPadding } );
	}

	toggleNoBottomPadding() {
		const { attributes, setAttributes } = this.props;
		setAttributes( { noBottomPadding: ! attributes.noBottomPadding } );
	}

	toggleStriped () {
		const { attributes, setAttributes } = this.props;
		setAttributes( { striped: ! attributes.striped } );
	}

	render() {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				bgColor = '',
				textColor = '#101f30',
				boxShadow,
				borderRadius,
				noTopPadding,
				noBottomPadding,
				striped
			} = {}
		} = this.props;

		const bgObject = getColorObjectByColorValue( smBgColors, bgColor );
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue( smIconColors, textColor );
		const colorSlug = colorObject && colorObject.slug;

		const sectionClassName = classnames(
			className,
			isSelected && 'is-selected',
			bgSlug && `bcolor-${bgSlug}`,
			colorSlug && `color-${colorSlug}`,
			boxShadow && 'has-box-shadow',
			borderRadius && 'has-border-radius',
			noTopPadding && 'has-top-padding-0',
			noBottomPadding && 'has-bottom-padding-0',
			striped && 'section-striped'
		);

		let output = 'Block';

		if ('undefined' !== typeof this.props.insertBlocksAfter) {
			output = <InnerBlocks />;
		}


		return [
			!! isSelected && (<InspectorControls key='inspector'>
				<PanelBody title={'Colors'} className={'editor-panel-color-settings'}>
					<BaseControl
						className="sm-colorpalette-wrapper editor-color-palette-control"
						label={
							<Fragment>
								{ "Background color" }
								{ bgColor && (
									<ColorIndicator
										colorValue={ bgColor }
									/>
								) }
							</Fragment>
						}>
						<ColorPalette
							className="sm-colorpalette editor-color-palette-control__color-palette"
							colors={ smBgColors }
							value={ bgColor }
							onChange={ this.onBgColorChange }
							disableCustomColors={ true }
						/>
					</BaseControl>
					<BaseControl
						className="sm-colorpalette-wrapper editor-color-palette-control"
						label={
							<Fragment>
								{ "Text color" }
								{ textColor && (
									<ColorIndicator
										colorValue={ textColor }
									/>
								) }
							</Fragment>
						}>
						<ColorPalette
							className="sm-colorpalette editor-color-palette-control__color-palette"
							colors={ smIconColors }
							value={ textColor }
							onChange={ this.onColorChange }
							disableCustomColors={ true }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={'Details'} className={'editor-panel-detail-settings'}>
					<BaseControl>
						<ToggleControl
							label={ __( 'Shadow' ) }
							checked={ !! boxShadow }
							onChange={ this.toggleBoxShadow }
						/>
					</BaseControl>
					<BaseControl>
						<ToggleControl
							label={ __( 'Border radius' ) }
							checked={ !! borderRadius }
							onChange={ this.toggleBorderRadius }
						/>
					</BaseControl>
					<BaseControl>
						<ToggleControl
							label={ __( 'Remove top padding' ) }
							checked={ !! noTopPadding }
							onChange={ this.toggleNoTopPadding }
						/>
					</BaseControl>
					<BaseControl>
						<ToggleControl
							label={ __( 'Remove bottom padding' ) }
							checked={ !! noBottomPadding }
							onChange={ this.toggleNoBottomPadding }
						/>
					</BaseControl>
					<BaseControl>
						<ToggleControl
							label={ __( 'Stripes' ) }
							checked={ !! striped }
							onChange={ this.toggleStriped }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls> ),
			<section className={ sectionClassName }>
				{ output }
			</section>
		]
	}
}

registerBlockType( 'sm/section', {
	title: __( 'SM Section' ),
	icon: 'align-center',
	category: 'layout',
	keywords: [
		__( 'SM Section' ),
	],
	description: __( 'Add content section' ),
	supports: {
		align: [ 'center', 'wide', 'full' ]
	},
	attributes: {
		bgColor: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '#101f30',
		},
		boxShadow: {
			type: 'boolean',
			default: false,
		},
		borderRadius: {
			type: 'boolean',
			default: false,
		},
		noTopPadding: {
			type: 'boolean',
			default: false,
		},
		noBottomPadding: {
			type: 'boolean',
			default: false,
		},
		striped: {
			type: 'boolean',
			default: false,
		},
	},
	styles: [
		{ name: 'default', label: __( 'Default' ), isDefault: true },
		{ name: 'spacing-small', label: __( 'Small' ) },
		{ name: 'spacing-medium', label: __( 'Medium' ) },
		{ name: 'spacing-large', label: __( 'Large' ) },
		{ name: 'spacing-xlarge', label: __( 'XLarge' ) },
		{ name: 'spacing-xxlarge', label: __( '2XLarge' ) },
		{ name: 'spacing-none', label: __( 'None' ) },
	],

	edit: smSection,

	save: function( props ) {
		const {
			className,
			setAttributes,
			attributes: {
				bgColor = "",
				textColor = "#101f30",
				boxShadow,
				borderRadius,
				noTopPadding,
				noBottomPadding,
				striped
			} = {}
		} = props;

		const bgObject = getColorObjectByColorValue( smBgColors, bgColor );
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue( smIconColors, textColor );
		const colorSlug = colorObject && colorObject.slug;

		const sectionClassName = classnames(
			className,
			bgSlug && `bcolor-${bgSlug}`,
			colorSlug && `color-${colorSlug}`,
			boxShadow && 'has-box-shadow',
			borderRadius && 'has-border-radius',
			noTopPadding && 'has-top-padding-0',
			noBottomPadding && 'has-bottom-padding-0',
			striped && 'section-striped'
		);

		return (
			<section className={ sectionClassName }>
				<InnerBlocks.Content />
			</section>
		);
	},
} );