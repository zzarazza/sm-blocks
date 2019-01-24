!function(e){function t(n){if(o[n])return o[n].exports;var l=o[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,o){var n,l;!function(){"use strict";function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===l)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(o.default=o,e.exports=o):(n=[],void 0!==(l=function(){return o}.apply(t,n))&&(e.exports=l))}()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),l=(o.n(n),o(3)),r=(o.n(l),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15),o(16));o.n(r)},function(e,t){},function(e,t){},function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e){var t=e.meta,o=e.oldMeta,n=e.onUpdateIcon,l=e.onUpdateIconBColor,r=e.onUpdateIconColor;return wp.element.createElement(s,null,wp.element.createElement(g,{target:"sm-document-options-sidebar"},"Page options"),wp.element.createElement(d,{name:"sm-document-options-sidebar",title:"Page options"},wp.element.createElement(C,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(_,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(s,null,"Bullet color",t.sm_page_icon_bcolor&&wp.element.createElement(k,{colorValue:t.sm_page_icon_bcolor}))},wp.element.createElement(h,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgIconColors,value:t.sm_page_icon_bcolor,onChange:function(e){return l(e,t,o)}})),wp.element.createElement(_,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(s,null,"Icon color",t.sm_page_icon_color&&wp.element.createElement(k,{colorValue:t.sm_page_icon_color}))},wp.element.createElement(h,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:t.sm_page_icon_color,onChange:function(e){return r(e,t,o)},disableCustomColors:!0}))),wp.element.createElement(C,{title:"Icon",initialOpen:!1},wp.element.createElement(y,{className:"sm-icon-list",selected:t.sm_page_icon,options:smIcons,onChange:function(e){return n(e,t,o)}}))))}var r=o(0),a=(o.n(r),wp.i18n.__,wp.element),s=a.Fragment,i=(a.Component,wp.compose.compose),c=wp.data,p=c.withSelect,m=c.withDispatch,u=wp.editPost,d=u.PluginSidebar,g=u.PluginSidebarMoreMenuItem,b=wp.plugins,f=b.registerPlugin,w=(b.withPluginContext,wp.editor),h=w.ColorPalette,v=(w.getColorClassName,w.getColorObjectByColorValue,w.PlainText,wp.components),C=v.PanelBody,y=v.RadioControl,_=v.BaseControl,k=v.ColorIndicator,E=function(e,t){return Object.keys(t).reduce(function(o,l){return e[l]===t[l]?o:Object.assign({},o,n({},l,t[l]))},{})};f("sm-document-options",{icon:"art",render:i([p(function(e){var t=e("core/editor").getEditedPostAttribute("meta"),o=e("core/editor").getCurrentPostAttribute("meta");return{meta:Object.assign({},o,t),oldMeta:o}}),m(function(e){return{onUpdateIcon:function(t,o,n){var l=Object.assign({},E(n,o),{sm_page_icon:t});e("core/editor").editPost({meta:l})},onUpdateIconBColor:function(t,o,n){var l=Object.assign({},E(n,o),{sm_page_icon_bcolor:t});e("core/editor").editPost({meta:l})},onUpdateIconColor:function(t,o,n){var l=Object.assign({},E(n,o),{sm_page_icon_color:t});e("core/editor").editPost({meta:l})}}})])(l)})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor,u=m.InnerBlocks,d=m.InspectorControls,g=wp.components,b=g.PanelBody,f=g.SelectControl,w=wp.element.Component,h=(wp.compose.withState,["sm/page-card"]),v=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSelectChange=e.onSelectChange.bind(e),e}return r(t,e),i(t,[{key:"onSelectChange",value:function(e){this.setState(this.state),this.props.setAttributes({maxInRow:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.maxInRow,r=s()(t,o&&"is-selected");return[!!o&&wp.element.createElement(d,{key:"inspector"},wp.element.createElement(b,{title:"Options"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement(f,{label:"Max items in row on desktop",value:l,options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}],onChange:this.onSelectChange})))),wp.element.createElement("div",{className:r},wp.element.createElement(u,{allowedBlocks:h}))]}}]),t}(w);p("sm/wrapper",{title:c("SM Wrapper"),icon:"grid-view",category:"layout",keywords:[c("SM Wrapper")],description:c("Add a wrapper"),attributes:{maxInRow:{type:"string",default:"3"}},edit:v,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.maxInRow,l=s()(t,n&&"max-in-row-"+n);return wp.element.createElement("div",{className:l},wp.element.createElement(u.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor,u=m.InnerBlocks,d=m.InspectorControls,g=(m.BlockControls,m.ColorPalette),b=m.getColorObjectByColorValue,f=wp.components,w=f.PanelBody,h=f.ToggleControl,v=f.BaseControl,C=f.ColorIndicator,y=wp.element,_=y.Component,k=y.Fragment,E=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onColorChange=e.onColorChange.bind(e),e.onBgColorChange=e.onBgColorChange.bind(e),e.toggleBoxShadow=e.toggleBoxShadow.bind(e),e.toggleBorderRadius=e.toggleBorderRadius.bind(e),e.toggleNoBottomPadding=e.toggleNoBottomPadding.bind(e),e}return r(t,e),i(t,[{key:"onColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({textColor:e})}},{key:"onBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({bgColor:e})}},{key:"toggleBoxShadow",value:function(){var e=this.props,t=e.attributes;(0,e.setAttributes)({boxShadow:!t.boxShadow})}},{key:"toggleBorderRadius",value:function(){var e=this.props,t=e.attributes;(0,e.setAttributes)({borderRadius:!t.borderRadius})}},{key:"toggleNoBottomPadding",value:function(){var e=this.props,t=e.attributes;(0,e.setAttributes)({noBottomPadding:!t.noBottomPadding})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.bgColor,r=void 0===l?"":l,a=n.textColor,i=void 0===a?"#101f30":a,p=n.boxShadow,m=n.borderRadius,f=n.noBottomPadding,y=b(smBgColors,r),_=y&&y.slug,E=b(smIconColors,i),S=E&&E.slug,B=s()(t,o&&"is-selected",_&&"bcolor-"+_,S&&"color-"+S,p&&"has-box-shadow",m&&"has-border-radius",f&&"has-bottom-padding-0"),I="Block";return"undefined"!==typeof this.props.insertBlocksAfter&&(I=wp.element.createElement(u,null)),[!!o&&wp.element.createElement(d,{key:"inspector"},wp.element.createElement(w,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(k,null,"Background color",r&&wp.element.createElement(C,{colorValue:r}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgColors,value:r,onChange:this.onBgColorChange,disableCustomColors:!0})),wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(k,null,"Text color",i&&wp.element.createElement(C,{colorValue:i}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:i,onChange:this.onColorChange,disableCustomColors:!0}))),wp.element.createElement(w,{title:"Details",className:"editor-panel-detail-settings"},wp.element.createElement(v,null,wp.element.createElement(h,{label:c("Shadow"),checked:!!p,onChange:this.toggleBoxShadow})),wp.element.createElement(v,null,wp.element.createElement(h,{label:c("Border radius"),checked:!!m,onChange:this.toggleBorderRadius})),wp.element.createElement(v,null,wp.element.createElement(h,{label:c("Remove bottom padding"),checked:!!f,onChange:this.toggleNoBottomPadding})))),wp.element.createElement("section",{className:B},I)]}}]),t}(_);p("sm/section",{title:c("SM Section"),icon:"align-center",category:"layout",keywords:[c("SM Section")],description:c("Add content section"),supports:{align:["center","wide","full"]},attributes:{bgColor:{type:"string",default:""},textColor:{type:"string",default:"#101f30"},boxShadow:{type:"boolean",default:!1},borderRadius:{type:"boolean",default:!1},noBottomPadding:{type:"boolean",default:!1}},styles:[{name:"default",label:c("Default margin"),isDefault:!0},{name:"spacing-medium",label:c("Medium margin")},{name:"spacing-large",label:c("Large margin")}],edit:E,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.bgColor,l=void 0===n?"":n,r=o.textColor,a=void 0===r?"#101f30":r,i=o.boxShadow,c=o.borderRadius,p=o.noBottomPadding,m=b(smBgColors,l),d=m&&m.slug,g=b(smIconColors,a),f=g&&g.slug,w=s()(t,d&&"bcolor-"+d,f&&"color-"+f,i&&"has-box-shadow",c&&"has-border-radius",p&&"has-bottom-padding-0");return wp.element.createElement("section",{className:w},wp.element.createElement(u.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor.InnerBlocks,u=wp.element.Component,d=["sm/custom-list-item"],g=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=s()(t,o&&"is-selected"),l="List";return"undefined"!==typeof this.props.insertBlocksAfter&&(l=wp.element.createElement(m,{allowedBlocks:d})),wp.element.createElement("div",{className:n},l)}}]),t}(u);p("sm/custom-list",{title:c("SM Custom List"),icon:"list-view",category:"common",keywords:[c("SM Custom List"),c("list")],styles:[{name:"default",label:c("Default margin"),isDefault:!0},{name:"spacing-medium",label:c("Medium margin")},{name:"spacing-large",label:c("Large margin")}],edit:g,save:function(e){var t=e.className;return wp.element.createElement("ul",{className:t},wp.element.createElement(m.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor,u=m.InspectorControls,d=m.PlainText,g=m.RichText,b=m.ColorPalette,f=m.getColorObjectByColorValue,w=wp.components,h=(w.SelectControl,w.PanelBody),v=w.RadioControl,C=w.BaseControl,y=w.ColorIndicator,_=wp.element,k=_.Component,E=_.Fragment,S=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onContentChange=e.onContentChange.bind(e),e.onTitleChange=e.onTitleChange.bind(e),e.onIconChange=e.onIconChange.bind(e),e.onIconColorChange=e.onIconColorChange.bind(e),e.onIconBgColorChange=e.onIconBgColorChange.bind(e),e}return r(t,e),i(t,[{key:"onTitleChange",value:function(e){this.props.setAttributes({title:e})}},{key:"onContentChange",value:function(e){this.props.setAttributes({content:e})}},{key:"onIconBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconBgColor:e})}},{key:"onIconChange",value:function(e){this.setState({value:e}),this.props.setAttributes({icon:e})}},{key:"onIconColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconColor:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.content,r=n.title,a=n.icon,i=void 0===a?"add-user":a,p=n.iconBgColor,m=void 0===p?"#009cde":p,w=n.iconColor,_=void 0===w?"#f0f0f0":w,k=c("Add some content..."),S=f(smBgIconColors,m),B=S&&S.slug,I=f(smIconColors,_),P=I&&I.slug,N="tr-white"===P?"":"-"+P,T="icon icon-"+i+N+" icon-bcolor-"+B,O=s()(t,o&&"is-selected",B&&"bcolor-"+B,P&&"color-"+P,"has-icon");return k=wp.element.createElement("div",null,wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_custom_list_item_title",className:"blocks-base-control__label custom-control-label"},wp.element.createElement("i",{className:T})," Title"),wp.element.createElement(d,{id:"sm_custom_list_item_title",value:r,onChange:this.onTitleChange,placeholder:"Add title"})),wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_custom_list_item_content",className:"blocks-base-control__label custom-control-label"},"Content"),wp.element.createElement(g,{label:"Content",id:"sm_custom_list_item_content",tagName:"p",className:"sm-custom-list-item-content-field",onChange:this.onContentChange,value:l,placeholder:"Add content"}))),[!!o&&wp.element.createElement(u,{key:"inspector"},wp.element.createElement(h,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(E,null,"Bullet color",m&&wp.element.createElement(y,{colorValue:m}))},wp.element.createElement(b,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgIconColors,value:m,onChange:this.onIconBgColorChange,disableCustomColors:!0})),wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(E,null,"Icon color",_&&wp.element.createElement(y,{colorValue:_}))},wp.element.createElement(b,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:_,onChange:this.onIconColorChange,disableCustomColors:!0}))),wp.element.createElement(h,{title:"Icon",initialOpen:!1},wp.element.createElement(v,{className:"sm-icon-list",selected:this.props.attributes.icon,options:smIcons,onChange:this.onIconChange}))),wp.element.createElement("div",{className:O},k)]}}]),t}(k);p("sm/custom-list-item",{title:c("SM Custom List Item"),icon:"feedback",category:"common",keywords:[c("SM Custom List Item")],description:c("Add custom list item"),parent:["sm/custom-list"],attributes:{content:{type:"string",source:"html",selector:"p"},title:{type:"string",selector:"h3"},icon:{type:"string",default:"add-user"},iconBgColor:{type:"string",default:"#009cde"},iconColor:{type:"string",default:"#f0f0f0"}},edit:S,save:function(e){var t=e.className,o=(e.setAttributes,e.isSelected,e.attributes);o=void 0===o?{}:o;var n=o.title,l=o.content,r=o.icon,a=void 0===r?"add-user":r,i=o.iconBgColor,c=void 0===i?"#009cde":i,p=o.iconColor,m=void 0===p?"#f0f0f0":p,u=f(smBgIconColors,c),d=u&&u.slug,g=f(smIconColors,m),b=g&&g.slug,w="tr-white"===b?"":"-"+b,h="icon icon-"+a+w+" icon-bcolor-"+d,v=s()(t,"none"!==a&&"has-icon");return wp.element.createElement("li",{className:v},a&&"none"!==a&&wp.element.createElement("i",{className:h}),n&&wp.element.createElement("h3",{dangerouslySetInnerHTML:{__html:n}}),l&&wp.element.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor,u=m.InspectorControls,d=m.PlainText,g=m.ColorPalette,b=m.getColorObjectByColorValue,f=wp.components,w=f.SelectControl,h=f.PanelBody,v=f.RadioControl,C=f.BaseControl,y=f.ColorIndicator,_=wp.element,k=_.Component,E=_.Fragment,S=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state=e.constructor.getInitialState(e.props.attributes.selectedPost),e.getOptions=e.getOptions.bind(e),e.getOptions(),e.onSelectPostChange=e.onSelectPostChange.bind(e),e.onTitleChange=e.onTitleChange.bind(e),e.onBgColorChange=e.onBgColorChange.bind(e),e.onIconChange=e.onIconChange.bind(e),e.onIconColorChange=e.onIconColorChange.bind(e),e}return r(t,e),i(t,null,[{key:"getInitialState",value:function(e){return{posts:[],selectedPost:e,post:{}}}}]),i(t,[{key:"getOptions",value:function(){var e=this;return wp.api.loadPromise.done(function(){(new wp.api.collections.Pages).fetch({data:{per_page:25}}).then(function(t){if(t&&0!==e.state.selectedPost){var o=t.find(function(t){return t.id==e.state.selectedPost});e.setState({post:o,posts:t})}else e.setState({posts:t})})})}},{key:"onSelectPostChange",value:function(e){var t=this.state.posts.find(function(t){return t.id==parseInt(e)});this.state.selectedPost=parseInt(e),t?(this.state.post=t,this.setState(this.state),this.props.setAttributes({selectedPost:parseInt(e),title:t.title.rendered,content:t.excerpt.rendered,link:t.link})):this.props.setAttributes({selectedPost:parseInt(e)})}},{key:"onTitleChange",value:function(e){this.props.setAttributes({shortTitle:e})}},{key:"onBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({blockBgColor:e})}},{key:"onIconChange",value:function(e){this.setState({value:e}),this.props.setAttributes({icon:e})}},{key:"onIconColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconColor:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.shortTitle,r=void 0===l?"":l,a=n.blockBgColor,i=void 0===a?"#a9a7b3":a,p=n.icon,m=void 0===p?"add-user":p,f=n.iconColor,_=void 0===f?"#f0f0f0":f,k=[{value:0,label:c("Select a Page")}],S=c("Loading Pages...");if(this.state.posts.length>0){var B=c("Please choose one of %d pages.");S=wp.element.createElement("p",{className:"loading-choose",dangerouslySetInnerHTML:{__html:B.replace("%d",this.state.posts.length)}}),this.state.posts.forEach(function(e){k.push({value:e.id,label:e.title.rendered})})}else S=wp.element.createElement("p",{className:"no-pages",dangerouslySetInnerHTML:{__html:c("No pages found. Please create some first.")}});var I=b(smBgColors,i),P=I&&I.slug,N=b(smIconColors,_),T=N&&N.slug,O="tr-white"===T?"":"-"+T,x=s()(t,P&&"has-bgcolor-"+P,o&&"is-selected"),A=s()("page-block",m&&"has-icon"),j=P&&"icon icon-"+m+O+" icon-bcolor-"+P;if(0!==this.state.selectedPost&&this.state.post&&this.state.post.hasOwnProperty("title")){var R=r||this.state.post.title.rendered;S=wp.element.createElement("div",{className:{classNameInner:A},style:{backgroundColor:i}},wp.element.createElement("i",{className:j}),wp.element.createElement("h3",{className:"page-block-title",dangerouslySetInnerHTML:{__html:R}}),wp.element.createElement("div",{className:"page-block-excerpt",dangerouslySetInnerHTML:{__html:this.state.post.excerpt.rendered}}),wp.element.createElement("div",{className:"page-block-url"},wp.element.createElement("a",{href:this.state.post.link},"Read more")))}else if(this.state.posts.length>0){var M=c("Please choose one of %d pages.");S=wp.element.createElement("p",{className:"loading-choose",dangerouslySetInnerHTML:{__html:M.replace("%d",this.state.posts.length)}})}return[!!o&&wp.element.createElement(u,{key:"inspector"},wp.element.createElement(h,null,wp.element.createElement(w,{onChange:this.onSelectPostChange,value:this.props.attributes.selectedPost,label:c("Select a Page"),options:k}),wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_page_block_short_title",className:"blocks-base-control__label custom-control-label"},"Short title"),wp.element.createElement(d,{id:"sm_page_block_short_title",value:r,onChange:this.onTitleChange}))),wp.element.createElement(h,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(E,null,"Bar color",i&&wp.element.createElement(y,{colorValue:i}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgColors,value:i,onChange:this.onBgColorChange,disableCustomColors:!0})),wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(E,null,"Icon color",_&&wp.element.createElement(y,{colorValue:_}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:_,onChange:this.onIconColorChange,disableCustomColors:!0}))),wp.element.createElement(h,{title:"Icon",initialOpen:!1},wp.element.createElement(v,{className:"sm-icon-list",selected:this.props.attributes.icon,options:smIcons,onChange:this.onIconChange}))),wp.element.createElement("div",{className:x},S)]}}]),t}(k);p("sm/page-card",{title:c("SM Page"),icon:"external",category:"common",keywords:[c("SM Page Card")],description:c("Add a card of another page"),attributes:{content:{type:"string",source:"html",selector:"div.page-block-excerpt"},title:{type:"string",selector:"h3"},link:{type:"string",selector:"a"},selectedPost:{type:"number",default:0},shortTitle:{type:"string"},blockBgColor:{type:"string",default:"#a9a7b3"},icon:{type:"string",default:"add-user"},iconColor:{type:"string",default:"#f0f0f0"}},edit:S,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.blockBgColor,l=void 0===n?"#a9a7b3":n,r=o.title,a=o.content,i=(o.shortTitle,o.icon),c=void 0===i?"add-user":i,p=o.iconColor,m=void 0===p?"#f0f0f0":p,u=o.link,d=e.attributes.shortTitle||r,g=b(smBgColors,l),f=g&&g.slug,w=b(smIconColors,m),h=w&&w.slug,v="tr-white"===h?"":"-"+h,C=s()(t,f&&"has-bgcolor-"+f),y=s()("page-block","has-icon"),_=f&&"icon icon-"+c+v+" icon-bcolor-"+f;return wp.element.createElement("div",{className:C},wp.element.createElement("div",{className:y},wp.element.createElement("i",{className:_}),wp.element.createElement("h3",{className:"page-block-title",dangerouslySetInnerHTML:{__html:d}}),wp.element.createElement("div",{className:"page-block-excerpt",dangerouslySetInnerHTML:{__html:a}}),wp.element.createElement("div",{className:"page-block-url"},wp.element.createElement("a",{href:u},"Read more"))))}})},function(e,t,o){"use strict";var n=o(0),l=(o.n(n),wp.i18n.__),r=wp.blocks.registerBlockType,a=wp.editor,s=a.InspectorControls,i=a.PlainText,c=wp.components,p=c.RangeControl,m=c.PanelBody,u=c.BaseControl,d=c.ServerSideRender;r("sm/recent-posts",{title:l("SM Recent Posts"),icon:"megaphone",category:"widgets",attributes:{title:{type:"string",default:""},postsToShow:{type:"number",default:2}},edit:function(e){var t=(e.setAttributes,e.isSelected),o=e.attributes;o=void 0===o?{}:o;var n=o.title,l=void 0===n?"":n,r=o.postsToShow,a=void 0===r?2:r;return[wp.element.createElement(d,{block:"sm/recent-posts",attributes:e.attributes}),!!t&&wp.element.createElement(s,{key:"inspector"},wp.element.createElement(m,null,wp.element.createElement(u,{id:"sm_recent_items_block_title",label:"Number of posts"},wp.element.createElement(p,{value:a,onChange:function(t){return e.setAttributes({postsToShow:t})},min:1,max:5})),wp.element.createElement(u,{id:"sm_recent_items_block_title",label:"Block title"},wp.element.createElement(i,{id:"sm_recent_items_block_title",value:l,onChange:function(t){e.setAttributes({title:t})}}))))]},save:function(e){var t=e.attributes;t.title,t.postsToShow;return null}})},function(e,t,o){"use strict";var n=o(0),l=(o.n(n),wp.i18n.__),r=wp.blocks.registerBlockType,a=wp.editor,s=a.InspectorControls,i=a.PlainText,c=wp.components,p=c.RangeControl,m=c.PanelBody,u=c.BaseControl,d=c.ServerSideRender;r("sm/recent-news",{title:l("SM Recent News"),icon:"megaphone",category:"widgets",attributes:{title:{type:"string",default:""},postsToShow:{type:"number",default:2}},edit:function(e){var t=(e.setAttributes,e.isSelected),o=e.attributes;o=void 0===o?{}:o;var n=o.title,l=void 0===n?"":n,r=o.postsToShow,a=void 0===r?2:r;return[wp.element.createElement(d,{block:"sm/recent-news",attributes:e.attributes}),!!t&&wp.element.createElement(s,{key:"inspector"},wp.element.createElement(m,null,wp.element.createElement(u,{id:"sm_recent_items_block_title",label:"Number of news"},wp.element.createElement(p,{value:a,onChange:function(t){return e.setAttributes({postsToShow:t})},min:1,max:5})),wp.element.createElement(u,{id:"sm_recent_items_block_title",label:"Block title"},wp.element.createElement(i,{id:"sm_recent_items_block_title",value:l,onChange:function(t){e.setAttributes({title:t})}}))))]},save:function(e){var t=e.attributes;t.title,t.postsToShow;return null}})},function(e,t,o){"use strict";var n=o(0),l=(o.n(n),wp.i18n.__),r=wp.blocks.registerBlockType,a=wp.editor,s=a.InspectorControls,i=a.PlainText,c=wp.components,p=c.RangeControl,m=c.PanelBody,u=c.BaseControl,d=c.ServerSideRender;r("sm/recent-events",{title:l("SM Recent Events"),icon:"megaphone",category:"widgets",attributes:{title:{type:"string",default:""},postsToShow:{type:"number",default:2}},edit:function(e){var t=(e.setAttributes,e.isSelected),o=e.attributes;o=void 0===o?{}:o;var n=o.title,l=void 0===n?"":n,r=o.postsToShow,a=void 0===r?2:r;return[wp.element.createElement(d,{block:"sm/recent-events",attributes:e.attributes}),!!t&&wp.element.createElement(s,{key:"inspector"},wp.element.createElement(m,null,wp.element.createElement(u,{id:"sm_recent_items_block_number",label:"Number of events"},wp.element.createElement(p,{value:a,onChange:function(t){return e.setAttributes({postsToShow:t})},min:1,max:5})),wp.element.createElement(u,{id:"sm_recent_items_block_title",label:"Block title"},wp.element.createElement(i,{id:"sm_recent_items_block_title",value:l,onChange:function(t){e.setAttributes({title:t})}}))))]},save:function(e){var t=e.attributes;t.title,t.postsToShow;return null}})},function(e,t,o){"use strict";function n(e){var t=(e.className,e.setAttributes,e.isSelected),o=e.attributes;o=void 0===o?{}:o;var n=o.title,l=o.postsToShow;return[wp.element.createElement(g,{block:"sm/event-speakers",attributes:Object.assign({},e.attributes,{eventID:Number(e.postID)})}),!!t&&wp.element.createElement(i,{key:"inspector"},wp.element.createElement(u,null,wp.element.createElement(d,{id:"sm_event_speakers_block_number",label:"Max number of speakers to show"},wp.element.createElement(b,{value:l,onChange:function(t){return e.setAttributes({postsToShow:t})},min:1,max:5})),wp.element.createElement(d,{id:"sm_recent_items_block_title",label:"Block title"},wp.element.createElement(c,{id:"sm_event_speakers_block_title",value:n,onChange:function(t){e.setAttributes({title:t})}}))))]}var l=o(0),r=(o.n(l),wp.i18n.__),a=wp.blocks.registerBlockType,s=wp.editor,i=s.InspectorControls,c=s.PlainText,p=(s.RichText,s.TextControl,s.getCurrentPostId,wp.data.withSelect),m=wp.components,u=m.PanelBody,d=m.BaseControl,g=m.ServerSideRender,b=m.RangeControl,f=wp.element;f.Component,f.Fragment,f.compose;a("sm/event-speakers",{title:r("SM Event Speakers"),icon:"megaphone",category:"widgets",keywords:[r("SM Event Speakers")],description:r("Speakers for the event"),attributes:{title:{type:"string",selector:"h3",default:"Featuring"},postsToShow:{type:"number",default:3},eventID:{type:"number"}},edit:p(function(e){return{postID:(0,e("core/editor").getCurrentPostId)()}})(n),save:function(e){var t=e.attributes;t.title,t.postsToShow,t.eventID;return null}})},function(e,t,o){"use strict";function n(e){var t=(e.className,e.isSelected,e.attributes);t=void 0===t?{}:t;t.eventID;return wp.element.createElement(c,{block:"sm/event-location",attributes:{eventID:Number(e.postID)}})}function l(e){var t=(e.className,e.isSelected,e.attributes);t=void 0===t?{}:t;t.eventID;return wp.element.createElement(c,{block:"sm/event-dates",attributes:{eventID:Number(e.postID)}})}var r=o(0),a=(o.n(r),wp.i18n.__),s=wp.blocks.registerBlockType,i=wp.data.withSelect,c=wp.components.ServerSideRender;s("sm/event-location",{title:a("SM Event Location"),icon:"feedback",category:"common",keywords:[a("event"),a("location")],description:a("Show event location"),attributes:{eventID:{type:"number"}},edit:i(function(e){return{postID:(0,e("core/editor").getCurrentPostId)()}})(n),save:function(e){var t=e.attributes;t.eventID;return null}}),s("sm/event-dates",{title:a("SM Event Dates"),icon:"feedback",category:"common",keywords:[a("event"),a("location")],description:a("Show event dates"),attributes:{eventID:{type:"number"}},edit:i(function(e){return{postID:(0,e("core/editor").getCurrentPostId)()}})(l),save:function(e){var t=e.attributes;t.eventID;return null}})},function(e,t,o){"use strict";var n=o(0),l=(o.n(n),wp.i18n.__),r=wp.blocks.registerBlockType,a=(wp.data.withSelect,wp.compose.withState,wp.editor),s=(a.InspectorControls,a.PlainText,a.ColorPalette,a.getColorObjectByColorValue,wp.components),i=(s.RangeControl,s.PanelBody,s.RadioControl,s.BaseControl,s.ColorIndicator,s.ServerSideRender),c=(s.Spinner,wp.element);c.Component,c.Fragment;r("sm/team",{title:l("SM Team"),icon:"id-alt",category:"widgets",edit:function(e){e.setAttributes,e.isSelected;return wp.element.createElement(i,{block:"sm/team"})},save:function(){return null}})},function(e,t){var o=wp.i18n.__;wp.domReady(function(){wp.blocks.registerBlockStyle("core/list",{name:"default",label:o("Default","sm"),isDefault:!0}),wp.blocks.registerBlockStyle("core/list",{name:"columned",label:o("Two columns","sm")}),wp.blocks.registerBlockStyle("core/paragraph",{name:"default",label:o("Default margin","sm"),isDefault:!0}),wp.blocks.registerBlockStyle("core/paragraph",{name:"spacing-medium",label:o("Medium margin","sm")}),wp.blocks.registerBlockStyle("core/paragraph",{name:"spacing-large",label:o("Large margin","sm")}),wp.blocks.registerBlockStyle("core/heading",{name:"default",label:o("Default margin","sm"),isDefault:!0}),wp.blocks.registerBlockStyle("core/heading",{name:"spacing-medium",label:o("Medium margin","sm")}),wp.blocks.registerBlockStyle("core/heading",{name:"spacing-large",label:o("Large margin","sm")}),wp.blocks.registerBlockStyle("core/image",{name:"default",label:o("Default margin","sm"),isDefault:!0}),wp.blocks.registerBlockStyle("core/image",{name:"spacing-medium",label:o("Medium margin","sm")}),wp.blocks.registerBlockStyle("core/image",{name:"spacing-large",label:o("Large margin","sm")})})}]);