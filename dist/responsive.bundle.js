(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=["BlockEdit"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,r,n){var o;return o=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==t(o)?o:o+"")in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var __=wp.i18n.__,c=wp.data,l=c.useSelect,s=c.useDispatch,p=wp.element.useEffect,u=wp.blockEditor,y=u.InspectorControls,b=u.useBlockProps,f=wp.components,d=f.PanelBody,m=f.SelectControl,v=wp.hooks.addFilter,O=wp.compose.createHigherOrderComponent;v("blocks.registerBlockType","my-plugin/add-responsive-attributes",(function(e){return void 0!==e.attributes&&(e.attributes=i(i({},e.attributes),{},{displayOnDesktop:{type:"string",default:"show"},displayOnTablet:{type:"string",default:"show"},displayOnMobile:{type:"string",default:"show"}})),e}));var h=function(e){var t=e.BlockEdit,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,r),o=n.attributes,c=n.setAttributes,u=l((function(e){var t=e("core/edit-post").__experimentalGetPreviewDeviceType;return t?t():"Desktop"}),[]),f=s("core/edit-post").__experimentalSetPreviewDeviceType;p((function(){var e=wp.data.subscribe((function(){var e=wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType();e&&e!==u&&f(e)}));return function(){return e()}}),[u,f]);var v={opacity:"Desktop"===u&&"hide"===o.displayOnDesktop||"Tablet"===u&&"hide"===o.displayOnTablet||"Mobile"===u&&"hide"===o.displayOnMobile?.3:1};return React.createElement(React.Fragment,null,React.createElement("div",{style:v},React.createElement(t,n)),React.createElement(y,null,React.createElement(d,{title:React.createElement(React.Fragment,null,React.createElement("img",{src:"".concat(myThemeData.themeUrl,"/assets/icon.png"),alt:"ZEN",style:{width:"18px",height:"18px",marginRight:"5px"}}),__("レスポンシブ設定","your-textdomain")),initialOpen:!1},["Desktop","Tablet","Mobile"].map((function(e){return React.createElement(m,{key:e,label:"".concat(e,"で表示"),value:o["displayOn".concat(e)]||"show",options:[{label:"表示",value:"show"},{label:"非表示",value:"hide"}],onChange:function(t){return function(e,t){var r=i(i({},o),{},a({},"displayOn".concat(e),t));c(r),function(e){var t=b.save(),r=t.className?t.className.split(" "):[];["Desktop","Tablet","Mobile"].forEach((function(t){var n="hide-on-".concat(t.toLowerCase());"hide"===e["displayOn".concat(t)]?r.includes(n)||r.push(n):r=r.filter((function(e){return e!==n}))})),c({className:r.join(" ")})}(r)}(e,t)},__nextHasNoMarginBottom:!0})})))))};v("editor.BlockEdit","my-plugin/add-responsive-controls",O((function(e){return function(t){return React.createElement(h,n({BlockEdit:e},t))}}),"withResponsiveControls")),v("blocks.getSaveContent.extraProps","my-plugin/apply-responsive-classes",(function(e,t,r){var n=["hide"===r.displayOnDesktop?"hide-on-desktop":"","hide"===r.displayOnTablet?"hide-on-tablet":"","hide"===r.displayOnMobile?"hide-on-mobile":""].filter(Boolean).join(" ");return n&&(e.className=e.className?"".concat(e.className," ").concat(n):n),e}))})();