(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/sample.b61f96d4.png"},245:function(e,t,a){e.exports=a.p+"static/media/earth.67af05e1.jpg"},246:function(e,t,a){e.exports=a(540)},452:function(e,t,a){},460:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},467:function(e,t,a){},533:function(e,t,a){},534:function(e,t,a){},535:function(e,t,a){},536:function(e,t,a){},540:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),o=(a(251),a(260),a(450),a(451),a(452),a(28)),s=a(19),c=a(235),m=a.n(c),d=Object(s.c)(Object(o.b)((function(e){return e.portfolio.meta})))((function(e){var t=e.icon?"/img/"+e.icon:"https://reactjs.org/favicon.ico";return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description}),r.a.createElement("meta",{property:"og:title",content:e.title}),r.a.createElement("link",{rel:"shortcut icon",href:t})))})),u=a(545),p=a(546),b=a(29),f=a.n(b),g=function(e,t){var a=document.getElementById(t),n=document.querySelector(".navbar"),r=document.querySelector(".navbar-collapse"),l=r.classList.contains("show")?r.offsetHeight:0,i=a.offsetTop-(n.offsetHeight+10)+l;t&&a&&f()("html, body").animate({scrollTop:i},800,"easeInOutExpo")},h=(a(460),Object(s.c)(Object(o.b)((function(e){return{menu:e.portfolio.menu,sections:e.portfolio.sections}})))((function(e){return Object(n.useEffect)((function(){var e=document.querySelector(".navbar"),t=f()("body");e&&(window.addEventListener("scroll",(function(){window.pageYOffset>e.offsetHeight?(e.classList.add("navbar-light"),e.classList.remove("navbar-dark")):(e.classList.add("navbar-dark"),e.classList.remove("navbar-light"))})),t.scrollspy({target:".navbar.fixed-top",offset:e.offsetHeight+50}))})),r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",className:"navbar-dark"},r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"ml-auto",defaultActiveKey:"#home"},r.a.createElement(p.a.Link,{href:"#home",onClick:function(e){return g(0,"home")}},e.menu.home),r.a.createElement(p.a.Link,{href:"#about",onClick:function(e){return g(0,"about")}},e.menu.about),e.sections.map((function(e){return r.a.createElement(p.a.Link,{key:e.id,href:"#"+e.id,onClick:function(t){return g(0,e.id)}},e.menu)})))))}))),E=a(542),y=a(66),v=a(108),w=a(241),k=a.n(w),j=(a(465),a(466),Object(s.c)(Object(o.b)((function(e){return e.portfolio.intro})))((function(e){return r.a.createElement("div",{id:"home",className:"intro bg-image background"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"intro-content display-table"},r.a.createElement("div",{className:"table-cell"},r.a.createElement(E.a,null,r.a.createElement("h1",{className:"intro-title mb-4"},e.headline),r.a.createElement("p",{className:"intro-subtitle"},r.a.createElement("span",{className:"text-slider-items"}),r.a.createElement("strong",{className:"text-slider"},r.a.createElement(k.a,{strings:e.typed,typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.a.createElement("p",{className:"pt-3"},r.a.createElement("a",{className:"btn btn-primary btn-lg js-scroll px-4",href:"#about",role:"button",onClick:function(e){return g(0,"about")}},r.a.createElement(y.a,{icon:v.a})))))))}))),N=a(543),O=a(544),S=(a(467),function(e){return r.a.createElement("div",{className:e.box||"title-box"},r.a.createElement("h3",{className:e.titleType||"title-a"},e.headline),r.a.createElement("p",{className:"subtitle-a"},e.subhead),r.a.createElement("div",{className:"line-mf"}))}),x=a(242),I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"dark",className:"badge float-right bg-medium"},e.timeframe),r.a.createElement("h5",null,e.title," -"," ",r.a.createElement("span",{className:"font-weight-normal"},e.company)),r.a.createElement("p",{className:"font-weight-light"},e.summary))},D=function(e){return r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},e.name),r.a.createElement("br",null),e.list)},L=function(e){var t={job:I,tool:D}[e.tag||"job"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{headline:e.headline,box:"title-box-2",titleType:"title-left"}),e.list.map((function(e,a){return r.a.createElement(t,Object.assign({},e,{key:a}))})))},T=function(e){return r.a.createElement("div",{className:"pb-2 mb-5 pt-md-0"},r.a.createElement("p",{className:"lead font-weight-normal"},e.headline),e.summary&&e.summary.map((function(e,t){return r.a.createElement("p",{className:"lead",key:t},e)})))},C=Object(s.c)(Object(o.b)((function(e){return e.portfolio.resume})))((function(e){return r.a.createElement(E.a,{className:"section-wrapper"},r.a.createElement(N.a,{id:"about"},r.a.createElement(O.a,{className:"shadow-sm p-5 bg-light"},r.a.createElement(N.a,null,r.a.createElement(O.a,{md:6},r.a.createElement(T,e),r.a.createElement(L,{headline:e.toolsHeadline,list:e.tools,tag:"tool"})),r.a.createElement(O.a,{md:6},r.a.createElement(L,{headline:e.jobsHeadline,list:e.jobs,tag:"job"}))))))})),A=a(157),P=a(114),U=a(67),H=a(109),W=a.n(H),F=function(e){var t=e.image?"img/"+e.image:W.a;return r.a.createElement(U.a,{className:"shadow-sm"},r.a.createElement(U.a.Img,{variant:"top",src:t,alt:e.title}),r.a.createElement(U.a.Body,null,r.a.createElement(U.a.Title,null,e.title),r.a.createElement(U.a.Text,null,e.summary)))},M=function(e){var t=Object(n.useState)(!1),a=Object(A.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(0),s=Object(A.a)(o,2),c=s[0],m=s[1],d=function(e){i(!l),m(e)},u=[];return r.a.createElement(E.a,{className:"section-wrapper"},r.a.createElement(N.a,{id:e.id,className:"text-center"},r.a.createElement(S,{headline:e.headline,subhead:e.subhead})),r.a.createElement(N.a,null,e.projects.map((function(e,t){var a;return u.push({source:(a=e.image,a?"img/"+a:W.a)}),r.a.createElement(O.a,{xl:4,md:6,className:"mb-4",key:e.id,onClick:function(){return d(t)}},r.a.createElement(F,e))}))),r.a.createElement(P.b,null,l?r.a.createElement(P.a,{onClose:d},r.a.createElement(P.c,{views:u,currentIndex:c})):null))},B=(a(533),Object(s.c)(Object(o.b)((function(e){return{sections:e.portfolio.sections}})))((function(e){return r.a.createElement(E.a,null,e.sections.map((function(e,t){return r.a.createElement(M,Object.assign({},e,{key:t}))})))}))),G=a(113),X=function(e){var t={github:G.a,tumblr:G.c,linkedin:G.b};return r.a.createElement("ul",{className:"socials"},e.list.map((function(e){return r.a.createElement("li",{key:e.service},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement("span",{className:"ico-circle"},r.a.createElement(y.a,{icon:t[e.service]}))))})))},q=(a(534),a(245)),J=a.n(q),z=Object(s.c)(Object(o.b)((function(e){return e.portfolio.footer})))((function(e){var t={backgroundImage:"url("+(e.background?"img/"+e.background:J.a)+")"};return r.a.createElement(E.a,{className:"paralax-mf footer-paralax bg-image section-wrapper",style:t,fluid:!0},r.a.createElement("div",{className:"overlay-mf"}),r.a.createElement("footer",null,r.a.createElement(E.a,null,r.a.createElement(N.a,null,r.a.createElement(O.a,{className:"text-center"},r.a.createElement(X,{list:e.social}),r.a.createElement("div",{className:"copyright-box"},r.a.createElement("p",{className:"copyright"},e.footerMessage)))))))})),R=(a(535),function(){return Object(n.useEffect)((function(){f()(".back-to-top").click((function(){return f()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){var e=document.querySelector(".back-to-top");null!==e&&(window.pageYOffset>100?(e.classList.remove("fadeOut"),e.style.display="block",e.classList.add("fadeIn")):(e.classList.remove("fadeIn"),e.classList.add("fadeOut")))}))})),r.a.createElement("a",{href:"/#",className:"back-to-top animated"},r.a.createElement(y.a,{icon:v.b}))}),Q=(a(536),function(){return Object(n.useEffect)((function(){f()(window).on("load",(function(){f()("#preloader").length&&f()("#preloader").delay(100).fadeOut("slow",(function(){f()(this).remove()}))}))})),r.a.createElement("div",{id:"preloader"})}),Y=(a(537),a(539),{meta:{title:"Josh Lind - Portfolio",description:"All the info you need to know if I'm the right cadidate.",icon:"icon.png"},menu:{home:"Hello",about:"Resume"},intro:{headline:"Josh is profesh.",typed:["Web Developer","Front-end Developer","UX Designer","Data Analyst","Tinkerer"]},resume:{headline:"I develop, maintain, and refine web systems.",summary:["Including: front-end code, content management backends and APIs, UX components, user data flow, logging metrics, enabling analytics, and directing projects. After 15 years in the industry, I believe in design systems, smart integrations, and open-source tools.","Visual portfolio available for interviews (web UX, style guides, mobile)."],jobsHeadline:"Work History",jobs:[{title:"Full-stack Web Dev",company:"DroneDeploy",timeframe:"2017-2019",summary:"I built and integrated tools and APIs to create, manage, and measure marketing campaigns and pipe data to sales. This included rebuilding the front-end website to be editable, component driven, and provide elegant, measurable, browser-compatible experiences. DroneDeploy is software to enable physical businesses with 3D models, maps."},{title:"Team Lead, Web Dev",company:"Tableau",timeframe:"2009-2017",summary:"I architected systems, ran projects, and solved many at-scale web needs for marketing to handle rapid company growth and lead volume. I remained an individual contributor, but also hired and led a team of successful developers and expanded our work across departments. Tableau is software for people to see and understand their data."},{title:"Front-end Web Dev",company:"Skull Squad",timeframe:"2009",summary:"I helped turn client requirements into web-based tools that streamlined businesses and tested new ideas."},{title:"Web Designer",company:"Strands Labs",timeframe:"2008",summary:"I helped create a place-based social network prototype for \u201cthird-place\u201d public spaces."},{title:"Lead Dev / UX",company:"YourSports",timeframe:"2006-2007",summary:" I built web UI, designed mocks and provided technical leadership for a funded startup."},{title:"Ops Manager",company:"UW Career Center",timeframe:"2006",summary:"I refined web experiences, managed backups, provided technical guidance, etc."},{title:"\u201cWebmaster\u201d",company:"UW Exp. College",timeframe:"2005",summary:"I rebuilt their website, created a data backend, added course discovery and educator profile features, etc."}],toolsHeadline:"Code & Tools",tools:[{name:"Languages",list:"JavaScript, SCSS, PHP, SQL"},{name:"Frameworks",list:"React, MetalsmithJS, Drupal"},{name:"Data Storage",list:"mySQL, Firebase, CMS, MixPanel, NewRelic, BigQuery"},{name:"Utilities",list:"Git, npm, Grunt, Drush, CircleCI/Travis"},{name:"Design Software",list:"Photoshop, Illustrator, InDesign, in-browser"}]},sections:[{id:"portfolio",menu:"Portfolio",headline:"Portfolio",subhead:"Projects that mattered.",projects:[{id:"components-guides",title:"Style & Component Guides",summary:"These collaborations have made teams faster and UX polished. Style guides and visual components benefit everyone involved.",image:"Screenshot 2020-01-22 21.06.08.png",slides:[]},{id:"interdepartmental",title:"Cross-team SaaS UIs",summary:"Projects reaching across departments can improve: onboarding, renewals, consistency, etc. ...uniting UX across teams.",image:"Screenshot 2020-01-22 21.07.01.png",slides:[]},{id:"personalization",title:"Personalization",summary:"Any existing UI could be more user/context-aware. I value these project for both lead conversion and customer delight.",image:"Screenshot 2020-01-22 21.06.36.png",slides:[]},{id:"mobile",title:"Mobile UX",summary:"Great pure mobile UX goes beyond just ensuring all web presence is responsive. But the process reveals core features.",image:"Screenshot 2020-01-22 21.07.14.png",slides:[]},{id:"data-metrics-testing-optimize",title:"Analysis Optimized",summary:"Smattering of examples of analyzing and building metrics, running behavior tests, and checking asumptions.",image:"",slides:[]},{id:"open-source",title:"Open Source",summary:"The best tech stacks are heavily open source, participation is implied. One contribution is this portfolio template.",image:"",slides:[]}]},{id:"art",menu:"Artsy",headline:"Sparks & Crafts",subhead:"Artwork, installs and collaboration.",projects:[{id:"crystal-experiment",title:"Crystal Experiment",summary:"Arcade machine performing a faux study on crystal powers. The results can be seen here crystal-experiment.web.app (butten presses are logged via WiFi).",image:"2019-12-13 00.00.57.jpg",slides:[]},{id:"final-approach-motel",title:"Final Approach Motel",summary:"Tiny bar styled as a mid-century, up-scale, lobby. This \u201croach motel\u201d features morphing wallpaper, resin wing chandelier, and cockroach staff. Golden Guy, BRC.",image:"2019-09-03 23.34.37.jpg",slides:[]},{id:"popagenda",title:"POP-AGENDA",summary:"Mini food-truck that serves popcorn and a DJ booth, complete with aprons and bow ties. This can be found at popagenda.org, CascadiaNW, and SeaCompression.",image:"49039435743_6dd24480bc_o.jpg",slides:[]},{id:"light-skirmish",title:"Light Skirmish",summary:"Interactive two-player game based on the vintage Ringer arcade. A circle of wifi-controlled LED stage lights and two wireless nautical steering wheels let players face off.",image:"2017-06-18 20.15.05.jpg",slides:[]},{id:"night-ballons",title:"Night Balloons",summary:"A string of controllable balloon lanterns connected with ethernet. This install was at Burien Arts-A-Glow.",image:"2016-01-26 16.13.55.jpg",slides:[]}]}],footer:{social:[{service:"tumblr",link:"https://doublejosh.com/archive"},{service:"github",link:"https://github.com/doublejosh"},{service:"linkedin",link:"https://www.linkedin.com/in/doublejosh"}],footerMessage:"Thanks for reading.",background:""}}),_=Object(s.b)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;arguments.length>1&&arguments[1];return e}}),K=Object(s.d)(_,{});i.a.render(r.a.createElement((function(){return Object(n.useEffect)((function(){document.querySelector(".navbar")})),r.a.createElement(o.a,{store:K},r.a.createElement("div",{"data-spy":"scroll","data-target":".navbar.fixed-top","data-offset":"0"},r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(B,null),r.a.createElement(z,null),r.a.createElement(R,null),r.a.createElement(Q,null)))}),null),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.4dbe83d3.chunk.js.map