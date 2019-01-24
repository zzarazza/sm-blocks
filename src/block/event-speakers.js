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
	RichText,
	TextControl,
	getCurrentPostId
} = wp.editor;

const { withSelect } = wp.data;

const {
	PanelBody,
	BaseControl,
	ServerSideRender,
	RangeControl
} = wp.components;

const { Component, Fragment, compose } = wp.element;

function smEventSpeakers (props) {
	const {
		className,
		setAttributes,
		isSelected,
		attributes: {
			title,
			postsToShow
		} = {}
	} = props;

	return [
		(<ServerSideRender
            block="sm/event-speakers"
            attributes={{
            	...props.attributes,
            	eventID: Number(props.postID)
            }}
        />),
        !! isSelected && ( <InspectorControls key='inspector'>
		<PanelBody>
			<BaseControl
		        id="sm_event_speakers_block_number"
		        label="Max number of speakers to show"
		    >
				<RangeControl
			        value={ postsToShow }
			        onChange={ ( value ) => props.setAttributes( { postsToShow: value } ) }
			        min={ 1 }
			        max={ 5 }
			    />

			</BaseControl>
			<BaseControl
		        id="sm_recent_items_block_title"
		        label="Block title"
		    >
				<PlainText
					id="sm_event_speakers_block_title"
					value={ title }
					onChange={ ( value ) => { props.setAttributes( { title: value } ) } }
				/>
			</BaseControl>
		</PanelBody>
	</InspectorControls>)
	];
}

registerBlockType( 'sm/event-speakers', {
	title: __( 'SM Event Speakers' ),
	icon: 'megaphone',
	category: 'widgets',
	keywords: [
		__( 'SM Event Speakers' ),
	],
	description: __( 'Speakers for the event' ),
	attributes: {
		title: {
			type: 'string',
			selector: 'h3',
			default: 'Featuring'
		},
		postsToShow: {
			type: 'number',
			default: 3,
		},
		eventID: {
			type: 'number'
		},
	},

	edit: withSelect( ( select ) => {
			const {
				getCurrentPostId
			} = select( 'core/editor' );
			return {
				postID: getCurrentPostId()
		};
		} )( smEventSpeakers ),

	save( { attributes } ) {
    	const { title, postsToShow, eventID } = attributes;

		return null;
	},
} );