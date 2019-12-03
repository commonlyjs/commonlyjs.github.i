(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{SASA:function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),r=a.n(n);var s=function(e){var t=e.children,a=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:a,className:"column static mobile-hidden drawer"},r.a.createElement("div",{className:"sticky"},r.a.createElement("div",{className:"card drawer-content",tabIndex:0},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"input stretched"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),r.a.createElement("input",{id:"search",type:"text",autoComplete:"off"}),r.a.createElement("label",{htmlFor:"search"},"Search"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"menu"},t))))),r.a.createElement("div",{className:"fab"},r.a.createElement("button",{className:"action",tabIndex:-1,onClick:function(){var e=a.current;e&&(e.classList.toggle("opened"),e.classList.toggle("closed"))}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-search"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})))))};var l=function(e){var t=e.name,a=e.items,n=function(e){e.preventDefault();var t=e.target,a=document.querySelector(t.getAttribute("href")||"");a&&a.scrollIntoView()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"header"},t),r.a.createElement("div",{className:"menu"},a.map((function(e){return r.a.createElement("a",{key:e,className:"item",href:"#"+e,onClick:n},e)})))))},i=a("4XLq"),o=(a("KKXr"),a("pIFo"),a("wZee")),c=a.n(o);var u=function(e){var t=e.name,a=e.since,n=e.description,s=e.signature,l=e.examples,i=(e.metadata,e.pkg),o=(n||"").replace(/\{@link (.*)\}/,(function(e,t){var a=t.split(" | ");return'<a href="'+a[0]+'">'+a[1]+"</a>"}));return r.a.createElement("div",{id:t,className:"card snippet"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},t)),r.a.createElement("div",{className:"content"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}})),r.a.createElement("div",{className:"collapsible"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"header"},"Parameters"),r.a.createElement("table",null,r.a.createElement("tbody",null,s.parameters.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement("code",null,r.a.createElement("strong",null,e.name,": ",e.type))),r.a.createElement("td",null,r.a.createElement("small",null,e.description)))})))),r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("strong",null,"Returns")," (",s.returnValue.type,") ",s.returnValue.description)),r.a.createElement("h3",{className:"header"},"Metadata"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement("strong",null,"version"))),r.a.createElement("td",null,r.a.createElement("small",null,"v",i.version))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement("strong",null,"since"))),r.a.createElement("td",null,r.a.createElement("small",null,"v",a))))))),l.map((function(e){return r.a.createElement("pre",{key:e,className:"example language-javascript"},r.a.createElement("code",{dangerouslySetInnerHTML:{__html:c.a.highlight(e,c.a.languages.javascript,"javascript")}}))})))},d=a("T/ln"),m=a("jLYJ");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"row"},r.a.createElement(s,null,r.a.createElement(l,{name:m.name,items:d.map((function(e){return e.name}))})),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},m.name),r.a.createElement("p",null,m.description),d.map((function(e){return r.a.createElement(u,{key:e.name,name:e.name,since:e.since,description:e.description,signature:e.signature,examples:e.examples,metadata:e.metadata,pkg:m})})))))))}},"T/ln":function(e){e.exports=JSON.parse('[{"name":"isUndefined","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | undefined","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is an undefined or not"}},"examples":["import { isUndefined } from \\"@commonly/reflect\\"\\r\\risUndefined(undefined)   //-> true\\risUndefined(null)        //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is an {@link https://developer.mozilla.org/en-US/docs/Glossary/undefined | undefined}."}]')},jLYJ:function(e){e.exports=JSON.parse('{"name":"@commonly/reflect","version":"0.1.0-next.7","description":"Collection of reflection utilities.","main":"./index.js","types":"./index.d.ts","scripts":{"build":"npm run clean && cmnybuild","clean":"cmnyclean","test":"cmnytest","document":"cmnydocument ./","prepack":"npm run build && && npm run test && npm run document"},"publishConfig":{"access":"public"},"files":["package.json","README.md","CHANGELOG.md","**/*.js","**/*.d.ts","**/*.d.ts.map"],"author":"Mateusz Pietrzak","homepage":"https://github.com/commonlyjs/commonly-buildtools","repository":"https://github.com/commonlyjs/commonly-buildtools","bugs":"https://github.com/commonlyjs/commonly-buildtools/issues","license":"MIT","keywords":["commonly","reflect"]}')},wZee:function(e,t,a){(function(t){a("rGqo"),a("yt8O"),a("RW0V"),a("Oyvg"),a("SRfc"),a("8+KV"),a("HAE/"),a("a1Th"),a("h7Nl"),a("Btvt"),a("pIFo"),a("bWfx"),a("LK8F");var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,s,l=n.util.type(t);switch(a=a||{},l){case"Object":if(s=n.util.objId(t),a[s])return a[s];for(var i in r={},a[s]=r,t)t.hasOwnProperty(i)&&(r[i]=e(t[i],a));return r;case"Array":return s=n.util.objId(t),a[s]?a[s]:(r=[],a[s]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var s=(r=r||n.languages)[e],l={};for(var i in s)if(s.hasOwnProperty(i)){if(i==t)for(var o in a)a.hasOwnProperty(o)&&(l[o]=a[o]);a.hasOwnProperty(i)||(l[i]=s[i])}var c=r[e];return r[e]=l,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=l)})),l},DFS:function e(t,a,r,s){s=s||{};var l=n.util.objId;for(var i in t)if(t.hasOwnProperty(i)){a.call(t,i,t[i],r||i);var o=t[i],c=n.util.type(o);"Object"!==c||s[l(o)]?"Array"!==c||s[l(o)]||(s[l(o)]=!0,e(o,a,i,s)):(s[l(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var s,l=e.querySelectorAll(r.selector),i=0;s=l[i++];)n.highlightElement(s,!0===t,r.callback)},highlightElement:function(a,r,s){for(var l,i="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(t)||[,"none"])[1].toLowerCase(),l=n.languages[i]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var c={element:a,language:i,grammar:l,code:a.textContent},u=function(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),s&&s.call(c.element)};if(n.hooks.run("before-sanity-check",c),c.code)if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code));else n.hooks.run("complete",c)},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),r.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,l,i,o){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==o)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var m=u[d],g=m.inside,p=!!m.lookbehind,f=!!m.greedy,h=0,y=m.alias;if(f&&!m.pattern.global){var v=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,v+"g")}m=m.pattern||m;for(var b=s,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof r)){if(f&&b!=t.length-1){if(m.lastIndex=k,!(j=m.exec(e)))break;for(var E=j.index+(p?j[1].length:0),F=j.index+j[0].length,x=b,A=k,N=t.length;x<N&&(A<F||!t[x].type&&!t[x-1].greedy);++x)E>=(A+=t[x].length)&&(++b,k=A);if(t[b]instanceof r)continue;S=x-b,w=e.slice(k,A),j.index-=k}else{m.lastIndex=0;var j=m.exec(w),S=1}if(j){p&&(h=j[1]?j[1].length:0);F=(E=j.index+h)+(j=j[0].slice(h)).length;var $=w.slice(0,E),_=w.slice(F),C=[b,S];$&&(++b,k+=$.length,C.push($));var O=new r(c,g?n.tokenize(j,g):j,y,j,f);if(C.push(O),_&&C.push(_),Array.prototype.splice.apply(t,C),1!=S&&n.matchGrammar(e,t,a,b,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var l=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(l?" "+l:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,s=a.code,l=a.immediateClose;e.postMessage(n.highlight(s,n.languages[r],r)),l&&e.close()}),!1),n):n;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(n.filename=s.src,n.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",s)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),s=e,l=/\blang(?:uage)?-([\w-]+)\b/i;s&&!l.test(s.className);)s=s.parentNode;if(s&&(a=(e.className.match(l)||[,""])[1]),!a){var i=(r.match(/\.(\w+)$/)||[,""])[1];a=t[i]||i}var o=document.createElement("code");o.className="language-"+a,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,n.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}})),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-api-tsx-400b77cc73b191578690.js.map