/**
 * BLOCK: SM Page Card
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	PlainText,
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
// const { withState } = wp.compose;

class smSelectedPage extends Component {
	// Method for setting the initial state.
	static getInitialState( selectedPost ) {
		return {
			posts: [],
			selectedPost: selectedPost,
			post: {},
		};
	}
	// Constructing our component. With super() we are setting everything to 'this'.
	// Now we can access the attributes with this.props.attributes
	constructor() {
		super( ...arguments );
	    this.state = this.constructor.getInitialState( this.props.attributes.selectedPost );
	    // Bind so we can use 'this' inside the method.
	    this.getOptions = this.getOptions.bind(this);
	    // Load posts.

    	this.getOptions();

		// Bind it.
		this.onSelectPostChange = this.onSelectPostChange.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBgColorChange = this.onBgColorChange.bind(this);
		this.onIconChange = this.onIconChange.bind(this);
		this.onIconColorChange = this.onIconColorChange.bind(this);
	}

	/**
	* Loading Posts
	*/
	getOptions() {
		const that = this;

		wp.api.loadPromise.done( function() { ( new wp.api.collections.Pages() ).fetch( { data: { per_page: 25 } } ).then( ( posts ) => {
				if( posts && 0 !== that.state.selectedPost ) {
					// If we have a selected Post, find that post and add it.
					const post = posts.find( ( item ) => { return item.id == that.state.selectedPost } );
					// This is the same as { post: post, posts: posts }
					that.setState({ post, posts });
				} else {
					that.setState({ posts });
				}
			});
		});
	}

	onSelectPostChange ( value ) {
		// Find the post
		const post = this.state.posts.find( ( item ) => { return item.id == parseInt( value ) } );
		// Set the state
		this.state.selectedPost = parseInt(value);
		this.state.post = post;
		this.setState(this.state);
		// Set the attributes
		this.props.setAttributes( {
			selectedPost: parseInt( value ),
			title: post.title.rendered,
			content: post.excerpt.rendered,
			link: post.link,
		});
	}

	onTitleChange( value ) {
		this.props.setAttributes({ shortTitle: value });
	}

	onBgColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes({ blockBgColor: value });
	}

	onIconChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes({ icon: value });
	}

	onIconColorChange ( value ) {
		this.setState( { value } );
		this.props.setAttributes({ iconColor: value });
	}


	render() {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				shortTitle = '',
				blockBgColor = "#a9a7b3",
				icon = 'add-user',
				iconColor = "#f0f0f0"
			} = {}
		} = this.props;

		let options = [ { value: 0, label: __( 'Select a Page' ) } ];
		let output  = __( 'Loading Pages...' );

		this.props.className += ' loading';

		if( this.state.posts.length > 0 ) {
			const loading = __( 'Please choose one of %d pages.' );
			output = <p className="loading-choose" dangerouslySetInnerHTML={{ __html: loading.replace( '%d', this.state.posts.length ) }}></p>;
			this.state.posts.forEach((post) => {
				options.push({value:post.id, label:post.title.rendered});
			});
		} else {
			output = <p className="no-pages" dangerouslySetInnerHTML={{ __html: __( 'No pages found. Please create some first.' ) }}></p>;
		}

		const bgObject = getColorObjectByColorValue(smBgColors, blockBgColor);
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue(smIconColors, iconColor);
		const colorSlug = colorObject && colorObject.slug;

		const color = (colorSlug === 'tr-white') ? '' : `-${colorSlug}`;

		const classNameOuter = classnames(
			className,
			bgSlug && `has-bgcolor-${bgSlug}`,
			isSelected && 'is-selected'
		);
		const classNameInner = classnames(
			'page-block',
			icon && `has-icon`
		);

		const iconClass = bgSlug && `icon icon-${icon}${color} icon-bcolor-${bgSlug}`;

		// Checking if we have anything in the object
		if ( this.state.post.hasOwnProperty('title') ) {
			let finalTitle = shortTitle || this.state.post.title.rendered;

			output = <div className={{ classNameInner }} style={{ backgroundColor: blockBgColor }}>
						<i className={ iconClass }/>
			 			<h3 className="page-block-title" dangerouslySetInnerHTML={{ __html: finalTitle }}></h3>
			 			<div className="page-block-excerpt" dangerouslySetInnerHTML={{ __html: this.state.post.excerpt.rendered }}></div>
			 		</div>;
		}

		return [
			!! isSelected && ( <InspectorControls key='inspector'>
				<PanelBody>
					<SelectControl
						onChange={ this.onSelectPostChange }
						value={ this.props.attributes.selectedPost }
						label={ __( 'Select a Page' ) }
						options={ options }
					/>
					<div className="text-field">
						<label for="sm_page_block_short_title" className="blocks-base-control__label custom-control-label">Short title</label>
						<PlainText
							id="sm_page_block_short_title"
							value={ shortTitle }
							onChange={ this.onTitleChange }
						/>
					</div>
				</PanelBody>
				<PanelBody title={'Colors'} className={'editor-panel-color-settings'}>
					<BaseControl
						className="sm-colorpalette-wrapper editor-color-palette-control"
						label={
							<Fragment>
								{ "Bar color" }
								{ blockBgColor && (
									<ColorIndicator
										colorValue={ blockBgColor }
									/>
								) }
							</Fragment>
						}>
						<ColorPalette
							className="sm-colorpalette editor-color-palette-control__color-palette"
							colors={ smBgColors }
							value={ blockBgColor }
							onChange={ this.onBgColorChange }
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
			<div className={ classNameOuter }>
				{output}
			</div>
		]
	}
}

registerBlockType( 'sm/page-card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'SM Page' ), // Block title.
	icon: 'external', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'SM Page Card' ),
	],
	description: __( 'Add a card of another page' ),
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'div.page-block-excerpt',
		},
		title: {
			type: 'string',
			selector: 'h3'
		},
		link: {
			type: 'string',
			selector: 'a'
		},
		selectedPost: {
			type: 'number',
			default: 0,
		},
		shortTitle: {
			type: 'string'
		},
		blockBgColor: {
			type: 'string',
			default: '#a9a7b3',
		},
		icon: {
			type: 'string',
			default: 'add-user'
		},
		iconColor: {
			type: 'string',
			default: '#f0f0f0'
		}
	},

	edit: smSelectedPage,

	save: function( props ) {
		const {
			className,
			setAttributes,
			attributes: {
				blockBgColor = '#a9a7b3',
				title,
				content,
				shortTitle = '',
				icon = 'add-user',
				iconColor = "#f0f0f0"
			} = {}
		} = props;

		let finalTitle = props.attributes.shortTitle || title;

		const bgObject = getColorObjectByColorValue(smBgColors, blockBgColor);
		const bgSlug = bgObject && bgObject.slug;

		const colorObject = getColorObjectByColorValue(smIconColors, iconColor);
		const colorSlug = colorObject && colorObject.slug;

		const color = (colorSlug === 'tr-white') ? '' : `-${colorSlug}`;

		const classNameOuter = classnames(
			className,
			bgSlug && `has-bgcolor-${bgSlug}`
		);
		const classNameInner = classnames('page-block', 'has-icon');

		const iconClass = bgSlug && `icon icon-${icon}${color} icon-bcolor-${bgSlug}`;

	    return (
			<div className={ classNameOuter }>
				<div className={ classNameInner }>
					<i className={ iconClass }/>
					<h3 className="page-block-title" dangerouslySetInnerHTML={ { __html: finalTitle } }></h3>
					<div className="page-block-excerpt" dangerouslySetInnerHTML={ { __html: content } }></div>
				</div>
			</div>
	    );
	},
} );