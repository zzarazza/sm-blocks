/**
 * BLOCK: SM Custom List Item
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	PlainText,
	RichText,
	ColorPalette,
	getColorObjectByColorValue
} = wp.editor;
const {
	SelectControl,
	PanelBody,
	RadioControl,
	BaseControl,
	ColorIndicator
} = wp.components;

const { Component, Fragment } = wp.element;

class smCustomListItem extends Component {
	constructor() {
		super( ...arguments );
		this.onContentChange = this.onContentChange.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onIconChange = this.onIconChange.bind(this);
		this.onIconColorChange = this.onIconColorChange.bind(this);
		this.onIconBgColorChange = this.onIconBgColorChange.bind(this);
	}

	onTitleChange ( value ) {
		this.props.setAttributes( { title: value } );
	}

	onContentChange ( value ) {
		this.props.setAttributes( { content: value } );
	}

	onIconBgColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { iconBgColor: value } );
	}

	onIconChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { icon: value } );
	}

	onIconColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes( { iconColor: value } );
	}

	render () {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				content,
				title,
				icon = 'add-user',
				iconBgColor = "#009cde",
				iconColor = "#f0f0f0"
			} = {}
		} = this.props;

		let output  = __( 'Add some content...' );

		const bgObject = getColorObjectByColorValue(smBgIconColors, iconBgColor);
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue(smIconColors, iconColor);
		const colorSlug = colorObject && colorObject.slug;

		const color = (colorSlug === 'tr-white') ? '' : `-${colorSlug}`;

		const iconClass = `icon icon-${icon}${color} icon-bcolor-${bgSlug}`;

		const itemClassName = classnames(
			className,
			isSelected && 'is-selected',
			bgSlug && `bcolor-${bgSlug}`,
			colorSlug && `color-${colorSlug}`,
			'has-icon'
		);

		output = <div>
					<div className={ 'text-field' }>
						<label
							for="sm_custom_list_item_title"
							className={ 'blocks-base-control__label custom-control-label' }>
							<i className={ iconClass }/> Title
						</label>
						<PlainText
							id="sm_custom_list_item_title"
							value={ title }
							onChange={ this.onTitleChange }
							placeholder="Add title"
						/>
					</div>
					<div className={ 'text-field' }>
						<label
							for="sm_custom_list_item_content"
							className={ 'blocks-base-control__label custom-control-label' }>Content</label>
						<RichText
							label="Content"
							id="sm_custom_list_item_content"
							tagName="p"
							className={ 'sm-custom-list-item-content-field' }
							onChange={ this.onContentChange }
							value={ content }
							placeholder="Add content"
						/>
					</div>
				</div>;

		return [
			!! isSelected && (<InspectorControls key='inspector'>
				<PanelBody title={'Colors'} className={'editor-panel-color-settings'}>
					<BaseControl
						className="sm-colorpalette-wrapper editor-color-palette-control"
						label={
							<Fragment>
								{ "Bullet color" }
								{ iconBgColor && (
									<ColorIndicator
										colorValue={ iconBgColor }
									/>
								) }
							</Fragment>
						}>
						<ColorPalette
							className="sm-colorpalette editor-color-palette-control__color-palette"
							colors={ smBgIconColors }
							value={ iconBgColor }
							onChange={ this.onIconBgColorChange }
							disableCustomColors={ true }
						/>
					</BaseControl>
					<BaseControl
						className="sm-colorpalette-wrapper editor-color-palette-control"
						label={
							<Fragment>
								{ "Icon color" }
								{ iconColor && (
									<ColorIndicator
										colorValue={ iconColor }
									/>
								) }
							</Fragment>
						}>
						<ColorPalette
							className="sm-colorpalette editor-color-palette-control__color-palette"
							colors={ smIconColors }
							value={ iconColor }
							onChange={ this.onIconColorChange }
							disableCustomColors={ true }
						/>
					</BaseControl>
				</PanelBody>
                <PanelBody title={ 'Icon' } initialOpen={ false }>
                	<RadioControl
                		className={ 'sm-icon-list' }
				        selected={ this.props.attributes.icon }
				        options={ smIcons }
				        onChange={ this.onIconChange }
				    />
                </PanelBody>
			</InspectorControls> ),
			<div className={ itemClassName }>
				{ output }
			</div>
		]
	}
}

registerBlockType( 'sm/custom-list-item', {
	title: __( 'SM Custom List Item' ),
	icon: 'feedback',
	category: 'common',
	keywords: [
		__( 'SM Custom List Item' ),
	],
	description: __( 'Add custom list item' ),
	parent: ['sm/custom-list'],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		title: {
			type: 'string',
			selector: 'h3',
		},
		icon: {
			type: 'string',
			default: 'add-user',
		},
		iconBgColor: {
			type: 'string',
			default: '#009cde',
		},
		iconColor: {
			type: 'string',
			default: '#f0f0f0',
		}
	},

	edit: smCustomListItem,

	save: function( props ) {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				title,
				content,
				icon = 'add-user',
				iconBgColor = "#009cde",
				iconColor = "#f0f0f0"
			} = {}
		} = props;

		const bgObject = getColorObjectByColorValue(smBgIconColors, iconBgColor);
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue(smIconColors, iconColor);
		const colorSlug = colorObject && colorObject.slug;

		const color = (colorSlug === 'tr-white') ? '' : `-${colorSlug}`;

		const iconClass = `icon icon-${icon}${color} icon-bcolor-${bgSlug}`;

		const itemClassName = classnames(
			className,
			(icon !== 'none') && 'has-icon'
		);

		return (
			<li className={ itemClassName }>
				{ icon && icon !== 'none' && <i className={ iconClass }/> }
				{ title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3> }
				{ content && <p dangerouslySetInnerHTML={{ __html: content }}></p> }
			</li>
		);
	},
} );