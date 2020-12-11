!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var r=n(16),o=n(17),a=n(18),l=n(20);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||l()}},function(e){e.exports=JSON.parse('{"components":[{"id":"content-basic","name":"Content basic","path":"content-basic","props":{"title":{"label":"Title","type":"string"},"body":{"label":"Body","type":"richText"},"link":{"label":"Link","type":"link"},"side":{"label":"Side","type":"radio","options":[{"key":"left","label":"Left"},{"key":"right","value":"Right"}]}}},{"id":"video","name":"Video","path":"video","props":{"video":{"label":"Video","type":"object","props":{"url":{"label":"Video","type":"file","root_prop":"src"},"type":{"label":"Type","type":"select","options":[{"key":"video","label":"Video"},{"key":"vimeo","label":"Vimeo"}]},"poster":{"label":"Poster","type":"image","root_prop":"src"},"fullscreen":{"label":"Fullscreen","type":"boolean","help":["No","Yes"]}}}}}]}')},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(4),o=n(22);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),l=n(8),i=n(5),c=n(3),s=n(6),u=n.n(s),p=n(4),b=n.n(p),m=n(9),f=n.n(m),v=n(10),d=n.n(v),y=n(11),h=n.n(y),g=n(12),k=n.n(g),j=n(7),O=n.n(j),E=n(13),C=n.n(E),R=n(14),x=n(15),w=n(1);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k()(this,n)}}var S=function(e){h()(n,e);var t=N(n);function n(){return f()(this,n),t.apply(this,arguments)}return d()(n,[{key:"getAttribute",value:function(e){return this.props.attributes[e]}},{key:"setAttributes",value:function(e){this.props.setAttributes(e)}},{key:"getMargin",value:function(e){var t=this.props.attributes.margin;return"object"==b()(t)&&t.hasOwnProperty(e)?t[e]:null}},{key:"setMargin",value:function(e,t){var n=this.props.attributes.margin;void 0===n&&(n={}),this.props.setAttributes({margin:Object.assign(n,u()({},e,t))})}},{key:"returnStringOrNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?parseInt(e,10):e}},{key:"fileSizeFormat",value:function(e){return e>1e6?Math.round(e/1e4)/100+" Mo":Math.round(e/1e3)+" Ko"}},{key:"addEltToRepeatable",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.updateAttributes(e,t,n.concat(""),r)}},{key:"removeEltRepeatable",value:function(e,t){console.log(e),console.log(t),this.updateAttributes(e,t,!1)}},{key:"updateAttributes",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e[0],a=this.recursiveUpdateObjectFromObject(e,t,n,r);this.setAttributes(u()({},o,a[o]))}},{key:"recursiveUpdateObjectFromObject",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=e.shift();("object"!=b()(t)||Array.isArray(t)&&"string"==typeof a||!Array.isArray(t)&&"number"==typeof a)&&(t="string"==typeof a?{}:[]);for(var l=Array.isArray(t)?[]:{},i=0,c=Object.entries(t);i<c.length;i++){var s=o()(c[i],2),u=s[0],p=s[1];u==a?e.length>0?l[u]=this.recursiveUpdateObjectFromObject(e,p,n,r):n&&(l[u]=this.returnStringOrNumber(n,r)):l[u]=p}if(void 0===l[a]&&(e.length>0?l[a]=this.recursiveUpdateObjectFromObject(e,void 0,n,r):n&&(l[a]=this.returnStringOrNumber(n,r))),0==e.length&&!n)for(var m=0;m<l.length;m++)void 0===l[m]&&l.splice(m,1);return l}},{key:"renderControl",value:function(e,t,n){var r=this,l=[],i=!(void 0===e.repeatable||!e.repeatable),c=n;for(var s in t.forEach((function(e){"object"==b()(c)&&(c=c.hasOwnProperty(e)&&void 0!==c[e]?c[e]:"")})),i?"object"==b()(c)&&0!=c.length||(c=[""]):c=[c],c){s=this.returnStringOrNumber(s,!0);var u=e.label;if(i)u=u+" "+(s+1)+"/"+c.length;var p=this.props.clientId+"-"+t.join("-")+"-"+s;switch(e.type){case"string":l.push(this.renderTextControl(p,u,i?t.concat(s):t,n,c[s],!1,i));break;case"number":l.push(this.renderTextControl(p,u,i?t.concat(s):t,n,c[s],!0,i));break;case"text":l.push(this.renderTextareaControl(p,u,i?t.concat(s):t,n,c[s],i));break;case"richText":l.push(this.renderRichTextControl(p,u,i?t.concat(s):t,n,c[s],i));break;case"boolean":l.push(this.renderToggleControl(p,u,e.help,i?t.concat(s):t,n,c[s],i));break;case"select":l.push(this.renderSelectControl(p,u,e.options,i?t.concat(s):t,n,c[s],i));break;case"radio":l.push(this.renderRadioControl(p,u,e.options,i?t.concat(s):t,n,c[s],i));break;case"link":l.push(this.renderLinkControl(p,u,i?t.concat(s):t,n,c[s],i));break;case"relation":l.push(this.renderRelationControl(p,u,e.entity,i?t.concat(s):t,n,c[s],i));break;case"image":case"file":case"gallery":l.push(this.renderFileControl(e.type,p,u,i?t.concat(s):t,n,c[s],i));break;case"object":"object"==b()(e.props)&&function(){for(var c=i?t.concat(s):t,b=[],m=0,f=Object.entries(e.props);m<f.length;m++){var v=o()(f[m],2),d=v[0],y=v[1];b.push(r.renderControl(y,c.concat(d),n))}i&&(u=Object(a.createElement)(a.Fragment,null,u,Object(a.createElement)(w.Button,{key:p+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return r.removeEltRepeatable(c,n)}},"Remove"))),l.push(Object(a.createElement)(w.Panel,{key:p+"-panelObject"},Object(a.createElement)(w.PanelBody,{key:p+"-panelBodyObject",title:u,initialOpen:!1},Object(a.createElement)("div",{key:p+"-panelBodyDivObject",className:"objectField components-base-control"},Object(a.createElement)("div",{key:p+"-panelBodySubDivObject",className:"objectField-content"},b)))))}()}}return i?(l.push(Object(a.createElement)(w.Button,{key:this.props.clientId+"-"+t.join("-")+"-repeatableAddElt",isSecondary:!0,isSmall:!0,onClick:function(){return r.addEltToRepeatable(t,n,c,!1)}},"Add")),l=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-repeatableContainer",className:"repeatableField components-base-control"},l)):l=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-basicContainer",className:"basicField"},l),l}},{key:"renderTextControl",value:function(e,t,n,r,o){var l=this,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(w.TextControl,{key:e,label:t,type:i?"number":"text",value:o,onChange:function(e){return l.updateAttributes(n,r,e,i)}})}},{key:"renderTextareaControl",value:function(e,t,n,r,o){var l=this,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return i&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(w.TextareaControl,{key:e,label:t,value:o,onChange:function(e){return l.updateAttributes(n,r,e,!1)}})}},{key:"renderRichTextControl",value:function(e,t,n,r,o){var l=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)("div",{key:e+"-RichTextComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-RichTextComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-RichTextContainer",className:"rich-text-container"},Object(a.createElement)("div",{className:"components-base-control__label",key:e+"-label"},t),Object(a.createElement)(i.RichText,{key:e,value:o,multiline:!0,onChange:function(e){return l.updateAttributes(n,r,e,!1)}}))))}},{key:"renderLinkControl",value:function(e,t,n,r,o){var l=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(n,r)}},"Remove")));var s=o.text,u=o.url,p=o.opensInNewTab;return Object(a.createElement)("div",{key:e+"-LinkControlComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-LinkControlComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-LinkControlContainer",className:"link-control-container"},Object(a.createElement)("div",{className:"components-base-control__label",key:e+"-label"},t),Object(a.createElement)(w.TextControl,{key:e+"-text",label:"Text",type:"text",value:s,onChange:function(e){return l.updateAttributes(n.concat("text"),r,e,!1)}}),Object(a.createElement)(i.__experimentalLinkControl,{key:e+"-LinkControl",className:"wp-block-navigation-link__inline-link-input",value:{url:u,opensInNewTab:p},onChange:function(e){var t=e.url,o=e.opensInNewTab;l.updateAttributes(n,r,{text:s,url:t,opensInNewTab:o},!1)}}))))}},{key:"renderSelectControl",value:function(e,t,n,r,o,l){var i=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.SelectControl,{key:e,label:t,value:l,options:[{label:"Choose...",value:""}].concat(n.map((function(e){return{label:e.label,value:e.key}}))),onChange:function(e){return i.updateAttributes(r,o,e,!1)}})}},{key:"renderRadioControl",value:function(e,t,n,r,o,l){var i=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(r,o)}},"Remove")));var s=Object(x.withState)({option:l})((function(l){var c=l.option,s=l.setState;return Object(a.createElement)(w.RadioControl,{key:e,label:t,selected:c,options:n.map((function(e){return{label:e.label,value:e.key}})),onChange:function(e){s({newValue:e}),i.updateAttributes(r,o,e,!1)}})}));return Object(a.createElement)("div",{key:e+"-RadioControlComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-RadioControlComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-RadioControlContainer",className:"radio-control-container"},Object(a.createElement)(s,null))))}},{key:"renderRelationControl",value:function(e,t,n,r,o,l){var i=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.SelectControl,{key:e,label:t,value:l,options:this.props.relations[n].map((function(e){return{label:e.title.raw,value:e.id}})),onChange:function(e){return i.updateAttributes(r,o,e,!1)}})}},{key:"renderToggleControl",value:function(e,t,n,r,o,l){var i=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.ToggleControl,{key:e,label:t,help:!("object"!=b()(n)||!Array.isArray(n)||2!=n.length)&&(l?n[1]:n[0]),checked:l,onChange:function(e){return i.updateAttributes(r,o,e,!1)}})}},{key:"renderFileControl",value:function(e,t,n,r,o,l){var c=this,s=arguments.length>6&&void 0!==arguments[6]&&arguments[6],p=!1;if(l&&"object"==b()(l)){switch(e){case"image":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-imagePreview",alt:"Edit image",title:"Edit image",className:"edit-image-preview",src:l.preview}));break;case"file":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-filePreview",alt:"Edit file",title:"Edit file",className:"edit-file-preview",src:l.preview}),Object(a.createElement)("div",{key:t+"-fileDetails",className:"file-details"},l.name,Object(a.createElement)("br",null),l.mime,Object(a.createElement)("br",null),this.fileSizeFormat(l.size)));break;case"gallery":p=[],l.forEach((function(e){p.push(Object(a.createElement)("li",{key:t+"-galleryImageContainerLi"+e.id,className:"blocks-gallery-item"},Object(a.createElement)("img",{key:t+"-galleryImage_"+e.id,src:e.preview})))}));var m=l.length>5?5:l.length;p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("figure",{key:t+"-galleryImagefigure",className:"wp-block-gallery columns-"+m},Object(a.createElement)("ul",{key:t+"-galleryImageContainerUl",className:"blocks-gallery-grid"},p)))}p=Object(a.createElement)("div",{key:t+"-mediaPreviewContainer",className:"media-preview-container"},p,Object(a.createElement)(w.Button,{key:t+"-removeMedia",isSecondary:!0,isSmall:!0,className:"reset-button",onClick:function(){"gallery"==e&&l.length>1?c.setAttributes(u()({},r,l.slice(0,l.length-1))):s?c.removeEltRepeatable(r,o):c.setAttributes(u()({},r,void 0))}},"Remove"))}return Object(a.createElement)(i.MediaPlaceholder,{key:t,labels:{title:n},onSelect:function(t){var n=void 0;switch(e){case"image":n={id:t.id,preview:t.url};break;case"file":n={id:t.id,preview:t.icon,name:t.filename,mime:t.mime,size:t.filesizeInBytes};break;case"gallery":n=[],t.forEach((function(e){n.push({id:e.id,preview:e.url})}))}c.updateAttributes(r,o,n,!1)},multiple:"gallery"==e,addToGallery:"gallery"==e&&!!l,value:l,disableDropZone:!0},p)}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.isSelected,l=t.clientId;t.className;for(var s in c.components)if(c.components.hasOwnProperty(s)){var p=c.components[s];if(this.props.name=="custom/wpe-component-"+p.id){if(void 0===n.id_component&&this.setAttributes({id_component:p.id}),!r)return Object(a.createElement)(C.a,{key:l+"-serverSideRender",block:"custom/wpe-component-"+p.id,attributes:n});var b={default:{props:{}}};if(void 0!==p.props_categories)for(var m=0,f=Object.entries(p.props_categories);m<f.length;m++){var v=o()(f[m],2),d=(v[0],v[1]);b[d.id]={name:d.name,props:{}}}for(var y=0,h=Object.entries(p.props);y<h.length;y++){var g=o()(h[y],2),k=g[0],j=g[1];void 0!==j.category&&j.category in b?b[j.category].props[k]=j:b.default.props[k]=j}for(var O=0,E=Object.entries(b);O<E.length;O++){var R=o()(E[O],2),x=R[0];R[1];0==Object.keys(b[x].props).length&&delete b[x]}for(var N=[],S=0,T=Object.entries(b);S<T.length;S++){var A=o()(T[S],2),_=A[0],F=A[1];if(0!=F.props.length){for(var P=[],B=0,M=Object.entries(F.props);B<M.length;B++){var I=o()(M[B],2),L=I[0],D=I[1],U=this.getAttribute(L);P.push(this.renderControl(D,[L],u()({},L,U)))}"default"==_?N.push({name:_,title:"Default",content:P}):N.push({name:_,title:F.name,content:P})}}var V="";return V=N.length>1?Object(a.createElement)(a.Fragment,null,Object(a.createElement)(w.TabPanel,{key:l+"-tabPanel",className:"tab-panel-wpe-component",activeClass:"active-tab",tabs:N},(function(e){return e.content}))):N[0].content,Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.InspectorControls,null,Object(a.createElement)(w.PanelBody,{title:"Padding/Margin",initialOpen:!1},Object(a.createElement)(w.RangeControl,{label:"Padding Top",value:this.getMargin("pt"),onChange:function(t){return e.setMargin("pt",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Padding Bottom",value:this.getMargin("pb"),onChange:function(t){return e.setMargin("pb",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Margin Top",value:this.getMargin("mt"),onChange:function(t){return e.setMargin("mt",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Margin Bottom",value:this.getMargin("mb"),onChange:function(t){return e.setMargin("mb",t)},min:0,max:5}))),Object(a.createElement)(w.Placeholder,{key:l+"-placeholder",label:p.name,isColumnLayout:!0,className:"wpe-component_edit_placeholder"},V))}}}}]),n}(a.Component),T=Object(R.withSelect)((function(e,t){var n=e("core").getEntityRecords,r=[];for(var a in c.components)if(c.components.hasOwnProperty(a)){var l=c.components[a];if(t.name=="custom/wpe-component-"+l.id)for(var i=0,s=Object.entries(l.props);i<s.length;i++){var u=o()(s[i],2),p=(u[0],u[1]);"relation"==p.type&&null==r[p.entity]&&(r[p.entity]=n("postType",p.entity))}}return{relations:r}}))(S);c.components.forEach((function(e){for(var t={id_component:{type:"string"},margin:{type:"object"}},n=0,r=Object.entries(e.props);n<r.length;n++){var c=o()(r[n],2),s=c[0],u=c[1],p=u.type;switch(void 0!==u.repeatable&&u.repeatable&&(p="array"),p){case"string":case"text":case"richText":t[s]={type:"string"};break;case"boolean":t[s]={type:"boolean"};break;case"select":case"radio":t[s]={type:"string"};break;case"relation":t[s]={type:"number"};break;case"array":t[s]={type:"array"};break;case"object":case"link":t[s]={type:"object"};break;case"number":t[s]={type:"number"};break;case"image":case"file":t[s]={type:"object"};break;case"gallery":t[s]={type:"array"}}}Object(l.registerBlockType)("custom/wpe-component-"+e.id,{title:e.name,parent:["custom/wpe-column"],attributes:t,description:e.description,edit:T,save:function(){return Object(a.createElement)(i.InnerBlocks.Content,null)}})}))}]);