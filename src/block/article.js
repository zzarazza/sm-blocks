/**
 * BLOCK: SM Article
 *
 */
import classnames from 'classnames';
// import PostSelector from 'post-selector';
import PostSelector from './post-selector.js';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;
const { withState } = wp.compose;

const {
	InspectorControls,
	PlainText,
	ColorPalette,
	getColorObjectByColorValue
} = wp.editor;

const {
	RangeControl,
	PanelBody,
	RadioControl,
	BaseControl,
	ColorIndicator,
	ServerSideRender,
	Spinner,
	ToggleControl
} = wp.components;

const { Component, Fragment, RawHTML } = wp.element;

registerBlockType( 'sm/article', {
    title: __( 'SM Article' ),
    icon: 'id-alt',
    category: 'widgets',
    attributes: {
	    posts: {
			type: 'array',
			default: []
		},
		comingSoon: {
			type: 'boolean',
			default: false
		},
		bgColor: {
			type: 'string',
			default: '#009cde'
		}
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

    edit ({ className, isSelected, attributes, setAttributes }) {
    	const bgObject = getColorObjectByColorValue( smBgColors, attributes.bgColor );
		const bgSlug = bgObject && bgObject.slug;

    	const articleClassName = classnames(
			className,
			bgSlug && `bcolor-${bgSlug}`,
			attributes.comingSoon && `is-coming-soon`
		);

		let output = "";

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Select article">
						<PostSelector
							onPostSelect={
								post => {
									attributes.posts.push(post);
									setAttributes( { posts: [...attributes.posts] } );
								}
							}
							posts={ attributes.posts }
							onChange={
								newValue => {
									setAttributes( { posts: [...newValue] } );
								}
							}
							postType={ 'page' }
							limit="1"
						/>
					</PanelBody>
					<BaseControl>
						<ToggleControl
							label={ __( 'Is coming soon?' ) }
							checked={ !! attributes.comingSoon }
							onChange={
								newValue => {
									setAttributes( { comingSoon: newValue } );
								}
							}
						/>
					</BaseControl>
					<PanelBody title={'Colors'} className={'editor-panel-color-settings'}>
						<BaseControl
							className="sm-colorpalette-wrapper editor-color-palette-control"
							label={
								<Fragment>
									{ "Background color" }
									{ attributes.bgColor && (
										<ColorIndicator
											colorValue={ attributes.bgColor }
										/>
									) }
								</Fragment>
							}>
							<ColorPalette
								className="sm-colorpalette editor-color-palette-control__color-palette"
								colors={ smBgColors }
								value={ attributes.bgColor }
								onChange={
									newValue => {
										setAttributes( { bgColor: newValue } );
									}
								}
								disableCustomColors={ true }
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
				<article className={ articleClassName }>
					{ attributes.posts.map(post => (
						<div>
							<p className="by-author">by {post.author}</p>
							<h3>{ post.title }</h3>
							<p className="read-more">{ attributes.comingSoon ? 'Coming soon' : 'Read more' }</p>
						</div>
					))}
				</article>
			</Fragment>
		);
	},

    save ( { className, isSelected, attributes } ) {
    	const bgObject = getColorObjectByColorValue( smBgColors, attributes.bgColor );
		const bgSlug = bgObject && bgObject.slug;

    	const articleClassName = classnames(
			className,
			bgSlug && `bcolor-${bgSlug}`,
			attributes.comingSoon && `is-coming-soon`
		);

    	return (
    		<article className={ articleClassName }>
				{ attributes.posts.map(post => (
					attributes.comingSoon ?
						<div>
							<p className="by-author">by {post.author}</p>
							<h3>{ post.title }</h3>
							<p className="read-more">Coming soon</p>
						</div>
					:
						 <a href={post.url}>
							<p className="by-author">by {post.author}</p>
							<h3>{ post.title }</h3>
							<p className="read-more">Read more</p>
						</a>
				))}
			</article>
		)
	}
});