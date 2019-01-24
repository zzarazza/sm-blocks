/**
 * BLOCK: SM Event Details
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;

const {
	ServerSideRender
} = wp.components;

function smEventLocation (props) {
	const {
		className,
		isSelected,
		attributes: {
			eventID
		} = {}
	} = props;

	return (<ServerSideRender
            block="sm/event-location"
            attributes={{
            	eventID: Number(props.postID)
            }}
        />);
}

registerBlockType( 'sm/event-location', {
	title: __( 'SM Event Location' ),
	icon: 'feedback',
	category: 'common',
	keywords: [
		__( 'event' ),
		__( 'location' ),
	],
	description: __( 'Show event location' ),
	attributes: {
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
		} )( smEventLocation ),

	save( { attributes } ) {
    	const { eventID } = attributes;

		return null;
	},
} );

function smEventDates (props) {
	const {
		className,
		isSelected,
		attributes: {
			eventID
		} = {}
	} = props;

	return (<ServerSideRender
            block="sm/event-dates"
            attributes={{
            	eventID: Number(props.postID)
            }}
        />);
}

registerBlockType( 'sm/event-dates', {
	title: __( 'SM Event Dates' ),
	icon: 'feedback',
	category: 'common',
	keywords: [
		__( 'event' ),
		__( 'location' ),
	],
	description: __( 'Show event dates' ),
	attributes: {
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
		} )( smEventDates ),

	save( { attributes } ) {
    	const { eventID } = attributes;

		return null;
	},
} );