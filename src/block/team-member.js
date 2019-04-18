/**
 * BLOCK: SM Team
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
	Spinner
} = wp.components;

const { Component, Fragment, RawHTML } = wp.element;

registerBlockType( 'sm/team-member', {
    title: __( 'SM Team Member' ),
    icon: 'id-alt',
    category: 'widgets',
    attributes: {
    posts: {
		type: 'array',
			default: []
		},
	},

    edit ({ attributes, setAttributes }) {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Select person">
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
							postType={ 'management-team' }
							limit="2"
						/>
					</PanelBody>
				</InspectorControls>
				<div>
					{ attributes.posts.map(post => (
						<div className="author">
							<div className="author-thumb">{ post.thumb && <img src={ post.thumb } /> }</div>
							<div className="author-descr">
								<h3>{post.title}</h3>
								<RawHTML>{post.excerpt}</RawHTML>
							</div>
						</div>
					))}
				</div>
			</Fragment>
		);
	},

    save ( { attributes } ) {
    	return (
    		<div>
				{ attributes.posts.map(post => (
					<div className="author">
						<div className="author-thumb">{ post.thumb && <img src={ post.thumb } /> }</div>
						<div className="author-descr">
							<h3>{post.title}</h3>
							<RawHTML>{post.excerpt}</RawHTML>
						</div>
					</div>
				))}
			</div>
		)
	}
});