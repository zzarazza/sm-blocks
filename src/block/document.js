/**
 * BLOCK: sm-document-options
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import classnames from 'classnames';

const { __ } = wp.i18n;
const {
	Fragment,
	Component
} = wp.element;
const { compose } = wp.compose;
const {
	withSelect,
	withDispatch
} = wp.data;
const {
	PluginSidebar,
	PluginSidebarMoreMenuItem
} = wp.editPost;
const {
	registerPlugin,
	withPluginContext
} = wp.plugins;
const {
	ColorPalette,
	getColorClassName,
	getColorObjectByColorValue,
	PlainText
} = wp.editor;
const {
	PanelBody,
	RadioControl,
	BaseControl,
	ColorIndicator
} = wp.components;

const reviseData = (oldData, newData) => Object
	.keys(newData)
	.reduce((prev, key) => {
		if (oldData[key] === newData[key]) {
			return prev;
		}

		return {
			...prev,
			[key]: newData[key],
		};
	}, {});

function smDocumentOptions({ meta, oldMeta, onUpdateIcon, onUpdateIconBColor, onUpdateIconColor }) {
  return (
  	<Fragment>
		<PluginSidebarMoreMenuItem target="sm-document-options-sidebar">
			Page options
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sm-document-options-sidebar"
			title="Page options"
		>
			<PanelBody title={'Colors'} className={'editor-panel-color-settings'}>
				<BaseControl
					className="sm-colorpalette-wrapper editor-color-palette-control"
					label={
						<Fragment>
							{ "Bullet color" }
							{ meta.sm_page_icon_bcolor && (
								<ColorIndicator
									colorValue={ meta.sm_page_icon_bcolor }
								/>
							) }
						</Fragment>
					}>
					<ColorPalette
						className="sm-colorpalette editor-color-palette-control__color-palette"
						colors={ smBgIconColors }
						value={ meta.sm_page_icon_bcolor }
						onChange={ ( value ) => onUpdateIconBColor(value, meta, oldMeta) }
					/>
				</BaseControl>
				<BaseControl
					className="sm-colorpalette-wrapper editor-color-palette-control"
					label={
						<Fragment>
							{ "Icon color" }
							{ meta.sm_page_icon_color && (
								<ColorIndicator
									colorValue={ meta.sm_page_icon_color }
								/>
							) }
						</Fragment>
					}>
					<ColorPalette
						className="sm-colorpalette editor-color-palette-control__color-palette"
						colors={ smIconColors }
						value={ meta.sm_page_icon_color }
            			onChange={ ( value ) => onUpdateIconColor(value, meta, oldMeta) }
						disableCustomColors={ true }
					/>
				</BaseControl>
			</PanelBody>
            <PanelBody title={ 'Icon' } initialOpen={ false }>
            	<RadioControl
            		className={ 'sm-icon-list' }
			        selected={ meta.sm_page_icon }
			        options={ smIcons }
			        onChange={ (value) => onUpdateIcon(value, meta, oldMeta) }
			    />
            </PanelBody>
		</PluginSidebar>
	</Fragment>
  );
}

const plugin = compose([
  withSelect((select) => {
		const postMeta = select('core/editor').getEditedPostAttribute('meta');
		const oldPostMeta = select('core/editor').getCurrentPostAttribute('meta');

		return {
			meta: { ...oldPostMeta, ...postMeta },
			oldMeta: oldPostMeta,
		};
	}),
  withDispatch((dispatch) => ({
    onUpdateIcon(value, newMeta, oldMeta) {
    	const meta = {
			...reviseData(oldMeta, newMeta),
			sm_page_icon: value,
		};
      	dispatch('core/editor').editPost({ meta } );
    },
	onUpdateIconBColor(value, newMeta, oldMeta){
		const meta = {
			...reviseData(oldMeta, newMeta),
			sm_page_icon_bcolor: value,
		};

		dispatch("core/editor").editPost({ meta })
	},
	onUpdateIconColor(value, newMeta, oldMeta){
		const meta = {
			...reviseData(oldMeta, newMeta),
			sm_page_icon_color: value,
		};

		dispatch("core/editor").editPost({ meta })
	}
  })),
])(smDocumentOptions);

registerPlugin( 'sm-document-options', {
	icon: 'art',
	render: plugin,
} );