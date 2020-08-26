!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var o=n(9),r=n(10),l=n(11),c=n(13);e.exports=function(e,t){return o(e)||r(e,t)||l(e,t)||c()}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e){e.exports=JSON.parse('{"assets":{"css":[{"name":"main","type":"style","path":"./dist/index.css"}],"js":[{"name":"main","type":"bare","path":"./dist/index.js"}]},"layouts":[{"id":"4-columns","class":"four-columns","name":"4 columns","description":"Simple 4 columns layout","tag":"section","blocks":[{"class":"four-columns-01"},{"class":"four-columns-02"},{"class":"four-columns-03"},{"class":"four-columns-04"}]},{"id":"fout-columns-two-rows","class":"four-columns-two-rows","name":"4 columns 2 rows","description":"Simple 4 columns 2 rows layout","tag":"section","blocks":[{"class":"four-columns-two-rows-top"},{"class":"four-columns-two-rows-bottom-01"},{"class":"four-columns-two-rows-bottom-02"},{"class":"four-columns-two-rows-bottom-03"},{"class":"four-columns-two-rows-bottom-04"}]}],"components":[{"id":"s-google-map","name":"Google map","description":"Allows you to display nice google maps in your website","tag":"s-google-map","props":{"subtitle":{"label":"Subtitle","type":"string"},"api-key":{"label":"API key","type":"string","required":true,"description":"Google map API key","default":"AIzaSyDzFfEzhmYXRTlONUCtMWQ88uHJhsbtXY4"},"zoom":{"label":"Zoom","type":"number","description":"Specify the zoom you want on the map","default":4}}}]}')},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),l=n(3),c=n.n(l),s=n(0),a=n(5),u=n(4),i=n(6),p=n(7),f=n(2);p.components.forEach((function(e){for(var t={},n=0,o=Object.entries(e.props);n<o.length;n++){var l=c()(o[n],2),p=l[0];switch(l[1].type){case"string":case"text":t[p]={type:"string"};break;case"boolean":t[p]={type:"boolean"};break;case"array":t[p]={type:"array"};break;case"object":t[p]={type:"object"};break;case"number":t[p]={type:"number"}}}Object(a.registerBlockType)("wpe-component/"+e.id,{title:e.name,attributes:t,edit:Object(i.withSelect)((function(e,t){return{inner_blocks:e("core/block-editor").getBlocks(t.clientId)}}))((function(t){for(var n=t.attributes,o=t.setAttributes,l=(t.inner_blocks,t.clientId,[]),a=0,i=function(){var e,t=c()(b[p],2),u=t[0],i=t[1];switch(a>0&&l.push(Object(s.createElement)(f.HorizontalRule,{key:u})),i.type){case"string":l.push(Object(s.createElement)(f.TextControl,{key:u,label:i.label,value:n[u],onChange:function(e){return o(r()({},u,e))}}));break;case"number":l.push(Object(s.createElement)(f.TextControl,{key:u,label:i.label,type:"number",value:n[u],onChange:function(e){return o(r()({},u,parseInt(e,10)))}}));break;case"text":l.push(Object(s.createElement)(f.TextareaControl,{key:u,label:i.label,value:n[u],onChange:function(e){return o(r()({},u,e))}}));break;case"boolean":l.push(Object(s.createElement)(f.ToggleControl,(e={key:u,label:i.label,help:"Help text",checked:!1},r()(e,"help",n[u]?"Enable":"Disable"),r()(e,"checked",n[u]),r()(e,"onChange",(function(e){return o(r()({},u,e))})),e)))}a++},p=0,b=Object.entries(e.props);p<b.length;p++)i();return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(u.InspectorControls,null,Object(s.createElement)(f.PanelBody,null,l)),"WPE-Component")})),save:function(){return Object(s.createElement)(u.InnerBlocks.Content,null)}})}))},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(o=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw l}}return n}}},function(e,t,n){var o=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]);