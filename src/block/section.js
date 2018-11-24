/**
 * BLOCK: SM Section
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	InspectorControls,
	ColorPalette,
	getColorClassName,
	getColorObjectByColorValue
} = wp.editor;
const { PanelBody, BaseControl, ColorIndicator } = wp.components;
const { Component, Fragment } = wp.element;


class smSection extends Component {
	constructor() {
		super( ...arguments );
		this.onColorChange = this.onColorChange.bind(this);
		this.onBgColorChange = this.onBgColorChange.bind(this);
	}

	onColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { textColor: value } );
	}

	onBgColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { bgColor: value } );
	}

	render() {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				bgColor = '',
				textColor = '#101f30'
			} = {}
		} = this.props;

		const bgObject = getColorObjectByColorValue( smBgColors, bgColor );
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue( smIconColors, textColor );

		const colorSlug = colorObject && colorObject.slug;;

		const sectionClassName = classnames(
			className,
			isSelected && 'is-selected',
			bgSlug && `bcolor-${bgSlug}`,
			colorSlug && `color-${colorSlug}`
		);

		// const label = "Background color";

		// const labelElement = (
		// 	<Fragment>
		// 		{ label }
		// 		{ bgColor && (
		// 			<ColorIndicator
		// 				colorValue={ bgColor }
		// 			/>
		// 		) }
		// 	</Fragment>
		// );

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
			</InspectorControls> ),
			<section className={ sectionClassName }>
				<InnerBlocks />
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
		}
	},

	edit: smSection,

	save: function( props ) {
		const {
			className,
			setAttributes,
			attributes: {
				bgColor = "",
				textColor = "#101f30"
			} = {}
		} = props;

		let bgClass, txtClass;

		if ( bgColor ) {
			bgClass = getColorObjectByColorValue(smBgColors, bgColor);
		}

		txtClass = getColorObjectByColorValue(smIconColors, textColor);

		const sectionClassName = classnames(
									className,
									bgClass && `bcolor-${bgClass.slug}`,
									txtClass && `color-${txtClass.slug}`
		);

		return (
			<section className={ sectionClassName }>
				<InnerBlocks.Content />
			</section>
		);
	},
} );