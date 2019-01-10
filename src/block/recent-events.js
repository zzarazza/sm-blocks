/**
 * BLOCK: SM Recent News
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
	InspectorControls,
	PlainText
} = wp.editor;
const {
	RangeControl,
	PanelBody,
	BaseControl,
	ServerSideRender
} = wp.components;

registerBlockType( 'sm/recent-events', {
    title: __( 'SM Recent Events' ),
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
		title: {
			type: 'string',
			default: '',
		},
		postsToShow: {
			type: 'number',
			default: 2,
		},
	},

    edit: function( props ) {

		const {
			setAttributes,
			isSelected,
			attributes: {
				title = "",
				postsToShow = 2
			} = {}
		} = props;

		return [
			(<ServerSideRender
                block="sm/recent-events"
                attributes={ props.attributes }
            />),
            !! isSelected && ( <InspectorControls key='inspector'>
			<PanelBody>
				<BaseControl
			        id="sm_recent_items_block_title"
			        label="Number of events"
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
						id="sm_recent_items_block_title"
						value={ title }
						onChange={ ( value ) => { props.setAttributes( { title: value } ) } }
					/>
				</BaseControl>
			</PanelBody>
		</InspectorControls>)
		];
	},

    save( { attributes } ) {
    	const { title, postsToShow } = attributes;

        // Rendering in PHP
        return null;
    },
} );