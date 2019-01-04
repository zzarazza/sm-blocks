/**
 * BLOCK: SM Recent Items
 *
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;

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
	ColorIndicator,
	ServerSideRender
} = wp.components;

const { Component, Fragment } = wp.element;

registerBlockType( 'sm/recent-items', {
    title: __( 'SM Recent Items' ),
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
		title: {
			type: 'string',
			default: '',
		},
	},

    edit: function( props ) {
        const {
			setAttributes,
			isSelected,
			attributes: {
				title = "",
			} = {}
		} = props;

        return [
            (<ServerSideRender
                block="sm/recent-items"
                attributes={ props.attributes }
            />),
            !! isSelected && ( <InspectorControls key='inspector'>
				<PanelBody>
					<div className="text-field">
						<label for="sm_page_block_short_title" className="blocks-base-control__label custom-control-label">Block title</label>
						<PlainText
							id="sm_recent_items_block_title"
							value={ title }
							onChange={ ( value ) => { props.setAttributes( { title: value } ) } }

						/>
					</div>
				</PanelBody>
			</InspectorControls> )
        ];
    },

    save( { attributes } ) {
    	const { title } = attributes;

        // Rendering in PHP
        return null;
    },
} );