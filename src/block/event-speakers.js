/**
 * BLOCK: SM Event Speakers
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	PlainText,
	RichText
} = wp.editor;

const {
	SelectControl,
	PanelBody,
	BaseControl
} = wp.components;

const { Component, Fragment } = wp.element;

class smEventSpeakers extends Component {
	constructor() {
		super( ...arguments );
	}

	render () {
		const {
			className,
			setAttributes,
			isSelected,
			attributes: {
				speakers,
				title = "Featuring",
				number = 3,
			} = {}
		} = this.props;

		return [
			(<ServerSideRender
                block="sm/event-speakers"
                attributes={ props.attributes }
            />),
			!! isSelected && (<InspectorControls key='inspector'>
				<PanelBody>
					<BaseControl>
						<TextControl
							label={__( 'Title', 'systemorph' )}
							value={ title }
							onChange={( newValue ) => {
								setAttributes( { title: newValue } );
							}}
						/>
					</BaseControl>
					<BaseControl>
						<TextControl
							label={__( 'Max number', 'systemorph' )}
							value={ number }
							onChange={( newValue ) => {
								setAttributes( { number: newValue } );
							}}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls> );
		]
	}
}

registerBlockType( 'sm/event-speakers', {
	title: __( 'SM Event Speakers' ),
	icon: 'feedback',
	category: 'widget',
	keywords: [
		__( 'SM Event Speakers' ),
	],
	description: __( 'Speakers for the event' ),
	attributes: {
		speakers: {
			type: 'string',
			source: 'meta',
			meta: 'event_speakers',
		},
		title: {
			type: 'string',
			selector: 'h3',
		},
		number: {
			type: 'number',
			default: 3,
		},
	},

	edit: smEventSpeakers,

	save() {
		return null;
	},
} );