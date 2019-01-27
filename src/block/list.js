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

		let output = "List";

		if ('undefined' !== typeof this.props.insertBlocksAfter) {
			output = <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />;
		}

		return (
			<div className={ listClassName }>
				{ output }
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
		__( 'custom list' ),
	],
	styles: [
		{ name: 'default', label: __( 'Default' ), isDefault: true },
		{ name: 'spacing-small', label: __( 'Small' ) },
		{ name: 'spacing-medium', label: __( 'Medium' ) },
		{ name: 'spacing-large', label: __( 'Large' ) },
		{ name: 'spacing-xlarge', label: __( 'XLarge' ) },
		{ name: 'spacing-xxlarge', label: __( '2XLarge' ) },
		{ name: 'spacing-none', label: __( 'None' ) },
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