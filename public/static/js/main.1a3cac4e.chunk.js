(this.webpackJsonpspringhire=this.webpackJsonpspringhire||[]).push([[0],{11:function(e,t,a){},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){var n={"./footer-logo.svg":[48,3],"./science.svg":[49,4],"./social.svg":[50,5]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=40,e.exports=r},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),c=(a(36),a(37),a(4)),s=a(10),o=function(e){var t=e.product,a=e.client,n=e.services,l=e.imgCount,i=e.classname,c=e.reversed;return r.a.createElement("section",{className:i},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"flex ".concat(c?"reversed":"")},r.a.createElement("div",{className:"list"},r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"Client:"),r.a.createElement("li",null,a||t)),r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"Services:"),n.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("div",{className:"images"},Object(s.a)(Array(l)).map((function(e,t){return r.a.createElement("img",{key:t,src:"https://assets-springhire.gumlet.io/".concat(i).concat(t+1,".png?blur=30"),"data-src":"https://assets-springhire.gumlet.io/".concat(i).concat(t+1,".png"),alt:i})})))))},m=(a(38),[{product:"Porsche Motors",client:"Porsche",services:["Directing","Sound Design","Post Production"],imgCount:2},{product:"Toro Horizon 360",client:"Toro",services:["Branding","Development","UX/UI Design"],imgCount:2,reversed:!0},{product:"Burst Oral Care",client:"Burst Oral",services:["Web Design","Development","Branding"],imgCount:1},{product:"Dance Party",services:["Branding","Development","UX/UI Design"],imgCount:3,reversed:!0},{product:"Handstand",services:["App Design","Branding","Development"],imgCount:3},{product:"Range",services:["Branding","Design","Development","Quality"],imgCount:1,reversed:!0}]),u=[5,2,3,4,1,0],d=function(e){var t=e.work;return r.a.createElement(r.a.Fragment,null,p(t))},p=function(e){return r.a.createElement(r.a.Fragment,null,e?u.map((function(e,t){return r.a.createElement(o,{key:t,product:m[e].product,client:m[e].client,services:m[e].services,imgCount:m[e].imgCount,reversed:m[e].reversed,classname:m[e].product.trim().toLowerCase().split(" ")[0]})})):m.map((function(e,t){var a=e.product,n=e.client,l=e.services,i=e.imgCount,c=e.reversed;return r.a.createElement(o,{key:t,product:a,client:n,services:l,imgCount:i,reversed:c,classname:a.trim().toLowerCase().split(" ")[0]})})))},E=function(e){var t=e.p;return r.a.createElement("section",{className:"services"},r.a.createElement("h3",null,"Our Services"),t&&r.a.createElement("p",null,"At SpringHire, we build brands and digital products for some of the most innovative startups in the world. A truly one-of-a-kind software development and experience design agency\u2014relentlessly focused on the end user experience and the ways brands engage, communicate and transact with their consumers online and on mobile devices. We offer fully integrated product development and design services \u2014 software development + experience design; management, technology consulting, infrastructure design and marketing."),r.a.createElement("div",{className:"list"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://assets-springhire.gumlet.io/services/content.svg","data-src":"https://assets-springhire.gumlet.io/services/content.svg",alt:""}),r.a.createElement("div",null,"Content Strategy")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://assets-springhire.gumlet.io/services/front-end-dev.svg","data-src":"https://assets-springhire.gumlet.io/services/front-end-dev.svg",alt:""}),r.a.createElement("div",null,"Front-end Development")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://assets-springhire.gumlet.io/services/interface.svg","data-src":"https://assets-springhire.gumlet.io/services/interface.svg",alt:""}),r.a.createElement("div",null,"Interface Design")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://assets-springhire.gumlet.io/services/back-end-dev.svg","data-src":"https://assets-springhire.gumlet.io/services/back-end-dev.svg",alt:""}),r.a.createElement("div",null,"Back-end Development"))))};a(11);function h(e,t){this.$object=e,this.$container=t,this.container_is_window=t===window,this.pixels_per_second=window.innerWidth<1e3?100:150,this.current_position={x:0,y:0},this.is_running=!1}h.prototype.setSpeed=function(e){this.pixels_per_second=e},h.prototype._getContainerDimensions=function(){return this.$container===window?{height:this.$container.innerHeight,width:this.$container.innerWidth}:{height:this.$container.clientHeight,width:this.$container.clientWidth}},h.prototype._generateNewPosition=function(){var e=this._getContainerDimensions(),t=e.height-this.$object.clientHeight/2,a=e.width-this.$object.clientHeight/2,n=Math.floor(Math.random()*t);return{x:Math.floor(Math.random()*a),y:n}},h.prototype._calcDelta=function(e,t){var a=e.x-t.x,n=e.y-t.y;return Math.sqrt(a*a+n*n)},h.prototype._moveOnce=function(){var e=this._generateNewPosition(),t=this._calcDelta(this.current_position,e),a=Math.round(t/this.pixels_per_second*100)/100;this.$object.style.transition="transform "+a+"s ease",this.$object.style.transform="translate3d("+e.x+"px, "+e.y+"px, 0)",this.current_position=e},h.prototype.start=function(){this.is_running||(this.$object.willChange="transform",this.$object.pointerEvents="auto",this.boundEvent=this._moveOnce.bind(this),this.$object.addEventListener("transitionend",this.boundEvent),this._moveOnce(),this.is_running=!0)},h.prototype.stop=function(){this.is_running&&(this.$object.removeEventListener("transitionend",this.boundEvent),this.is_running=!1)};var v=a(30),g=a(15),f=a.n(g),w=a(23),N=["name","onCompleted","onError"];var b=function(e){var t=e.name,l=e.onCompleted,i=e.onError,s=Object(v.a)(e,N),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(n.useRef)(),l=Object(n.useState)(!1),i=Object(c.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(),u=Object(c.a)(m,2),d=u[0],p=u[1],E=t.onCompleted,h=t.onError;return Object(n.useEffect)((function(){o(!0),function(){var t=Object(w.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a(40)("./".concat(e,".svg"));case 3:r.current=t.sent.default,E&&E(e,r.current),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),h&&h(t.t0),p(t.t0);case 11:return t.prev=11,o(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})));return function(){return t.apply(this,arguments)}}()()}),[e,E,h]),{error:d,loading:s,SvgIcon:r.current}}(t,{onCompleted:l,onError:i}),m=o.error,u=o.loading,d=o.SvgIcon;return m?m.message:u?r.a.createElement("div",{className:"loader"}):d?r.a.createElement(d,s):null},y=function(e){return[{text:"About",href:"/about-us"},{text:"Work",href:"/work"},{text:"Hire Us",href:"/hire-us"}].map((function(t,a){var n=t.text,l=t.href,i=r.a.createElement("a",{href:l},n);return r.a.createElement("li",{key:a},"nav"===e?r.a.createElement("h4",null,i):r.a.createElement(r.a.Fragment,null,i))}))},O=function(){return r.a.createElement("footer",null,r.a.createElement("h6",null,"Ready to build the next big thing together?"),r.a.createElement("a",{href:"/hire-us",className:"blue"},"Start a Project"),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("a",{href:"/"},r.a.createElement(b,{name:"footer-logo"})),r.a.createElement("div",{className:"science"},r.a.createElement("span",null,"A Science Inc. Partnership"),r.a.createElement("span",{className:"dash"}),r.a.createElement(b,{name:"science"}))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"tel:+13235078708"},"+1 323-507-8708")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:info@springhire.info"},"info@springhire.info"))),r.a.createElement("ul",null,y()),r.a.createElement(b,{name:"social"})))},S=a(24),C=a.n(S),D=function(){var e=Object(n.useState)(window.innerWidth),t=Object(c.a)(e,2),a=t[0],r=t[1],l=function(){r(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]),a<=767},A=function(e){var t=e.navOpen;return r.a.createElement(C.a,{duration:500,when:t},r.a.createElement("div",{className:"nav-menu ".concat(t?"":"close")},r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"Menu:"),y("nav"),r.a.createElement("li",{className:"social"},!D()&&r.a.createElement(b,{name:"social"}))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"Contact:"),r.a.createElement("li",null,r.a.createElement("h5",null,r.a.createElement("a",{href:"tel:+13235078708"},"+1 323-507-8708"))),r.a.createElement("li",null,r.a.createElement("h5",null,r.a.createElement("a",{href:"mailto:info@springhire.info"},"info@springhire.info")))),r.a.createElement("div",{className:"science"},r.a.createElement("span",null,"A Science Inc. Partnership"),r.a.createElement("span",{className:"dash"}),r.a.createElement(b,{name:"science"}))),D()&&r.a.createElement(b,{name:"social"})))},k=parseInt(Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)),j=function(e){var t=e.setNavOpen,a=e.navOpen;return r.a.createElement("nav",null,r.a.createElement("div",{className:"top"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://assets-springhire.gumlet.io/logo.svg","data-src":"https://assets-springhire.gumlet.io/logo.svg",alt:"SpringHire"}))),r.a.createElement("div",{className:"bottom ".concat(a?"open":""),onClick:function(){t(!a)}},Object(s.a)(Array(parseInt(3))).map((function(e,t){return r.a.createElement("span",{key:t})}))))},x=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e,t,a=document.getElementsByClassName("window")[0],n=document.getElementsByClassName("hero")[0],r=new h(a,n);r.start(),n.addEventListener("mousemove",(function(n){e&&clearTimeout(e),t&&clearTimeout(t),r.stop();var l=n.pageY+200<k?n.pageY-200:k-390,i=n.pageX-200;a.setAttribute("style","top: ".concat(l,"px; left: ").concat(i,"px;")),e=setTimeout((function(){a.setAttribute("style","top: 0; left: 0;"),a.style.transform="translate3d(0, 0, 0)",t=setTimeout((function(){r.start()}),3e3)}),2e3)}),!1)})),r.a.createElement("main",{className:"home"},r.a.createElement(j,{setNavOpen:l,navOpen:a}),r.a.createElement(A,{navOpen:a}),r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"marquee"},Object(s.a)(Array(parseInt(k/20))).map((function(e,t){return r.a.createElement("span",{key:t},"< ANDRIOD > = < DEVELOPMENT > ; < USER-EXPERIENCE > ? < PRODUCT > # < MANAGEMENT > : < DESIGN > < RESEARCH > / < BRANDING > = < IDENTITY > ; < USER-INTERFACE > ? < DATA > # < CREATIVE > : < FRONT-END > $ < BACK-END > ! < STRATEGY > & < IOS > / < ANDRIOD > = < DEVELOPMENT > ; < USER-EXPERIENCE > ? < PRODUCT > # < MANAGEMENT > : < DESIGN > < RESEARCH > / < BRANDING > = < IDENTITY > ; < USER-INTERFACE > ? < DATA > # < CREATIVE > : < FRONT-END > $ < BACK-END > ! < STRATEGY > & < IOS >")}))),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"window"})),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"We\u2019re SpringHire."),r.a.createElement("h3",null,"Your technology & brand partner"))),r.a.createElement("div",{className:"home sections-wrapper"},r.a.createElement(E,null),r.a.createElement("div",{className:"sections-inner"},r.a.createElement(d,null)),r.a.createElement(O,null)))},T=function(){return r.a.createElement("section",{className:"team"},r.a.createElement("h3",null,"Our Team"),r.a.createElement("p",null,"Our core team is made up of experienced professionals in software development, experience design, project management, narrative development and marketing. In the last 2 years, we have worked with over 80 different clients and continue to grow our teams."),r.a.createElement("div",{className:"list"},r.a.createElement("div",null,r.a.createElement("div",{className:"name"},"Kartik Mandaville"),r.a.createElement("span",{className:"role"},"Chief Executive Officer")),r.a.createElement("div",null,r.a.createElement("div",{className:"name"},"Vinay Agarwal"),r.a.createElement("span",{className:"role"},"Chief Technology Officer")),r.a.createElement("div",null,r.a.createElement("div",{className:"name"},"Madeline Eckles"),r.a.createElement("span",{className:"role"},"Chief Creative Officer")),r.a.createElement("div",null,r.a.createElement("div",{className:"name"},"Moshe Vhanunu"),r.a.createElement("span",{className:"role"},"Director of Partnership Development"))),r.a.createElement("h3",{className:"more"},"+150 More..."))},_=a(25),I=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("main",{className:"about"},r.a.createElement(_.a,null,r.a.createElement("title",{"data-react-helmet":"true"},"About Us | SpringHire"),r.a.createElement("meta",{name:"description",content:"Aimed at world class deliverables, SpringHire is a full-service development and design agency. Check our works done and services offered.","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:site_name",content:"SpringHire","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:title",content:"About Us | SpringHire","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:description",content:"Aimed at world class deliverables, SpringHire is a full-service development and design agency. Check our works done and services offered.","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:url",content:"https://www.springhire.info/about-us/","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:type",content:"website","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:image",content:"https://assets-springhire.gumlet.io/SpringHire- About.jpg","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:image:secure_url",content:"https://assets-springhire.gumlet.io/SpringHire- About.jpg","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:image:width",content:"1280","data-react-helmet":"true"}),r.a.createElement("meta",{property:"og:image:height",content:"640","data-react-helmet":"true"}),r.a.createElement("meta",{property:"twitter:title",content:"About Us | SpringHire","data-react-helmet":"true"}),r.a.createElement("meta",{property:"twitter:description",content:"Aimed at world class deliverables, SpringHire is a full-service development and design agency. Check our works done and services offered.","data-react-helmet":"true"}),r.a.createElement("meta",{property:"twitter:card",content:"website","data-react-helmet":"true"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image","data-react-helmet":"true"}),r.a.createElement("meta",{property:"twitter:image",content:"https://assets-springhire.gumlet.io/SpringHire- About.jpg","data-react-helmet":"true"}),r.a.createElement("link",{rel:"canonical",href:"https://www.springhire.info/about-us/","data-react-helmet":"true"})),r.a.createElement(j,{setNavOpen:l,navOpen:a}),r.a.createElement(A,{navOpen:a}),r.a.createElement("div",{className:"sections"},r.a.createElement("section",{className:"banner"},r.a.createElement("div",{className:"top-blur"}),r.a.createElement("div",{className:"center-blur"}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"The future isn\u2019t going to build itself."),r.a.createElement("p",null,"We must be proactive and thoughtful in how we shape the most powerful tool ever created - technology. SpringHire is a full-service development and design agency based in Bangalore and Santa Monica. Our processes are both creative and controlled and result in world class deliverables."))),r.a.createElement(E,{p:!0}),r.a.createElement(T,null),r.a.createElement(O,null)))},R=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),o=s[0],m=s[1];return r.a.createElement("main",{className:"form"},r.a.createElement(j,{setNavOpen:l,navOpen:a}),r.a.createElement(A,{navOpen:a}),r.a.createElement("div",{className:"hero"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Thank you!"),r.a.createElement("a",{href:"/",className:"center"},"Home")):r.a.createElement("form",{action:"mailto:info@springhire.info",method:"get",onSubmit:function(){m(!0);var e=document.querySelector("form"),t=new FormData(e),a=new URLSearchParams(t).toString().replaceAll("+","%20");window.location.href="mailto:info@springhire.info?".concat(a)}},r.a.createElement("h3",null,"Let\u2019s make something..."),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Full name",name:"name",required:!0})),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",name:"from",required:!0})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Company",name:"subject",required:!0})),r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"Message",name:"body",rows:"5",required:!0})),r.a.createElement("button",null,"Send message"))))},H=a(28),M=a(2),P=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("main",{className:"work"},r.a.createElement(j,{setNavOpen:l,navOpen:a}),r.a.createElement(A,{navOpen:a}),r.a.createElement("div",{className:"work sections-wrapper"},r.a.createElement("section",{className:"services"},r.a.createElement("h1",null,"Our Work."),r.a.createElement("h3",null,"We build things that matter: brands, products and experiences.")),r.a.createElement("div",{className:"sections-inner"},r.a.createElement(d,{work:!0})),r.a.createElement(O,null)))};var $=function(){return r.a.createElement(H.a,null,r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/"},r.a.createElement(x,null)),r.a.createElement(M.a,{exact:!0,path:"/about-us"},r.a.createElement(I,null)),r.a.createElement(M.a,{exact:!0,path:"/hire-us"},r.a.createElement(R,null)),r.a.createElement(M.a,{exact:!0,path:"/work"},r.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);