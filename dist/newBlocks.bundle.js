(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,r=JSON.parse('{"apiVersion":2,"name":"mytheme/faq","title":"FAQブロック","category":"zen","icon":"editor-help","description":"FAQブロック","textdomain":"mytheme","attributes":{"faqItems":{"type":"array","default":[]},"content":{"type":"string","source":"html","selector":"div"},"style":{"type":"string","default":"simple"}},"supports":{"html":false},"editorScript":"file:./index.js"}');function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l.apply(this,arguments)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){var n,r,l,c;n=e,r=t,l=o[t],c=function(e,t){if("object"!=a(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==a(c)?c:c+"")in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d.apply(this,arguments)}wp.blocks.getBlockType(r.name)||(0,e.registerBlockType)(r.name,m(m({},r),{},{attributes:m(m({},r.attributes),{},{faqItems:{type:"array",default:[{id:Date.now().toString(),question:"",content:""}]},style:{type:"string",default:"simple"},dividerStyle:{type:"string",default:"solid"},dividerColor:{type:"string",default:"#cccccc"},dividerWidth:{type:"number",default:1},boxColor:{type:"string",default:"#ffffff"},boxBorderWidth:{type:"number",default:1},boxBorderColor:{type:"string",default:"#000000"},boxBorderRadius:{type:"number",default:5}}),edit:function(e){var r=e.attributes,a=e.setAttributes,i=e.clientId,m=(0,o.useBlockProps)(),d=r.style,u=(r.faqItems,function(){var e,t=wp.blocks.createBlock("mytheme/faq-child",{question:"",answer:""}),o=wp.data.select("core/block-editor").getBlock(i),n=[].concat(function(e){if(Array.isArray(e))return c(e)}(e=o.innerBlocks)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t]);wp.data.dispatch("core/block-editor").replaceInnerBlocks(i,n,!1)});return React.createElement(React.Fragment,null,React.createElement(o.InspectorControls,null,React.createElement(n.PanelBody,{title:(0,t.__)("スタイル設定","mytheme")},React.createElement(n.SelectControl,{label:(0,t.__)("スタイル","mytheme"),value:d,options:[{label:(0,t.__)("シンプル","mytheme"),value:"simple"},{label:(0,t.__)("区切り線","mytheme"),value:"divider"},{label:(0,t.__)("ボックス","mytheme"),value:"box"}],onChange:function(e){return a({style:e})},__nextHasNoMarginBottom:!0}),"divider"===d&&React.createElement(React.Fragment,null,React.createElement(n.SelectControl,{label:(0,t.__)("区切り線のスタイル","mytheme"),value:r.dividerStyle,options:[{label:(0,t.__)("実線","mytheme"),value:"solid"},{label:(0,t.__)("点線","mytheme"),value:"dotted"},{label:(0,t.__)("破線","mytheme"),value:"dashed"}],onChange:function(e){return a({dividerStyle:e})},__nextHasNoMarginBottom:!0}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("区切り線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.dividerColor,onChange:function(e){return a({dividerColor:e})},__nextHasNoMarginBottom:!0})),React.createElement(n.RangeControl,{label:(0,t.__)("区切り線の太さ","mytheme"),value:r.dividerWidth,onChange:function(e){return a({dividerWidth:e})},min:1,max:10})),"box"===d&&React.createElement(React.Fragment,null,React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("ボックスの色","mytheme")),React.createElement(n.ColorPalette,{value:r.boxColor,onChange:function(e){return a({boxColor:e})}})),React.createElement(n.RangeControl,{label:(0,t.__)("ボックスの枠線の太さ","mytheme"),value:r.boxBorderWidth,onChange:function(e){return a({boxBorderWidth:e})},min:0,max:10}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("ボックスの枠線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.boxBorderColor,onChange:function(e){return a({boxBorderColor:e})}})),React.createElement(n.RangeControl,{label:(0,t.__)("ボックスの角の丸み","mytheme"),value:r.boxBorderRadius,onChange:function(e){return a({boxBorderRadius:e})},min:0,max:50}))),React.createElement(n.PanelBody,{title:(0,t.__)("アイコン設定","mytheme")},React.createElement(n.SelectControl,{label:(0,t.__)("アイコンスタイル","mytheme"),value:r.iconStyle,options:[{label:(0,t.__)("四角","mytheme"),value:"square"},{label:(0,t.__)("丸","mytheme"),value:"circle"},{label:(0,t.__)("角丸","mytheme"),value:"rounded"}],onChange:function(e){return a({iconStyle:e})},__nextHasNoMarginBottom:!0}),"rounded"===r.iconStyle&&React.createElement(n.RangeControl,{label:(0,t.__)("アイコンの角の丸み","mytheme"),value:r.iconBorderRadius,onChange:function(e){return a({iconBorderRadius:e})},min:0,max:20}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコンサイズ","mytheme"),value:r.iconSize,onChange:function(e){return a({iconSize:e})},min:20,max:50}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコン枠線の太さ","mytheme"),value:r.iconBorderWidth,onChange:function(e){return a({iconBorderWidth:e})},min:0,max:5}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコンの文字サイズ","mytheme"),value:r.iconFontSize,onChange:function(e){return a({iconFontSize:e})},min:12,max:30}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconColor,onChange:function(e){return a({iconColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconBackgroundColor,onChange:function(e){return a({iconBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの枠線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconBorderColor,onChange:function(e){return a({iconBorderColor:e})}}))),React.createElement(n.PanelBody,{title:(0,t.__)("質問設定","mytheme")},React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.questionBackgroundColor,onChange:function(e){return a({questionBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("文字色","mytheme")),React.createElement(n.ColorPalette,{value:r.questionTextColor,onChange:function(e){return a({questionTextColor:e})}}))),React.createElement(n.PanelBody,{title:(0,t.__)("回答設定","mytheme")},React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.answerBackgroundColor,onChange:function(e){return a({answerBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("文字色","mytheme")),React.createElement(n.ColorPalette,{value:r.answerTextColor,onChange:function(e){return a({answerTextColor:e})}})))),React.createElement("div",l({},m,{className:"faq-block style-".concat(d),style:"divider"===d?{borderBottom:"".concat(r.dividerWidth,"px ").concat(r.dividerStyle," ").concat(r.dividerColor)}:"box"===d?{backgroundColor:r.boxColor,border:"".concat(r.boxBorderWidth,"px solid ").concat(r.boxBorderColor),borderRadius:"".concat(r.boxBorderRadius,"px"),marginBottom:"10px"}:void 0}),React.createElement(o.InnerBlocks,{template:[["mytheme/faq-child",{question:(0,t.__)("質問を入力...","mytheme"),answer:(0,t.__)("回答を入力...","mytheme")}]],templateLock:!1,allowedBlocks:["mytheme/faq-child"],renderAppender:function(){return React.createElement(n.Button,{isPrimary:!0,onClick:u,className:"add-faq-button",icon:"plus"},(0,t.__)("FAQを追加","mytheme"))}})))},save:function(e){var t=e.attributes,n=o.useBlockProps.save(),r=t.style;return React.createElement("div",l({},n,{className:"faq-block style-".concat(r),style:"divider"===r?{borderBottom:"".concat(t.dividerWidth,"px ").concat(t.dividerStyle," ").concat(t.dividerColor)}:"box"===r?{backgroundColor:t.boxColor,border:"".concat(t.boxBorderWidth,"px solid ").concat(t.boxBorderColor),borderRadius:"".concat(t.boxBorderRadius,"px"),marginBottom:"10px"}:void 0}),React.createElement(o.InnerBlocks.Content,null))}})),wp.blocks.getBlockType("mytheme/faq-child")||(0,e.registerBlockType)("mytheme/faq-child",{title:(0,t.__)("FAQ子ブロック","mytheme"),description:(0,t.__)("FAQのアンサーブロックです","mytheme"),category:"zen",icon:"editor-help",supports:{html:!1,inserter:!1},attributes:{question:{type:"string",source:"html",selector:".faq-question"},style:{type:"string",default:"simple"},dividerStyle:{type:"string",default:"solid"},dividerColor:{type:"string",default:"#cccccc"},dividerWidth:{type:"number",default:1},boxColor:{type:"string",default:"#ffffff"},boxBorderWidth:{type:"number",default:1},boxBorderColor:{type:"string",default:"#000000"},boxBorderRadius:{type:"number",default:5},iconStyle:{type:"string",default:"square"},iconSize:{type:"number",default:25},iconBorderWidth:{type:"number",default:1},iconFontSize:{type:"number",default:16},iconColor:{type:"string",default:"#000000"},iconBackgroundColor:{type:"string",default:"#ffffff"},iconBorderRadius:{type:"number",default:5},iconBorderColor:{type:"string",default:"#000000"},questionBackgroundColor:{type:"string",default:"#ffffff"},questionTextColor:{type:"string",default:"#000000"},answerBackgroundColor:{type:"string",default:"#ffffff"},answerTextColor:{type:"string",default:"#000000"}},edit:function(e){var r=e.attributes,a=e.setAttributes,l=(0,o.useBlockProps)(),c=r.style;return React.createElement(React.Fragment,null,React.createElement(o.InspectorControls,null,React.createElement(n.PanelBody,{title:(0,t.__)("スタイル設定","mytheme")},React.createElement(n.SelectControl,{label:(0,t.__)("スタイル","mytheme"),value:c,options:[{label:(0,t.__)("シンプル","mytheme"),value:"simple"},{label:(0,t.__)("区切り線","mytheme"),value:"divider"},{label:(0,t.__)("ボックス","mytheme"),value:"box"}],onChange:function(e){return a({style:e})},__nextHasNoMarginBottom:!0}),"divider"===c&&React.createElement(React.Fragment,null,React.createElement(n.SelectControl,{label:(0,t.__)("区切り線のスタイル","mytheme"),value:r.dividerStyle,options:[{label:(0,t.__)("実線","mytheme"),value:"solid"},{label:(0,t.__)("点線","mytheme"),value:"dotted"},{label:(0,t.__)("破線","mytheme"),value:"dashed"}],onChange:function(e){return a({dividerStyle:e})},__nextHasNoMarginBottom:!0}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("区切り線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.dividerColor,onChange:function(e){return a({dividerColor:e})},__nextHasNoMarginBottom:!0})),React.createElement(n.RangeControl,{label:(0,t.__)("区切り線の太さ","mytheme"),value:r.dividerWidth,onChange:function(e){return a({dividerWidth:e})},min:1,max:10})),"box"===c&&React.createElement(React.Fragment,null,React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("ボックスの色","mytheme")),React.createElement(n.ColorPalette,{value:r.boxColor,onChange:function(e){return a({boxColor:e})}})),React.createElement(n.RangeControl,{label:(0,t.__)("ボックスの枠線の太さ","mytheme"),value:r.boxBorderWidth,onChange:function(e){return a({boxBorderWidth:e})},min:0,max:10}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("ボックスの枠線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.boxBorderColor,onChange:function(e){return a({boxBorderColor:e})}})),React.createElement(n.RangeControl,{label:(0,t.__)("ボックスの角の丸み","mytheme"),value:r.boxBorderRadius,onChange:function(e){return a({boxBorderRadius:e})},min:0,max:50}))),React.createElement(n.PanelBody,{title:(0,t.__)("アイコン設定","mytheme")},React.createElement(n.SelectControl,{label:(0,t.__)("アイコンスタイル","mytheme"),value:r.iconStyle,options:[{label:(0,t.__)("四角","mytheme"),value:"square"},{label:(0,t.__)("丸","mytheme"),value:"circle"},{label:(0,t.__)("角丸","mytheme"),value:"rounded"}],onChange:function(e){return a({iconStyle:e})},__nextHasNoMarginBottom:!0}),"rounded"===r.iconStyle&&React.createElement(n.RangeControl,{label:(0,t.__)("アイコンの角の丸み","mytheme"),value:r.iconBorderRadius,onChange:function(e){return a({iconBorderRadius:e})},min:0,max:20}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコンサイズ","mytheme"),value:r.iconSize,onChange:function(e){return a({iconSize:e})},min:20,max:50}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコン枠線の太さ","mytheme"),value:r.iconBorderWidth,onChange:function(e){return a({iconBorderWidth:e})},min:0,max:5}),React.createElement(n.RangeControl,{label:(0,t.__)("アイコンの文字サイズ","mytheme"),value:r.iconFontSize,onChange:function(e){return a({iconFontSize:e})},min:12,max:30}),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconColor,onChange:function(e){return a({iconColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconBackgroundColor,onChange:function(e){return a({iconBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("アイコンの枠線の色","mytheme")),React.createElement(n.ColorPalette,{value:r.iconBorderColor,onChange:function(e){return a({iconBorderColor:e})}}))),React.createElement(n.PanelBody,{title:(0,t.__)("質問設定","mytheme")},React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.questionBackgroundColor,onChange:function(e){return a({questionBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("文字色","mytheme")),React.createElement(n.ColorPalette,{value:r.questionTextColor,onChange:function(e){return a({questionTextColor:e})}}))),React.createElement(n.PanelBody,{title:(0,t.__)("回答設定","mytheme")},React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("背景色","mytheme")),React.createElement(n.ColorPalette,{value:r.answerBackgroundColor,onChange:function(e){return a({answerBackgroundColor:e})}})),React.createElement("div",{className:"components-base-control"},React.createElement("span",null,(0,t.__)("文字色","mytheme")),React.createElement(n.ColorPalette,{value:r.answerTextColor,onChange:function(e){return a({answerTextColor:e})}})))),React.createElement("div",d({},l,{className:"faq-child-block style-".concat(c),style:"divider"===c?{borderBottom:"".concat(r.dividerWidth,"px ").concat(r.dividerStyle," ").concat(r.dividerColor)}:"box"===c?{backgroundColor:r.boxColor,border:"".concat(r.boxBorderWidth,"px solid ").concat(r.boxBorderColor),borderRadius:"".concat(r.boxBorderRadius,"px"),marginBottom:"10px"}:void 0}),React.createElement("div",{className:"faq-question-wrapper",style:{backgroundColor:r.questionBackgroundColor,color:r.questionTextColor}},React.createElement("span",{className:"faq-icon ".concat("circle"===r.iconStyle?"faq-icon-circle":"rounded"===r.iconStyle?"faq-icon-rounded":""),style:{width:r.iconSize+"px",height:r.iconSize+"px",borderWidth:r.iconBorderWidth+"px",fontSize:r.iconFontSize+"px",color:r.iconColor,backgroundColor:r.iconBackgroundColor,borderColor:r.iconBorderColor,borderRadius:"rounded"===r.iconStyle?"".concat(r.iconBorderRadius,"px"):void 0}},"Q"),React.createElement(o.RichText,{tagName:"h4",className:"faq-question",value:r.question,onChange:function(e){return a({question:e})},placeholder:(0,t.__)("質問を入力...","mytheme"),style:{color:r.questionTextColor}})),React.createElement("div",{className:"faq-answer-wrapper",style:{backgroundColor:r.answerBackgroundColor,color:r.answerTextColor}},React.createElement("span",{className:"faq-icon ".concat("circle"===r.iconStyle?"faq-icon-circle":"rounded"===r.iconStyle?"faq-icon-rounded":""),style:{width:r.iconSize+"px",height:r.iconSize+"px",borderWidth:r.iconBorderWidth+"px",fontSize:r.iconFontSize+"px",color:r.iconColor,backgroundColor:r.iconBackgroundColor,borderColor:r.iconBorderColor,borderRadius:"rounded"===r.iconStyle?"".concat(r.iconBorderRadius,"px"):void 0}},"A"),React.createElement("div",{className:"faq-answer"},React.createElement(o.InnerBlocks,{template:[["core/paragraph",{placeholder:(0,t.__)("回答を入力...","mytheme")}]],templateLock:!1})))))},save:function(e){var t=e.attributes,n=o.useBlockProps.save(),r=t.style;return React.createElement("div",d({},n,{className:"faq-block style-".concat(r),style:"divider"===r?{borderBottom:"".concat(t.dividerWidth,"px ").concat(t.dividerStyle," ").concat(t.dividerColor)}:"box"===r?{backgroundColor:t.boxColor,border:"".concat(t.boxBorderWidth,"px solid ").concat(t.boxBorderColor),borderRadius:"".concat(t.boxBorderRadius,"px"),marginBottom:"10px"}:void 0}),React.createElement("div",{className:"faq-question-wrapper",style:{backgroundColor:t.questionBackgroundColor}},React.createElement("span",{className:"faq-icon ".concat("circle"===t.iconStyle?"faq-icon-circle":"rounded"===t.iconStyle?"faq-icon-rounded":""),style:{width:t.iconSize+"px",height:t.iconSize+"px",borderWidth:t.iconBorderWidth+"px",fontSize:t.iconFontSize+"px",color:t.iconColor,backgroundColor:t.iconBackgroundColor,borderColor:t.iconBorderColor,borderRadius:"rounded"===t.iconStyle?"".concat(t.iconBorderRadius,"px"):void 0}},"Q"),React.createElement(o.RichText.Content,{tagName:"h4",className:"faq-question",value:t.question,style:{color:t.questionTextColor}})),React.createElement("div",{className:"faq-answer-wrapper",style:{backgroundColor:t.answerBackgroundColor,color:t.answerTextColor}},React.createElement("span",{className:"faq-icon ".concat("circle"===t.iconStyle?"faq-icon-circle":"rounded"===t.iconStyle?"faq-icon-rounded":""),style:{width:t.iconSize+"px",height:t.iconSize+"px",borderWidth:t.iconBorderWidth+"px",fontSize:t.iconFontSize+"px",color:t.iconColor,backgroundColor:t.iconBackgroundColor,borderColor:t.iconBorderColor,borderRadius:"rounded"===t.iconStyle?"".concat(t.iconBorderRadius,"px"):void 0}},"A"),React.createElement("div",{className:"faq-answer"},React.createElement(o.InnerBlocks.Content,null))))}})})();