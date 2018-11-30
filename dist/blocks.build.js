!function(e){function t(n){if(o[n])return o[n].exports;var l=o[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,o){var n,l;!function(){"use strict";function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===l)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(o.default=o,e.exports=o):(n=[],void 0!==(l=function(){return o}.apply(t,n))&&(e.exports=l))}()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),l=(o.n(n),o(3));o.n(l),o(4),o(5),o(6),o(7),o(8),o(9)},function(e,t){},function(e,t){},function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e){var t=e.meta,o=e.oldMeta,n=e.onUpdateIcon,l=e.onUpdateIconBColor,r=e.onUpdateIconColor;return wp.element.createElement(s,null,wp.element.createElement(f,{target:"sm-document-options-sidebar"},"Page options"),wp.element.createElement(d,{name:"sm-document-options-sidebar",title:"Page options"},wp.element.createElement(v,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(_,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(s,null,"Bullet color",t.sm_page_icon_bcolor&&wp.element.createElement(E,{colorValue:t.sm_page_icon_bcolor}))},wp.element.createElement(C,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgIconColors,value:t.sm_page_icon_bcolor,onChange:function(e){return l(e,t,o)}})),wp.element.createElement(_,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(s,null,"Icon color",t.sm_page_icon_color&&wp.element.createElement(E,{colorValue:t.sm_page_icon_color}))},wp.element.createElement(C,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:t.sm_page_icon_color,onChange:function(e){return r(e,t,o)},disableCustomColors:!0}))),wp.element.createElement(v,{title:"Icon",initialOpen:!1},wp.element.createElement(y,{className:"sm-icon-list",selected:t.sm_page_icon,options:smIcons,onChange:function(e){return n(e,t,o)}}))))}var r=o(0),a=(o.n(r),wp.i18n.__,wp.element),s=a.Fragment,c=(a.Component,wp.compose.compose),i=wp.data,p=i.withSelect,u=i.withDispatch,m=wp.editPost,d=m.PluginSidebar,f=m.PluginSidebarMoreMenuItem,g=wp.plugins,h=g.registerPlugin,b=(g.withPluginContext,wp.editor),C=b.ColorPalette,w=(b.getColorClassName,b.getColorObjectByColorValue,b.PlainText,wp.components),v=w.PanelBody,y=w.RadioControl,_=w.BaseControl,E=w.ColorIndicator,I=function(e,t){return Object.keys(t).reduce(function(o,l){return e[l]===t[l]?o:Object.assign({},o,n({},l,t[l]))},{})};h("sm-document-options",{icon:"art",render:c([p(function(e){var t=e("core/editor").getEditedPostAttribute("meta"),o=e("core/editor").getCurrentPostAttribute("meta");return{meta:Object.assign({},o,t),oldMeta:o}}),u(function(e){return{onUpdateIcon:function(t,o,n){var l=Object.assign({},I(n,o),{sm_page_icon:t});e("core/editor").editPost({meta:l})},onUpdateIconBColor:function(t,o,n){var l=Object.assign({},I(n,o),{sm_page_icon_bcolor:t});e("core/editor").editPost({meta:l})},onUpdateIconColor:function(t,o,n){var l=Object.assign({},I(n,o),{sm_page_icon_color:t});e("core/editor").editPost({meta:l})}}})])(l)})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,m=u.InnerBlocks,d=u.InspectorControls,f=wp.components,g=f.PanelBody,h=f.SelectControl,b=wp.element.Component,C=(wp.compose.withState,["sm/page-card"]),w=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSelectChange=e.onSelectChange.bind(e),e}return r(t,e),c(t,[{key:"onSelectChange",value:function(e){this.setState(this.state),this.props.setAttributes({maxInRow:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.maxInRow,r=s()(t,o&&"is-selected");return[!!o&&wp.element.createElement(d,{key:"inspector"},wp.element.createElement(g,{title:"Options"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement(h,{label:"Max items in row on desktop",value:l,options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}],onChange:this.onSelectChange})))),wp.element.createElement("div",{className:r},wp.element.createElement(m,{allowedBlocks:C}))]}}]),t}(b);p("sm/wrapper",{title:i("SM Wrapper"),icon:"grid-view",category:"layout",keywords:[i("SM Wrapper")],description:i("Add a wrapper"),attributes:{maxInRow:{type:"string",default:"3"}},edit:w,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.maxInRow,l=s()(t,n&&"max-in-row-"+n);return wp.element.createElement("div",{className:l},wp.element.createElement(m.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,m=u.InnerBlocks,d=u.InspectorControls,f=u.ColorPalette,g=u.getColorObjectByColorValue,h=wp.components,b=h.PanelBody,C=h.BaseControl,w=h.ColorIndicator,v=wp.element,y=v.Component,_=v.Fragment,E=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onColorChange=e.onColorChange.bind(e),e.onBgColorChange=e.onBgColorChange.bind(e),e}return r(t,e),c(t,[{key:"onColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({textColor:e})}},{key:"onBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({bgColor:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.bgColor,r=void 0===l?"":l,a=n.textColor,c=void 0===a?"#101f30":a,i=g(smBgColors,r),p=i&&i.slug,u=g(smIconColors,c),h=u&&u.slug,v=s()(t,o&&"is-selected",p&&"bcolor-"+p,h&&"color-"+h);return[!!o&&wp.element.createElement(d,{key:"inspector"},wp.element.createElement(b,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(_,null,"Background color",r&&wp.element.createElement(w,{colorValue:r}))},wp.element.createElement(f,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgColors,value:r,onChange:this.onBgColorChange,disableCustomColors:!0})),wp.element.createElement(C,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(_,null,"Text color",c&&wp.element.createElement(w,{colorValue:c}))},wp.element.createElement(f,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:c,onChange:this.onColorChange,disableCustomColors:!0})))),wp.element.createElement("section",{className:v},wp.element.createElement(m,null))]}}]),t}(y);p("sm/section",{title:i("SM Section"),icon:"align-center",category:"layout",keywords:[i("SM Section")],description:i("Add content section"),supports:{align:["center","wide","full"]},attributes:{bgColor:{type:"string",default:""},textColor:{type:"string",default:"#101f30"}},edit:E,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.bgColor,l=void 0===n?"":n,r=o.textColor,a=void 0===r?"#101f30":r,c=g(smBgColors,l),i=c&&c.slug,p=g(smIconColors,a),u=p&&p.slug,d=s()(t,i&&"bcolor-"+i,u&&"color-"+u);return wp.element.createElement("section",{className:d},wp.element.createElement(m.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor.InnerBlocks,m=wp.element.Component,d=["sm/custom-list-item"],f=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=s()(t,o&&"is-selected");return wp.element.createElement("div",{className:n},wp.element.createElement(u,{allowedBlocks:d}))}}]),t}(m);p("sm/custom-list",{title:i("SM Custom List"),icon:"list-view",category:"common",keywords:[i("SM Custom List"),i("list")],edit:f,save:function(e){var t=e.className;return wp.element.createElement("ul",{className:t},wp.element.createElement(u.Content,null))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,m=u.InspectorControls,d=u.PlainText,f=u.RichText,g=u.ColorPalette,h=u.getColorObjectByColorValue,b=wp.components,C=(b.SelectControl,b.PanelBody),w=b.RadioControl,v=b.BaseControl,y=b.ColorIndicator,_=wp.element,E=_.Component,I=_.Fragment,P=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onContentChange=e.onContentChange.bind(e),e.onTitleChange=e.onTitleChange.bind(e),e.onIconChange=e.onIconChange.bind(e),e.onIconColorChange=e.onIconColorChange.bind(e),e.onIconBgColorChange=e.onIconBgColorChange.bind(e),e}return r(t,e),c(t,[{key:"onTitleChange",value:function(e){this.props.setAttributes({title:e})}},{key:"onContentChange",value:function(e){this.props.setAttributes({content:e})}},{key:"onIconBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconBgColor:e})}},{key:"onIconChange",value:function(e){this.setState({value:e}),this.props.setAttributes({icon:e})}},{key:"onIconColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconColor:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.content,r=n.title,a=n.icon,c=void 0===a?"add-user":a,p=n.iconBgColor,u=void 0===p?"#009cde":p,b=n.iconColor,_=void 0===b?"#f0f0f0":b,E=i("Add some content..."),P=h(smBgIconColors,u),k=P&&P.slug,N=h(smIconColors,_),O=N&&N.slug,S="tr-white"===O?"":"-"+O,B="icon icon-"+c+S+" icon-bcolor-"+k,j=s()(t,o&&"is-selected",k&&"bcolor-"+k,O&&"color-"+O,"has-icon");return E=wp.element.createElement("div",null,wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_custom_list_item_title",className:"blocks-base-control__label custom-control-label"},wp.element.createElement("i",{className:B})," Title"),wp.element.createElement(d,{id:"sm_custom_list_item_title",value:r,onChange:this.onTitleChange,placeholder:"Add title"})),wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_custom_list_item_content",className:"blocks-base-control__label custom-control-label"},"Content"),wp.element.createElement(f,{label:"Content",id:"sm_custom_list_item_content",tagName:"p",className:"sm-custom-list-item-content-field",onChange:this.onContentChange,value:l,placeholder:"Add content"}))),[!!o&&wp.element.createElement(m,{key:"inspector"},wp.element.createElement(C,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(I,null,"Bullet color",u&&wp.element.createElement(y,{colorValue:u}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgIconColors,value:u,onChange:this.onIconBgColorChange,disableCustomColors:!0})),wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(I,null,"Icon color",_&&wp.element.createElement(y,{colorValue:_}))},wp.element.createElement(g,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:_,onChange:this.onIconColorChange,disableCustomColors:!0}))),wp.element.createElement(C,{title:"Icon",initialOpen:!1},wp.element.createElement(w,{className:"sm-icon-list",selected:this.props.attributes.icon,options:smIcons,onChange:this.onIconChange}))),wp.element.createElement("div",{className:j},E)]}}]),t}(E);p("sm/custom-list-item",{title:i("SM Custom List Item"),icon:"feedback",category:"common",keywords:[i("SM Custom List Item")],description:i("Add custom list item"),parent:["sm/custom-list"],attributes:{content:{type:"string",source:"html",selector:"p"},title:{type:"string",selector:"h3"},icon:{type:"string",default:"add-user"},iconBgColor:{type:"string",default:"#009cde"},iconColor:{type:"string",default:"#f0f0f0"}},edit:P,save:function(e){var t=e.className,o=(e.setAttributes,e.isSelected,e.attributes);o=void 0===o?{}:o;var n=o.title,l=o.content,r=o.icon,a=void 0===r?"add-user":r,c=o.iconBgColor,i=void 0===c?"#009cde":c,p=o.iconColor,u=void 0===p?"#f0f0f0":p,m=h(smBgIconColors,i),d=m&&m.slug,f=h(smIconColors,u),g=f&&f.slug,b="tr-white"===g?"":"-"+g,C="icon icon-"+a+b+" icon-bcolor-"+d,w=s()(t,"none"!==a&&"has-icon");return wp.element.createElement("li",{className:w},a&&"none"!==a&&wp.element.createElement("i",{className:C}),n&&wp.element.createElement("h3",{dangerouslySetInnerHTML:{__html:n}}),l&&wp.element.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=o.n(a),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,m=u.InspectorControls,d=u.PlainText,f=u.ColorPalette,g=u.getColorObjectByColorValue,h=wp.components,b=h.SelectControl,C=h.PanelBody,w=h.RadioControl,v=h.BaseControl,y=h.ColorIndicator,_=wp.element,E=_.Component,I=_.Fragment,P=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state=e.constructor.getInitialState(e.props.attributes.selectedPost),e.getOptions=e.getOptions.bind(e),e.getOptions(),e.onSelectPostChange=e.onSelectPostChange.bind(e),e.onTitleChange=e.onTitleChange.bind(e),e.onBgColorChange=e.onBgColorChange.bind(e),e.onIconChange=e.onIconChange.bind(e),e.onIconColorChange=e.onIconColorChange.bind(e),e}return r(t,e),c(t,null,[{key:"getInitialState",value:function(e){return{posts:[],selectedPost:e,post:{}}}}]),c(t,[{key:"getOptions",value:function(){var e=this;return wp.api.loadPromise.done(function(){(new wp.api.collections.Pages).fetch({data:{per_page:25}}).then(function(t){if(t&&0!==e.state.selectedPost){var o=t.find(function(t){return t.id==e.state.selectedPost});e.setState({post:o,posts:t})}else e.setState({posts:t})})})}},{key:"onSelectPostChange",value:function(e){var t=this.state.posts.find(function(t){return t.id==parseInt(e)});this.state.selectedPost=parseInt(e),t?(this.state.post=t,this.setState(this.state),this.props.setAttributes({selectedPost:parseInt(e),title:t.title.rendered,content:t.excerpt.rendered,link:t.link})):this.props.setAttributes({selectedPost:parseInt(e)})}},{key:"onTitleChange",value:function(e){this.props.setAttributes({shortTitle:e})}},{key:"onBgColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({blockBgColor:e})}},{key:"onIconChange",value:function(e){this.setState({value:e}),this.props.setAttributes({icon:e})}},{key:"onIconColorChange",value:function(e){this.setState({value:e}),this.props.setAttributes({iconColor:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=(e.setAttributes,e.isSelected),n=e.attributes;n=void 0===n?{}:n;var l=n.shortTitle,r=void 0===l?"":l,a=n.blockBgColor,c=void 0===a?"#a9a7b3":a,p=n.icon,u=void 0===p?"add-user":p,h=n.iconColor,_=void 0===h?"#f0f0f0":h,E=[{value:0,label:i("Select a Page")}],P=i("Loading Pages...");if(this.state.posts.length>0){var k=i("Please choose one of %d pages.");P=wp.element.createElement("p",{className:"loading-choose",dangerouslySetInnerHTML:{__html:k.replace("%d",this.state.posts.length)}}),this.state.posts.forEach(function(e){E.push({value:e.id,label:e.title.rendered})})}else P=wp.element.createElement("p",{className:"no-pages",dangerouslySetInnerHTML:{__html:i("No pages found. Please create some first.")}});var N=g(smBgColors,c),O=N&&N.slug,S=g(smIconColors,_),B=S&&S.slug,j="tr-white"===B?"":"-"+B,T=s()(t,O&&"has-bgcolor-"+O,o&&"is-selected"),x=s()("page-block",u&&"has-icon"),A=O&&"icon icon-"+u+j+" icon-bcolor-"+O;if(0!==this.state.selectedPost&&this.state.post&&this.state.post.hasOwnProperty("title")){var M=r||this.state.post.title.rendered;P=wp.element.createElement("div",{className:{classNameInner:x},style:{backgroundColor:c}},wp.element.createElement("i",{className:A}),wp.element.createElement("h3",{className:"page-block-title",dangerouslySetInnerHTML:{__html:M}}),wp.element.createElement("div",{className:"page-block-excerpt",dangerouslySetInnerHTML:{__html:this.state.post.excerpt.rendered}}))}else if(this.state.posts.length>0){var L=i("Please choose one of %d pages.");P=wp.element.createElement("p",{className:"loading-choose",dangerouslySetInnerHTML:{__html:L.replace("%d",this.state.posts.length)}})}return[!!o&&wp.element.createElement(m,{key:"inspector"},wp.element.createElement(C,null,wp.element.createElement(b,{onChange:this.onSelectPostChange,value:this.props.attributes.selectedPost,label:i("Select a Page"),options:E}),wp.element.createElement("div",{className:"text-field"},wp.element.createElement("label",{for:"sm_page_block_short_title",className:"blocks-base-control__label custom-control-label"},"Short title"),wp.element.createElement(d,{id:"sm_page_block_short_title",value:r,onChange:this.onTitleChange}))),wp.element.createElement(C,{title:"Colors",className:"editor-panel-color-settings"},wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(I,null,"Bar color",c&&wp.element.createElement(y,{colorValue:c}))},wp.element.createElement(f,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smBgColors,value:c,onChange:this.onBgColorChange,disableCustomColors:!0})),wp.element.createElement(v,{className:"sm-colorpalette-wrapper editor-color-palette-control",label:wp.element.createElement(I,null,"Icon color",_&&wp.element.createElement(y,{colorValue:_}))},wp.element.createElement(f,{className:"sm-colorpalette editor-color-palette-control__color-palette",colors:smIconColors,value:_,onChange:this.onIconColorChange,disableCustomColors:!0}))),wp.element.createElement(C,{title:"Icon",initialOpen:!1},wp.element.createElement(w,{className:"sm-icon-list",selected:this.props.attributes.icon,options:smIcons,onChange:this.onIconChange}))),wp.element.createElement("div",{className:T},P)]}}]),t}(E);p("sm/page-card",{title:i("SM Page"),icon:"external",category:"common",keywords:[i("SM Page Card")],description:i("Add a card of another page"),attributes:{content:{type:"string",source:"html",selector:"div.page-block-excerpt"},title:{type:"string",selector:"h3"},link:{type:"string",selector:"a"},selectedPost:{type:"number",default:0},shortTitle:{type:"string"},blockBgColor:{type:"string",default:"#a9a7b3"},icon:{type:"string",default:"add-user"},iconColor:{type:"string",default:"#f0f0f0"}},edit:P,save:function(e){var t=e.className,o=(e.setAttributes,e.attributes);o=void 0===o?{}:o;var n=o.blockBgColor,l=void 0===n?"#a9a7b3":n,r=o.title,a=o.content,c=(o.shortTitle,o.icon),i=void 0===c?"add-user":c,p=o.iconColor,u=void 0===p?"#f0f0f0":p,m=e.attributes.shortTitle||r,d=g(smBgColors,l),f=d&&d.slug,h=g(smIconColors,u),b=h&&h.slug,C="tr-white"===b?"":"-"+b,w=s()(t,f&&"has-bgcolor-"+f),v=s()("page-block","has-icon"),y=f&&"icon icon-"+i+C+" icon-bcolor-"+f;return wp.element.createElement("div",{className:w},wp.element.createElement("div",{className:v},wp.element.createElement("i",{className:y}),wp.element.createElement("h3",{className:"page-block-title",dangerouslySetInnerHTML:{__html:m}}),wp.element.createElement("div",{className:"page-block-excerpt",dangerouslySetInnerHTML:{__html:a}})))}})}]);