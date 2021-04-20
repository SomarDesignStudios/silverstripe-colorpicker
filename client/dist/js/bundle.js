!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/bundles/bundle.js")}({"./client/src/boot/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./client/src/boot/registerComponents.js");window.document.addEventListener("DOMContentLoaded",function(){o.i(n.a)()})},"./client/src/boot/registerComponents.js":function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o("./client/src/components/ColorPickerField/ColorPickerField.js");t.a=function(){r.a.component.registerMany({ColorPickerField:i.a})}},"./client/src/bundles/bundle.js":function(e,t,o){o("./client/src/legacy/entwine.js"),o("./client/src/boot/index.js")},"./client/src/components/ColorPickerField/ColorPickerField.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=o(1),s=o.n(c),a=o("./node_modules/prop-types/index.js"),l=o.n(a),p=o(0),u=(o.n(p),o(5)),f=o.n(u),d=o(4),h=(o.n(d),o(2)),m=o.n(h),y=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),v=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleToggle=o.handleToggle.bind(o),o.state={isOpen:!1,value:e.value},o}return i(t,e),y(t,[{key:"handleToggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"renderButton",value:function(){var e=this.state.value,t=this.props,o=t.colors,n=t.name,r=void 0;return e&&(r=o.find(function(t){return t.CSSClass===e})),r=r||o[0],s.a.createElement(d.Button,{id:"Popover_"+n,onClick:this.handleToggle,className:"color-picker-field-button"},s.a.createElement("div",{className:"color-picker-field-button__color-icon "+r.OptionClass,style:{backgroundColor:r?r.Color:"transparent"}}),s.a.createElement("div",{className:"color-picker-field-button__color-label"},r?r.Title:s.a.createElement("em",null,f.a._t("ColorPickerField.EMPTY_TITLE","None"))))}},{key:"renderPopover",value:function(){var e=this,t=this.props,o=t.PopoverOptionSetComponent,n=t.colors,r=t.name,i=t.searchPlaceholder,c=this.state,a=c.isOpen,l=c.value,p=function(e){return[s.a.createElement("span",{className:"color-picker-field-popover__option-icon "+e.OptionClass,style:{backgroundColor:e.Color}}),s.a.createElement("span",{className:"color-picker-field-popover__option-label"},e.Title)]},u=n.map(function(t){return{key:t.CSSClass,content:p(t),className:["color-picker-field-popover__option",{"color-picker-field-popover__option--selected":t.CSSClass===l}],text:t.Title,onClick:function(o){e.handleToggle(),e.setState({value:t.CSSClass}),"function"==typeof e.props.onChange&&e.props.onChange(o,{id:e.props.id,value:t.CSSClass})}}}),d=function(e,t){return t.filter(function(t){return t.text.toLowerCase().includes(e.toLowerCase())})};return s.a.createElement(o,{buttons:u,searchPlaceholder:i||f.a._t("ColorPickerField.SEARCH_BLOCKS","Search colors"),className:"color-picker-field-popover",placement:"bottom-start",onSearch:d,isOpen:a,target:"Popover_"+r,toggle:this.handleToggle})}},{key:"render",value:function(){var e=this.props.name,t=this.state.value;return s.a.createElement("div",null,this.renderButton(),this.renderPopover(),s.a.createElement("input",{name:e,type:"hidden",value:t}))}}]),t}(c.Component);v.proptypes={colors:l.a.arrayOf(l.a.shape({Title:l.a.text,CSSClass:l.a.text,Color:l.a.text})),name:l.a.string,value:l.a.string,searchPlaceholder:l.a.string},t.a=o.i(p.inject)(["PopoverOptionSet"],function(e){return{PopoverOptionSetComponent:e}},function(){return"ColorPickerField"})(m()(v))},"./client/src/legacy/entwine.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),r=o.n(n),i=o(1),c=o.n(i),s=o(3),a=o.n(s),l=o(0);o.n(l),r.a.entwine("ss",function(e){e(".js-injector-boot .form__field-holder .color-picker-field").entwine({onmatch:function(){var e=o.i(l.loadComponent)("ColorPickerField"),t=this.data("schema"),n={colors:t.source,value:t.value,name:t.name,searchPlaceholder:t.searchPlaceholder};a.a.render(c.a.createElement(e,n),this[0])},onunmatch:function(){a.a.unmountComponentAtNode(this[0])}})})},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,o){"use strict";function n(){}var r=o("./node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,o,n,i,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},"./node_modules/prop-types/index.js":function(e,t,o){e.exports=o("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},0:function(e,t){e.exports=Injector},1:function(e,t){e.exports=React},2:function(e,t){e.exports=FieldHolder},3:function(e,t){e.exports=ReactDom},4:function(e,t){e.exports=Reactstrap},5:function(e,t){e.exports=i18n},6:function(e,t){e.exports=jQuery}});