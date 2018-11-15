/*!
 * library: Core, es2017
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==C?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=r.n+i.mode,u=r[o];if((2===r.t||1===r.t&&!t.r.e)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.n+C]),u){var f=e.i.head;if(e.e)if(1===r.t)f=i.shadowRoot;else for(var c=i;c=e.o(c);)if(c.host&&c.host.shadowRoot){f=c.host.shadowRoot;break}var a=t.u.get(f);if(a||t.u.set(f,a={}),!a[o]){var s=void 0;if((s=e.f("style")).innerHTML=u,a[o]=!0,s){var l=f.querySelectorAll("[data-styles]");e.c(f,s,l.length&&l[l.length-1].nextSibling||f.firstChild)}}}}function r(n,t,e,r,u,f,c){if("class"!==e||f)if("style"===e){for(var a in r)u&&null!=u[a]||(/-/.test(a)?t.style.removeProperty(a):t.style[a]="");for(var a in u)r&&u[a]===r[a]||(/-/.test(a)?t.style.setProperty(a,u[a]):t.style[a]=u[a])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!f&&(e in t||-1!==["object","function"].indexOf(typeof u)&&null!==u)){var s=n.a(t);s&&s.s&&s.s[e]?o(t,e,u):"ref"!==e&&(o(t,e,null==u?"":u),null!=u&&!1!==u||n.r.l(t,e))}else null!=u&&"key"!==e?function l(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(W,P(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(W,P(t),e):n.setAttribute(t,e))}(t,e,u):(f||n.r.v(t,e)&&(null==u||!1===u))&&n.r.l(t,e);else e=P(e)in t?P(e.substring(2)):P(e[2])+e.substring(3),u?u!==r&&n.r.p(t,e,u):n.r.d(t,e);else if(r!==u){var v=i(r),p=i(u),d=v.filter(function(n){return!p.includes(n)}),h=i(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function i(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function o(n,t,e){try{n[t]=e}catch(n){}}function u(n,t,e,i,o){var u=11===e.y.nodeType&&e.y.host?e.y.host:e.y,f=t&&t.vattrs||O,c=e.vattrs||O;for(o in f)c&&null!=c[o]||null==f[o]||r(n,u,o,f[o],void 0,i,e.m);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||r(n,u,o,f[o],c[o],i,e.m)}function f(n,t){function e(i,o,f,c,a,v,m,b,w){if(b=o.vchildren[f],s||(p=!0,"slot"===b.vtag&&(l&&t.b(c,l+"-s"),b.vchildren?b.w=!0:b.g=!0)),x(b.vtext))b.y=t.M(b.vtext);else if(b.g)b.y=t.M("");else{if(v=b.y=N||"svg"===b.vtag?t.k("http://www.w3.org/2000/svg",b.vtag):t.f(b.w?"slot-fb":b.vtag),n.j(v)&&n.A.delete(y),N="svg"===b.vtag||"foreignObject"!==b.vtag&&N,u(n,null,b,N),x(l)&&v["s-si"]!==l&&t.b(v,v["s-si"]=l),b.vchildren)for(a=0;a<b.vchildren.length;++a)(m=e(i,b,a,v))&&t.C(v,m);"svg"===b.vtag&&(N=!1)}return b.y["s-hn"]=h,(b.w||b.g)&&(b.y["s-sr"]=!0,b.y["s-cr"]=d,b.y["s-sn"]=b.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===b.vtag&&i.y&&r(i.y)),b.y}function r(e,i,o,u){n.O=!0;var f=t.S(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t.x(u),t.c(a(u),u,c(u)),t.x(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.O=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.o(l)||n).shadowRoot&&t.P(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=x(o[u].vtext)?t.M(o[u].vtext):e(null,i,u,n))&&(o[u].y=s,t.c(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)x(n[e])&&(o=n[e].y,v=!0,o["s-ol"]?t.x(o["s-ol"]):r(o,!0),t.x(o))}function f(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.o(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,m=[];return function b(w,g,M,k,j,$,A,E,C,O,S,P){if(y=w,h=t.P(y),d=y["s-cr"],s=k,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.y=l.y,h=l.vchildren,y=v.vchildren;N=v.y&&x(t._(v.y))&&void 0!==v.y.ownerSVGElement,N="svg"===v.vtag||"foreignObject"!==v.vtag&&N,x(v.vtext)?(p=d["s-cr"])?t.T(t.o(p),v.vtext):l.vtext!==v.vtext&&t.T(d,v.vtext):("slot"!==v.vtag&&u(n,l,v,N),x(h)&&x(y)?function m(n,u,l,v,p,d,h,y){for(var m=0,b=0,w=u.length-1,g=u[0],M=u[w],k=v.length-1,j=v[0],$=v[k];m<=w&&b<=k;)if(null==g)g=u[++m];else if(null==M)M=u[--w];else if(null==j)j=v[++b];else if(null==$)$=v[--k];else if(f(g,j))s(g,j),g=u[++m],j=v[++b];else if(f(M,$))s(M,$),M=u[--w],$=v[--k];else if(f(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(g.y)),s(g,$),t.c(n,g.y,t.W(M.y)),g=u[++m],$=v[--k];else if(f(M,j))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(M.y)),s(M,j),t.c(n,M.y,g.y),M=u[--w],j=v[++b];else{for(p=null,d=m;d<=w;++d)if(u[d]&&x(u[d].vkey)&&u[d].vkey===j.vkey){p=d;break}x(p)?((y=u[p]).vtag!==j.vtag?h=e(u&&u[b],l,p,n):(s(y,j),u[p]=void 0,h=y.y),j=v[++b]):(h=e(u&&u[b],l,b,n),j=v[++b]),h&&t.c(a(g.y),h,c(g.y))}m>w?i(n,null==v[k+1]?null:v[k+1].y,l,v,b,k):b>k&&o(u,m,w)}(d,h,v,y):x(y)?(x(l.vtext)&&t.T(d,""),i(d,null,v,y,0,y.length-1)):x(h)&&o(h,0,h.length-1)),N&&"svg"===v.vtag&&(N=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.S(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.S(t.o(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.N(o))||8===l)&&""===s||1===l&&null===t.R(o,"slot")&&""===s||1===l&&t.R(o,"slot")===s)&&(m.some(function(n){return n.L===o})||(v=!0,o["s-sn"]=s,m.push({D:i,L:o})));1===t.N(i)&&n(i)}}(M.y),A=0;A<m.length;A++)(E=m[A]).L["s-ol"]||((C=t.M(""))["s-nr"]=E.L,t.c(t.o(E.L),E.L["s-ol"]=C,E.L));for(n.O=!0,A=0;A<m.length;A++){for(E=m[A],S=t.o(E.D),P=t.W(E.D),C=E.L["s-ol"];C=t.F(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.L["s-sn"]&&S===t.o(O)&&(O=t.W(O))&&O&&!O["s-nr"]){P=O;break}(!P&&S!==t.o(E.L)||t.W(E.L)!==P)&&E.L!==P&&(t.x(E.L),t.c(S,E.L,P))}n.O=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.S(e)).length;o<u;o++)if(r=i[o],1===t.N(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.N(i[f]),""!==c){if(1===a&&c===t.R(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.H(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.y),m.length=0,M}}function c(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.y),n.vchildren&&n.vchildren.forEach(function(n){c(n,t)}))}function a(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)R.push(arguments[f]);for(;R.length>0;){var c=R.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)R.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&R.push(f);t.class=R.join(" "),R.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],L):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,y:void 0,m:!1}}function s(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function l(n){return{q:n[0],U:n[1],B:!!n[2],I:!!n[3],G:!!n[4]}}function v(n,t){if(x(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function p(n,t,e){n.Q.add(t),n.Y.has(t)||(n.Y.set(t,!0),n.Z?n.queue.write(function(){return d(n,t,e)}):n.queue.tick(function(){return d(n,t,e)}))}function d(n,e,r,i,o,u){return j(this,void 0,void 0,function(){var i,f;return $(this,function(c){switch(c.z){case 0:return n.Y.delete(e),n.J.has(e)?[3,12]:(o=n.K.get(e))?[3,6]:(u=n.V.get(e))&&!u["s-rn"]?((u["s-rc"]=u["s-rc"]||[]).push(function(){d(n,e,r)}),[2]):(o=function s(n,t,e,r,i,o,u,f){try{i=new(o=n.a(t).X),function c(n,t,e,r,i,o){n.nn.set(r,e),n.tn.has(e)||n.tn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function c(n,t,e,r,i,o,u,f,a){if(t.type||t.state){var s=n.tn.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(f=o&&o.en)&&x(a=f[t.attr])&&(s[i]=v(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=v(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),t.watchCallbacks&&(s[D+i]=t.watchCallbacks.slice()),m(r,i,function l(t){return(t=n.tn.get(n.nn.get(this)))&&t[i]},function p(e,r){(r=n.nn.get(this))&&(t.state||t.mutable)&&h(n,r,i,e,u)})}else t.elementRef&&y(r,i,e)})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function a(n,t,e){if(t){var r=n.nn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.rn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.in(e,7,t,!0)}return n.K.set(t,i),i}(n,e,n.on.get(e),r),[3,5]);case 1:return c.un.push([1,4,,5]),o.componentWillLoad?[4,o.componentWillLoad()]:[3,3];case 2:c.fn(),c.z=3;case 3:return[3,5];case 4:return i=c.fn(),n.in(i,3,e),[3,5];case 5:case 6:return[3,11];case 7:return c.un.push([7,10,,11]),o.componentWillUpdate?[4,o.componentWillUpdate()]:[3,9];case 8:c.fn(),c.z=9;case 9:return[3,11];case 10:return f=c.fn(),n.in(f,5,e),[3,11];case 11:(function l(n,e,r,i,o){try{var u=e.X.host,f=e.X.encapsulation,c="shadow"===f&&n.r.e,s=r;if(c&&(s=r.shadowRoot),!r["s-rn"]){n.cn(n,n.r,e,r);var l=r["s-sc"];l&&(n.r.b(r,t(l,!0)),"scoped"===f&&n.r.b(r,t(l)))}if(i.render||i.hostData||u){n.an=!0;var v=i.render&&i.render();n.an=!1;var p=n.sn.get(r)||{};p.y=s;var d=a(null,void 0,v);n.sn.set(r,n.render(r,p,d,c,f))}r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.an=!1,n.in(t,8,r,!0)}})(n,n.a(e),e,o),e["s-init"](),c.z=12;case 12:return[2]}})})}function h(n,t,e,r,i,o){var u=n.tn.get(t);u||n.tn.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.K.get(t))){var c=u[D+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){}!n.an&&t["s-rn"]&&p(n,t,i)}}function y(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function m(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function b(n,t,e,r,i,o){if(n.Q.delete(t),(i=n.V.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.V.delete(t)),n.ln.length&&!n.Q.size)for(;o=n.ln.shift();)o()}function w(n,t,e,r,i){if(e.connectedCallback=function(){(function e(n,t,r,i){n.J.delete(r),n.vn.has(r)||(r["s-id"]||(r["s-id"]=n.pn()),n.dn=!0,n.Q.add(r),n.vn.set(r,!0),function o(n,t,e){for(e=t;e=n.r._(e);)if(n.j(e)){n.A.has(t)||(n.V.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.on.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.hn(r)),r["s-cr"]||n.R(r,E)||n.e&&1===t.t||(r["s-cr"]=n.M(""),r["s-cr"]["s-cn"]=!0,n.c(r,r["s-cr"],n.S(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),1===t.t&&n.e&&!r.shadowRoot&&n.yn(r,{mode:"open"}),i={mn:r["s-id"],en:{}},t.s&&Object.keys(t.s).forEach(function(e){(o=t.s[e].bn)&&(i.en[o]=n.R(r,o))}),i}(n.r,t,r)),n.wn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e,r){!n.O&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.N(t);t=n.o(t)}}(n.r,e)&&(n.J.set(e,!0),b(n,e),c(n.sn.get(e),!0),n.r.d(e),n.gn.delete(e),[n.V,n.Mn,n.on].forEach(function(n){return n.delete(e)}))})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u,f){if((o=n.K.get(e))&&!n.J.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.A.set(e,!0),(f=n.kn.has(e))||(n.kn.set(e,!0),e["s-ld"]=void 0,n.r.b(e,r));try{c(n.sn.get(e)),(u=n.Mn.get(e))&&(u.forEach(function(n){return n(e)}),n.Mn.delete(e)),!f&&o.componentDidLoad&&o.componentDidLoad()}catch(t){n.in(t,4,e)}b(n,e)}})(n,this,r)},e.forceUpdate=function(){p(n,this,i)},t.s){var o=Object.entries(t.s),u={};o.forEach(function(n){var t=n[0],e=n[1].bn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[P(e)];o&&(t[o]=i)})(u,this,n,e)},function f(n,t,e,r){t.forEach(function(t){var i=t[0],o=t[1],u=o.jn;3&u?m(e,i,function t(){return(n.tn.get(this)||{})[i]},function t(e){h(n,this,i,v(o.$n,e),r)}):32===u&&y(e,i,T)})}(n,o,e,i)}}function g(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.f(e),n.C(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function M(n,t,r,i,o,u,c){var s=r.performance,l={html:{}},v={},d=r[n]=r[n]||{},h=function y(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,An:!1,N:function(n){return n.nodeType},f:function(n){return e.createElement(n)},k:function(n,t){return e.createElementNS(n,t)},M:function(n){return e.createTextNode(n)},En:function(n){return e.createComment(n)},c:function(n,t,e){return n.insertBefore(t,e)},x:function(n){return n.remove()},C:function(n,t){return n.appendChild(t)},b:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},S:function(n){return n.childNodes},o:function(n){return n.parentNode},W:function(n){return n.nextSibling},F:function(n){return n.previousSibling},P:function(n){return P(n.nodeName)},H:function(n){return n.textContent},T:function(n,t){return n.textContent=t},R:function(n,t){return n.getAttribute(t)},Cn:function(n,t,e){return n.setAttribute(t,e)},On:function(n,t,e,r){return n.setAttributeNS(t,e,r)},l:function(n,t){return n.removeAttribute(t)},v:function(n,t){return n.hasAttribute(t)},hn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Sn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i._(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},p:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.Sn(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.Sn(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===S[s[1]]&&o(n)}),a=i.An?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},d:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},xn:function(n,e,r){var i=new t.CustomEvent(e,r);return n&&n.dispatchEvent(i),i},_:function(n,t){return(t=i.o(n))&&11===i.N(t)?t.host:t},yn:function(n,t){return n.attachShadow(t)}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.An=!0}}))}catch(n){}return i}(d,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.emit=function(n,e,r){return h.xn(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=a,d.Context=t;var m=r["s-defined"]=r["s-defined"]||{},b=0,M={r:h,Pn:function k(n,t){var e=n.n;r.customElements.get(e)||(w(M,l[e]=n,t.prototype,u,s),t.observedAttributes=Object.values(n.s).map(function(n){return n.bn}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},rn:t.emit,a:function(n){return l[h.P(n)]},_n:function(n){return t[n]},isClient:!0,j:function(n){return!(!m[h.P(n)]&&!M.a(n))},pn:function(){return n+b++},in:function(n,t,e){},Tn:function(n){return function t(n,e,r){return{create:g(n,e,r,"create"),componentOnReady:g(n,e,r,"componentOnReady")}}(h,v,n)},queue:t.queue=function j(n,t){function e(t){return function(e){t.push(e),p||(p=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){v++,r(a);var t=u()+7*Math.ceil(v*(1/22));i(s,t),i(l,t),s.length>0&&(l.push.apply(l,s),s.length=0),(p=a.length+s.length+l.length>0)?n.raf(o):v=0}var u=function(){return t.performance.now()},f=Promise.resolve(),c=[],a=[],s=[],l=[],v=0,p=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){c.push(n),1===c.length&&f.then(function(){return r(c)})},read:e(a),write:e(s)}}(d,r),wn:function $(n,t,e){if(n.X)p(M,t,s);else{var r=!h.e,i={mode:t.mode,scoped:r};n.Wn(i).then(function(e){try{n.X=e,function r(n,t,e,i,o,u){if(i){var f=t.n+(o||C);t[f]||(t[f]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.X=function i(){}}p(M,t,s)})}},an:!1,Z:!1,O:!1,cn:e,V:new WeakMap,u:new WeakMap,vn:new WeakMap,gn:new WeakMap,kn:new WeakMap,A:new WeakMap,nn:new WeakMap,on:new WeakMap,K:new WeakMap,J:new WeakMap,Y:new WeakMap,Mn:new WeakMap,Nn:new WeakMap,sn:new WeakMap,tn:new WeakMap,Q:new Set,ln:[]};d.onReady=function(){return new Promise(function(n){return M.queue.write(function(){return M.Q.size?M.ln.push(n):n()})})},M.render=f(M,h);var A=h.i.documentElement;return A["s-ld"]=[],A["s-rn"]=!0,A["s-init"]=function(){M.A.set(A,d.loaded=M.Z=!0),h.xn(r,"appload",{detail:{namespace:n}})},function E(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.a(t);if(r)if(n.A.has(t))e(t);else{var i=n.Mn.get(t)||[];i.push(e),n.Mn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(M,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,M}function k(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"library";return H||(H=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),new Promise(function(r){applyPolyfills(n,function(){if(!F[c]){var u={},f=e.resourcesUrl||"./";A(c,u,n,i,f,o),F[c]=M(c,u,n,i,f,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),F[c].Pn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{bn:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={jn:c[1],Rn:!!c[2],bn:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,$n:c[4]}}return{n:t,Wn:e,s:Object.assign({},u),t:i,Ln:o?o.map(l):void 0}}(n),r=t.Wn,i=_(n[0]);return t.Wn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)}),r()})})}this&&this.Dn||(Object.setPrototypeOf||Array);var j=this&&this.Fn||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.Hn(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.qn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).Hn())})},$=this&&this.Un||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.Hn)&&!(o=o.call(i,e[1])).qn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.z++,{value:e[1],qn:!1};case 5:f.z++,i=e[1],e=[0];continue;case 7:e=f.Bn.pop(),f.un.pop();continue;default:if(!(o=(o=f.un).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.z=e[1];break}if(6===e[0]&&f.z<o[1]){f.z=o[1],o=e;break}if(o&&f.z<o[2]){f.z=o[2],f.Bn.push(e);break}o[2]&&f.Bn.pop(),f.un.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,qn:!0}}([e,u])}}var r,i,o,u,f={z:0,fn:function(){if(1&o[0])throw o[1];return o[1]},un:[],Bn:[]};return u={Hn:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},A=function(){};function applyPolyfills(n,t){n.In=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.Gn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Qn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Gn===_?s(n,t.Qn):t.Gn===T?l(n,t.Qn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Yn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Zn&&n.Zn(n.Qn),p(n)}function s(n,t){n.Gn===P&&(n.Qn=t,n.Gn=_,0!==n.zn.length&&M(p,n))}function l(n,t){n.Gn===P&&(n.Gn=T,n.Qn=t,M(a,n))}function v(n,t,e,r){var i=n.zn,o=i.length;n.Zn=null,i[o]=t,i[o+_]=e,i[o+T]=r,0===o&&n.Gn&&M(p,n)}function p(n){var t=n.zn,e=n.Gn;if(0!==t.length){for(var r,i,o=n.Qn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.zn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Gn===P&&(i&&f?c(t,o):a?l(t,u):n===_?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.Gn=void 0,n.Qn=void 0,n.zn=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):S())},k=(y=void 0!==n?n:void 0)||{},j=k.Jn||k.Kn;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.Vn.onmessage=e,function(){return n.Xn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().nt("vertx");return void 0!==(w=n.tt||n.et)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),P=void 0,_=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.rt=n,this.it=new n(o),this.it[x]||h(this.it),m(t)?(this.ot=this.length=t.length,this.Qn=Array(this.length),0===this.length?s(this.it,this.Qn):(this.length=this.length||0,this.ut(t),0===this.ot&&s(this.it,this.Qn))):l(this.it,Error("Array Methods must be provided an Array"))}return n.prototype.ut=function(n){for(var t=0;this.Gn===P&&t<n.length;t++)this.ft(n[t],t)},n.prototype.ft=function(n,t){var e=this.rt,c=e.resolve;c===i?(c=u(n))===r&&n.Gn!==P?this.ct(n.Gn,t,n.Qn):"function"!=typeof c?(this.ot--,this.Qn[t]=n):e===L?(f(e=new e(o),n,c),this.at(e,t)):this.at(new e(function(t){return t(n)}),t):this.at(c(n),t)},n.prototype.ct=function(n,t,e){var r=this.it;r.Gn===P&&(this.ot--,n===T?l(r,e):this.Qn[t]=e),0===this.ot&&s(r,this.Qn)},n.prototype.at=function(n,t){var e=this;v(n,void 0,function(n){return e.ct(_,t,n)},function(n){return e.ct(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Qn=this.Gn=void 0,this.zn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).it},L.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.st=function(n){g=n},L.lt=function(n){M=n},L.vt=M,L.pt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.dt)return}n.Promise=L},L.Promise=L,L.pt(),L}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),function r(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.ht}catch(n){return!1}}||e.push(import("./polyfills/url.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})}var E="ssrv",C="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},x=function(n){return null!=n},P=function(n){return n.toLowerCase()},_=function(n){return P(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},T=function(){},W="http://www.w3.org/1999/xlink",N=!1,R=[],L={forEach:function(n,t){n.forEach(function(n,e,r){return t(s(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(s(n),e,r))})}},D="wc-",F={},H=!1;export{k as defineCustomElement,a as h};