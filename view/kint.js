if("undefined"===typeof kint){var kintExpandOnLoad={},f=function(a){a.className=a.className.replace(/(\s|^)kint-minus(\s|$)/," ");return a},i=function(a){do a=a.nextElementSibling;while("dd"!=a.nodeName.toLowerCase());return a},k=function(a){for(var c=i(a),b=c.getElementsByClassName("kint-parent"),d=b.length,c="inline"==c.style.display;d--;)j(b[d],c);j(a,c)},j=function(a,c){var b,d;b=i(a);d=a.getElementsByClassName("_kint-collapse")[0];"undefined"==typeof c&&(c="inline"==b.style.display);c?(b.style.display="none",d&&f(d)):(b.style.display="inline",d&&(f(d).className+=" kint-minus"))},kint={};window.addEventListener("load",function(){for(var a=document.getElementsByClassName("kint"),c=a.length;c--;)a[c].addEventListener("click",l,!1);a=document.getElementsByClassName("_kint-collapse");for(c=a.length;c--;)a[c].addEventListener("dblclick",function(a){this.a=2;for(var b=document.getElementsByClassName("kint-parent"),c=b.length,e="inline"==i(this.parentNode).style.display;c--;)j(b[c],e);a.stopPropagation()},!1);for(var b in kintExpandOnLoad)Array.prototype.slice.call(document.querySelectorAll("."+b+">dl>dt"),0).forEach(function(a){k(a)})},!1);var l=function(a){function c(a){return RegExp("\\b"+a+"\\b").test(b.className)}var b=a.target,d=b.nodeName.toLowerCase();if("dfn"===d){var g=b,h=window.getSelection(),e=document.createRange();e.selectNodeContents(g);h.removeAllRanges();h.addRange(e);a.stopPropagation();b=b.parentNode}else if("span"===d||"var"===d)b=b.parentNode,d=b.nodeName.toLowerCase();if("li"===d&&"kint-tabs"===b.parentNode.className&&"kint-active-tab"!==b.className){a=b.parentNode.getElementsByTagName("li");d=a.length;g=0;e=b;for(h=0;d--;)a[d].className="";for(b.className="kint-active-tab";e=e.previousSibling;)1===e.nodeType&&g++;a=b.parentNode.nextSibling.childNodes;d=a.length;for(e=0;e<d;e++)"li"===a[e].nodeName.toLowerCase()&&(a[e].style.display=h++===g?"block":"none");b.className="kint-active-tab";return!1}c("_kint-collapse")?(setTimeout(function(){0<parseInt(b.a,10)?b.a--:k(b.parentNode)},300),a.stopPropagation()):c("kint-parent")?j(b):c("kint-ide-link")&&(a.preventDefault(),d=new XMLHttpRequest,d.open("GET",b.href),d.send(null));a.preventDefault();return!1}}