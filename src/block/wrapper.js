/**
 * BLOCK: SM Wrapper
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	InspectorControls
} = wp.editor;
const {
	PanelBody,
	SelectControl
} = wp.components;
const { Component } = wp.element;
const { withState } = wp.compose;

const ALLOWED_BLOCKS = [ 'sm/page-card' ];

class smWrapper extends Component {
	constructor() {
		super( ...arguments );
		this.onSelectChange = this.onSelectChange.bind(this);
	}

	onSelectChange ( value ) {

		this.setState(this.state);
		// Set the attributes
		this.props.setAttributes( {
			maxInRow: value
		});
	}

	render() {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				maxInRow
			} = {}
		} = this.props;

		const wrapperClassName = classnames(
			className,
			isSelected && 'is-selected'
		);

		return [
			!! isSelected && (<InspectorControls key='inspector'>
				<PanelBody title={ 'Options' }>
					<div className={ 'components-base-control' }>
						<SelectControl
					        label="Max items in row on desktop"
					        value={ maxInRow }
					        options={ [
					            { label: '1', value: '1' },
					            { label: '2', value: '2' },
					            { label: '3', value: '3' },
					            { label: '4', value: '4' },
					        ] }
					        onChange={ this.onSelectChange }
					    />
                	</div>
                </PanelBody>
			</InspectorControls>),
			<div className={ wrapperClassName }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		];
	}
}

registerBlockType( 'sm/wrapper', {
	title: __( 'SM Wrapper' ),
	icon: 'grid-view',
	category: 'layout',
	keywords: [
		__( 'SM Wrapper' ),
	],
	description: __( 'Add a wrapper' ),
	attributes: {
		maxInRow: {
			type: 'string',
			default: '3',
		}
	},

	edit: smWrapper,

	save: function( props ) {
		const {
			className,
			setAttributes,
			attributes: {
				maxInRow
			} = {}
		} = props;

		const wrapperClassName = classnames(
			className,
			maxInRow && `max-in-row-${maxInRow}`
		);

		return (
			<div className={ wrapperClassName }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );