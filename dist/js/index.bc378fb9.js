(function(){"use strict";var e={3533:function(e,t,a){var o=a(9242),n=a(3396);function r(e,t,a,o,r,s){const i=(0,n.up)("SiteHeader"),l=(0,n.up)("SiteBody");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n.Wm)(l)],64)}const s={class:"site-body"},i={class:"wrapper"},l={class:"container"};function c(e,t,a,r,c,u){const v=(0,n.up)("SiteNav"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("main",s,[(0,n._)("div",i,[(0,n._)("div",l,[(0,n.Wm)(v),(0,n.Wm)(d,null,{default:(0,n.w5)((({Component:e})=>[(0,n.Wm)(o.uT,{name:"router-fade"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(e)))])),_:2},1024)])),_:1})])])])}var u=a(7139);const v=e=>((0,n.dD)("data-v-638f6b5c"),e=e(),(0,n.Cn)(),e),d=v((()=>(0,n._)("div",{class:"nav-indicator"},null,-1))),h=["data-pos"],p={class:"link-icon"},g=["src","alt"],b={class:"link-text"};function m(e,t,a,r,s,i){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",{class:"site-nav",style:(0,u.j5)({"--nav-pos":s.indicatorPos})},[d,(0,n.Wm)(o.uT,{name:"fade"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",{class:"nav-hint"},(0,u.zw)(s.hintText),513),[[o.F8,s.showHint]])])),_:1}),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.links,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:e.class,ref_for:!0,ref:e.name,class:(0,u.C_)(e.class),"data-pos":t+1},[(0,n.Wm)(l,{to:e.path,onClick:t=>i.hintRoute(e.text)},{default:(0,n.w5)((()=>[(0,n._)("div",p,[(0,n._)("img",{src:e.icon,alt:e.text},null,8,g)]),(0,n._)("div",b,[(0,n._)("span",null,(0,u.zw)(e.text),1)])])),_:2},1032,["to","onClick"])],10,h)))),128))])],4)}function f(e){return e/parseFloat(getComputedStyle(document.documentElement).fontSize)}var w={data(){return{indicatorPos:"1",showHint:!1,hintText:"",hintTimeout:""}},computed:{links(){return[{class:"link-home",name:"home",path:"/",icon:a(5337),text:this.$t("TabHome")},{class:"link-about",name:"about",path:"/about",icon:a(8739),text:this.$t("TabAbout")},{class:"link-illustration",name:"illustration",path:"/illustration",icon:a(8150),text:this.$t("TabIllustration")},{class:"link-message",name:"message",path:"/message",icon:a(1114),iconActive:a(8616),text:this.$t("TabMessage")}]}},watch:{$route(e){this.indicatorPos=this.$refs[e.name]?this.$refs[e.name][0]?.attributes["data-pos"]?.value:"1"}},methods:{convertPxToRem:f,hintRoute(e){this.hintText=e,clearTimeout(this.hintTimeout),this.showHint=!0,this.hintTimeout=setTimeout((()=>{this.showHint=!1}),1500)}}},_=a(89);const k=(0,_.Z)(w,[["render",m],["__scopeId","data-v-638f6b5c"]]);var j=k,y={components:{SiteNav:j}};const T=(0,_.Z)(y,[["render",c]]);var C=T,S=a.p+"img/logo.fdf4df62.svg";const x={class:"site-header"},L={class:"wrapper"};function W(e,t,a,o,r,s){const i=(0,n.up)("ActionBar");return(0,n.wg)(),(0,n.iD)("header",x,[(0,n._)("div",L,[(0,n._)("img",{alt:"logo",class:"site-logo",src:S,onClick:t[0]||(t[0]=(...t)=>e.switchCursor&&e.switchCursor(...t))}),(0,n.Wm)(i)])])}const H={class:"action-bar"};function D(e,t,a,o,r,s){const i=(0,n.up)("LangSwitch"),l=(0,n.up)("CursorSwitch");return(0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(i),(0,n.Wm)(l)])}const E={class:"cursor-switch"};function O(e,t,a,o,r,s){const i=(0,n.up)("v-icon");return(0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("button",{class:"cursor-button",onClick:t[0]||(t[0]=(...e)=>s.changeCursor&&s.changeCursor(...e))},["catpaw"==r.cursorType?((0,n.wg)(),(0,n.j4)(i,{key:0,name:"fa-paw"})):((0,n.wg)(),(0,n.j4)(i,{key:1,name:"bi-cursor-fill",flip:"horizontal"}))])])}var A={data(){return{cursorType:localStorage.cursor||"catpaw"}},methods:{changeCursor(){"catpaw"==localStorage.cursor?(this.cursorType="normal",localStorage.cursor="normal",document.querySelector("#app").classList.remove("cat-paw")):(this.cursorType="catpaw",localStorage.cursor="catpaw",document.querySelector("#app").classList.add("cat-paw"))}}};const I=(0,_.Z)(A,[["render",O],["__scopeId","data-v-21b8693e"]]);var P=I;const Z={class:"lang-switch"},$=["onClick"],z=["src","alt"];function B(e,t,a,r,s,i){const l=(0,n.up)("v-icon");return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("button",{class:"lang-button",onClick:t[0]||(t[0]=(...e)=>i.toggleList&&i.toggleList(...e)),onBlur:t[1]||(t[1]=(...e)=>i.closeList&&i.closeList(...e))},[(0,n.Wm)(l,{name:"io-language"})],32),(0,n.Wm)(o.W3,{name:"list-stagger",tag:"ul",class:"lang-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.langList,((e,t)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("li",{key:e.code,class:(0,u.C_)(["lang-choice",`lang-${e.code}`,{active:e.code==s.currentLang}]),style:(0,u.j5)({"transition-delay":s.showUp?`calc(${t} * var(--list-stagger-time) / 2)`:`calc(${s.langList.length-t} * var(--list-stagger-time) / 2)`})},[(0,n._)("button",{onClick:t=>i.changeLang(e.code)},[(0,n._)("img",{src:e.img,alt:e.code},null,8,z)],8,$)],6)),[[o.F8,s.showUp]]))),128))])),_:1})])}var M={data(){return{currentLang:localStorage.site_lang,showUp:!1,langList:[{code:"en",img:a(8749)},{code:"zh",img:a(2754)},{code:"ja",img:a(3802)}]}},methods:{toggleList(){this.showUp=!this.showUp},showList(){this.showUp=!0},closeList(){this.showUp=!1},changeLang(e){localStorage.site_lang=e,this.currentLang=e,this.$i18n.locale=e,document.documentElement.setAttribute("lang",e),this.closeList()}}};const F=(0,_.Z)(M,[["render",B],["__scopeId","data-v-26d87238"]]);var U=F,N={components:{LangSwitch:U,CursorSwitch:P}};const q=(0,_.Z)(N,[["render",D]]);var Y=q,V={components:{ActionBar:Y}};const R=(0,_.Z)(V,[["render",W]]);var K=R,Q={components:{SiteHeader:K,SiteBody:C},mounted(){localStorage.cursor||(localStorage.cursor="catpaw"),"catpaw"==localStorage.cursor&&document.querySelector("#app").classList.add("cat-paw")}};const G=(0,_.Z)(Q,[["render",r]]);var J=G,X=a(2483);const ee={class:"view view-home"};function te(e,t,a,o,r,s){const i=(0,n.up)("HelloWorld"),l=(0,n.up)("SiteContent");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n._)("section",ee,[(0,n._)("img",{alt:"Vue logo",src:S,onClick:t[0]||(t[0]=(...e)=>s.switchCursor&&s.switchCursor(...e))}),(0,n.Wm)(i,{msg:"Welcome to Your Vue.js App"})])])),_:1})}const ae={class:"hello"},oe=(0,n.uE)('<p data-v-e42bc924> For a guide and recipes on how to configure / customize this project,<br data-v-e42bc924> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-cli documentation</a>. </p><h3 data-v-e42bc924>Installed CLI Plugins</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-e42bc924>babel</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-e42bc924>router</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-e42bc924>eslint</a></li></ul><h3 data-v-e42bc924>Essential Links</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>Core Docs</a></li><li data-v-e42bc924><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>Forum</a></li><li data-v-e42bc924><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>Community Chat</a></li><li data-v-e42bc924><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-e42bc924>Twitter</a></li><li data-v-e42bc924><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>News</a></li></ul><h3 data-v-e42bc924>Ecosystem</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-router</a></li><li data-v-e42bc924><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vuex</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e42bc924>vue-devtools</a></li><li data-v-e42bc924><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-loader</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e42bc924>awesome-vue</a></li></ul><h3 data-v-e42bc924>Ecosystem</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-router</a></li><li data-v-e42bc924><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vuex</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e42bc924>vue-devtools</a></li><li data-v-e42bc924><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-loader</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e42bc924>awesome-vue</a></li></ul><h3 data-v-e42bc924>Ecosystem</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-router</a></li><li data-v-e42bc924><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vuex</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e42bc924>vue-devtools</a></li><li data-v-e42bc924><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-loader</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e42bc924>awesome-vue</a></li></ul><h3 data-v-e42bc924>Ecosystem</h3><ul data-v-e42bc924><li data-v-e42bc924><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-router</a></li><li data-v-e42bc924><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vuex</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e42bc924>vue-devtools</a></li><li data-v-e42bc924><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e42bc924>vue-loader</a></li><li data-v-e42bc924><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e42bc924>awesome-vue</a></li></ul>',13);function ne(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",ae,[(0,n._)("h1",null,(0,u.zw)(a.msg),1),oe])}var re={name:"HelloWorld",props:{msg:String}};const se=(0,_.Z)(re,[["render",ne],["__scopeId","data-v-e42bc924"]]);var ie=se,le=a(9018),ce={name:"HomeView",components:{HelloWorld:ie,SiteContent:le.Z},methods:{switchCursor(){document.querySelector("body").classList.toggle("cat-paw")}}};const ue=(0,_.Z)(ce,[["render",te]]);var ve=ue;const de=[{path:"/",name:"home",component:ve},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,4367))},{path:"/illustration",name:"illustration",component:()=>a.e(443).then(a.bind(a,2367))},{path:"/message",name:"message",component:()=>a.e(443).then(a.bind(a,605))},{path:"/:pathMatch(.*)*",redirect:"/"}],he=(0,X.p7)({history:(0,X.PO)("/"),routes:de});var pe=he,ge=a(1373),be=a(5658);const me={en:{TabHome:"Home",TabAbout:"Profile",TabIllustration:"Illustration",TabMessage:"Messages"},zh:{TabHome:"主頁",TabAbout:"個人檔案",TabIllustration:"粉絲畫作",TabMessage:"祝賀訊息"},ja:{TabHome:"ホーム",TabAbout:"プロフィール",TabIllustration:"イラスト",TabMessage:"メッセージ"}};var fe=me;const we=localStorage.site_lang||"ja",_e=(0,be.o)({locale:we,messages:fe});document.documentElement.setAttribute("lang",we);var ke=_e,je=a(4463),ye=a(6564),Te=a(8422),Ce=a(9235);(0,je.Go)(ye.Q2V,Te.IHQ,Ce.IdY);var Se=je.xt;const xe=(0,ge.Z)(),Le=(0,o.ri)(J);Le.config.globalProperties.$emitter=xe,Le.use(pe).use(ke).component("v-icon",Se).mount("#app")},9018:function(e,t,a){a.d(t,{Z:function(){return c}});var o=a(3396),n=a(7139);function r(e,t,a,r,s,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)(["site-content",{"fade-white-bg":a.fadeWhiteBg}])},[(0,o.WI)(e.$slots,"default")],2)}var s={props:{fadeWhiteBg:{type:Boolean,default:!0}}},i=a(89);const l=(0,i.Z)(s,[["render",r]]);var c=l},8749:function(e,t,a){e.exports=a.p+"img/en.bd0ce5d5.svg"},3802:function(e,t,a){e.exports=a.p+"img/ja.02464c4e.svg"},2754:function(e,t,a){e.exports=a.p+"img/zh.4cde8db6.svg"},8739:function(e,t,a){e.exports=a.p+"img/about.bda0c060.svg"},5337:function(e,t,a){e.exports=a.p+"img/home.2220e7cd.svg"},8150:function(e,t,a){e.exports=a.p+"img/illustration.65d56db1.svg"},1114:function(e,t,a){e.exports=a.p+"img/letter.238e1c49.svg"},8616:function(e,t,a){e.exports=a.p+"img/letter_active.5eee4b69.svg"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.247cc658.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mikeneko-birthday:";a.l=function(o,n,r,s){if(e[o])e[o].push(n);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var v=c[u];if(v.getAttribute("src")==o||v.getAttribute("data-webpack")==t+r){i=v;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[n];var d=function(t,a){i.onerror=i.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={826:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=r);var s=a.p+a.u(t),i=new Error,l=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(o);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},o=self["webpackChunkmikeneko_birthday"]=self["webpackChunkmikeneko_birthday"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3533)}));o=a.O(o)})();
//# sourceMappingURL=index.bc378fb9.js.map