(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){var r,i,l,c;r=n,i=e,l=o[e],c=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==t(c)?c:c+"")in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}var r=wp.i18n.__,o=wp.blockEditor.InspectorControls,i=wp.components,l=i.PanelBody,c=i.SelectControl,a=wp.compose.createHigherOrderComponent;wp.hooks.addFilter("blocks.registerBlockType","my-plugin/content-width-attribute",(function(t,e){return void 0!==t.attributes&&(t.attributes=Object.assign(t.attributes,{contentWidth:{type:"string",default:"1100px"}})),t}));var p=a((function(t){return function(e){var n=e.attributes,i=e.setAttributes;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(t,e),wp.element.createElement(o,null,wp.element.createElement(l,{title:r("コンテンツの幅","text-domain"),initialOpen:!1},wp.element.createElement(c,{label:r("コンテンツの幅を選択","text-domain"),value:n.contentWidth||"1100px",options:[{label:"800px",value:"800px"},{label:"1100px",value:"1100px"},{label:"1400px",value:"1400px"},{label:"100%",value:"100%"}],onChange:function(t){return i({contentWidth:t})}}))))}}),"withContentWidthControl");wp.hooks.addFilter("editor.BlockEdit","my-plugin/with-content-width-control",p),wp.hooks.addFilter("blocks.getSaveContent.extraProps","my-plugin/apply-content-width-style",(function(t,e,r){if(r.contentWidth)if("100%"===r.contentWidth){var o=void 0===window.mythemeHasSidebar||window.mythemeHasSidebar;t.style=n(n({},t.style),{},o?{width:"100%",boxSizing:"border-box"}:{width:"100vw",marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)",paddingLeft:"calc(50vw - 50%)",paddingRight:"calc(50vw - 50%)",boxSizing:"border-box"})}else t.style=n(n({},t.style),{},{maxWidth:r.contentWidth,margin:"0 auto"});return t}))})();
//# sourceMappingURL=content-with.bundle.js.map