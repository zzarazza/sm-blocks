/**
 * BLOCK: SM Team
 *
 */
import classnames from 'classnames';
import PostSelector from '@vermilion/post-selector';

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

const { Component, Fragment } = wp.element;

registerBlockType( 'sm/team-member', {
    title: __( 'SM Team Member' ),
    icon: 'id-alt',
    category: 'widgets',

    edit: function( props ) {

		const {
			setAttributes,
			isSelected
		} = props;

		return (<ServerSideRender
                block="sm/team-member"
            />);
	},

    save() {
        // Rendering in PHP
        return null;
    },
} );