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
const { PanelBody } = wp.components;
const { Component } = wp.element;


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

		let bgClass, txtClass;

		if ( bgColor ) {
			bgClass = getColorObjectByColorValue(smBgColors, bgColor);
		}

		txtClass = getColorObjectByColorValue(smIconColors, textColor);

		const sectionClassName = classnames(
			className,
			isSelected && 'is-selected',
			bgClass && `bcolor-${bgClass.slug}`,
			txtClass && `color-${txtClass.slug}`
		);

		return [
			!! isSelected && (<InspectorControls key='inspector'>
				<PanelBody title={'Colors'}>
					<div className={ 'sm-colorpalette-wrapper components-base-control' }>
						<span className={ 'components-base-control__label' }>Background color</span>
                		<ColorPalette
                		className={ 'sm-colorpalette' }
                			value={ bgColor }
                			onChange={ this.onBgColorChange }
                		/>
                	</div>
                	<div className={ 'sm-colorpalette-wrapper components-base-control' }>
						<span className={ 'components-base-control__label' }>Text color</span>
						<ColorPalette
	                		className={ 'sm-colorpalette' }
	                		colors={ smIconColors }
	                		value={ textColor }
	                		onChange={ this.onColorChange }
	                	/>
					</div>
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