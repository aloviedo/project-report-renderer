_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("kSR+"),c=o.a.createElement,s=!0;t.default=Object(a.a)((function(){return c("p",null,"Choose a report to view.")}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),s=n("elyg"),u=(n("g/15"),n("nOHt")),i=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",b=c.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href);return{href:t,as:e.as?(0,s.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),m=b.href,w=b.as;c.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,s.isLocalURL)(m)&&!l[m+"%"+w])return p(a,(function(){d(h,m,w)}))}),[t,a,m,w,h]);var g=e.children,E=e.replace,_=e.shallow,y=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var N=c.Children.only(g),R={ref:function(e){e&&i(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,w,E,_,y)}};return t&&(R.onMouseEnter=function(e){(0,s.isLocalURL)(m)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(h,m,w,{priority:!0}))}),!e.passHref&&("a"!==N.type||"href"in N.props)||(R.href=(0,s.addBasePath)(w)),c.default.cloneElement(N,R)};t.default=h},"kSR+":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),s=o.a.createElement;function u(e){return function(t){return s("div",{className:"lg:grid gap-8 grid-cols-sidebar-content"},s("div",{className:"h-fit-content mb-4 pb-4 border-b lg:border-b-0"},s("h2",{className:"mb-2"},"Reports"),s("ul",{className:"h-fit-content border rounded-lg shadow-xs"},t.reportNames.map((function(e){return s("li",{key:e,className:"border-b last:border-b-0"},s(c.a,{href:"/reports/[name]",as:"/reports/".concat(e)},s("a",{className:"block p-2 text-current hover:no-underline"},e)))})))),s("div",{className:"max-w-full"},s(e,t)))}}}},[["/EDR",0,2,1]]]);