/**
 * BLOCK: SM Custom List
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {	InnerBlocks } = wp.editor;
const { Component } = wp.element;

const ALLOWED_BLOCKS = [ 'sm/custom-list-item' ];

class smCustomList extends Component {
	constructor() {
		super( ...arguments );
	}
	render() {
		const {
			className,
			setAttributes,
			isSelected
		} = this.props;

		const listClassName = classnames(
			className,
			isSelected && 'is-selected'
		);

		return (
			<div className={ listClassName }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		);
	}
}

registerBlockType( 'sm/custom-list', {
	title: __( 'SM Custom List' ),
	icon: 'list-view',
	category: 'common',
	keywords: [
		__( 'SM Custom List' ),
		__( 'list' ),
	],

	edit: smCustomList,

	save: function( props ) {
		const {
			className
		} = props;

		return (
			<ul className={ className }>
				<InnerBlocks.Content />
			</ul>
		);
	},
} );