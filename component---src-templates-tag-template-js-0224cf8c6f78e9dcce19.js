(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1xLx":function(e,a,t){},"6V6j":function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t("q1tI"),r=t.n(n),i=t("wd/R"),s=t.n(i),l=t("Wbzz"),c=t("1xLx"),m=t.n(c),o=function(e){var a=e.edges;return r.a.createElement("div",{className:m.a.feed},a.map(function(e){return r.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:m.a["feed__item-meta"]},r.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:s()(e.node.frontmatter.date).format("MMMM D, YYYY")},s()(e.node.frontmatter.date).format("MMMM YYYY")),r.a.createElement("span",{className:m.a["feed__item-meta-divider"]}),r.a.createElement("span",{className:m.a["feed__item-meta-category"]},r.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:m.a["feed__item-title"]},r.a.createElement(l.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),r.a.createElement(l.Link,{className:m.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))}},RBgx:function(e,a,t){},RXmK:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t("q1tI"),r=t.n(n),i=t("RBgx"),s=t.n(i),l=function(e){var a=e.title,t=e.children;return r.a.createElement("div",{className:s.a.page},r.a.createElement("div",{className:s.a.page__inner},a&&r.a.createElement("h1",{className:s.a.page__title},a),r.a.createElement("div",{className:s.a.page__body},t)))}},U4DU:function(e,a,t){},UbMB:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===i)for(var s in n)t.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},hZQ8:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return o});var n=t("q1tI"),r=t.n(n),i=t("Zttt"),s=t("6V6j"),l=t("RXmK"),c=t("v0M6"),m=t("gGy4"),o="1498193280";a.default=function(e){var a=e.data,t=e.pageContext,n=Object(m.b)(),o=n.title,d=n.subtitle,f=t.tag,u=t.currentPage,g=t.prevPagePath,p=t.nextPagePath,_=t.hasPrevPage,v=t.hasNextPage,P=a.allMarkdownRemark.edges,E=u>0?'All Posts tagged as "'+f+'" - Page '+u+" - "+o:'All Posts tagged as "'+f+'" - '+o;return r.a.createElement(i.a,{title:E,description:d},r.a.createElement(l.a,{title:f},r.a.createElement(s.a,{edges:P}),r.a.createElement(c.a,{prevPagePath:g,nextPagePath:p,hasPrevPage:_,hasNextPage:v})))}},v0M6:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t("q1tI"),r=t.n(n),i=t("UbMB"),s=t.n(i),l=t("Wbzz"),c=t("WlAH"),m=t("U4DU"),o=t.n(m),d=s.a.bind(o.a),f=function(e){var a=e.prevPagePath,t=e.nextPagePath,n=e.hasNextPage,i=e.hasPrevPage,s=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),m=d({"pagination__next-link":!0,"pagination__next-link--disable":!n});return r.a.createElement("div",{className:o.a.pagination},r.a.createElement("div",{className:o.a.pagination__prev},r.a.createElement(l.Link,{rel:"prev",to:i?a:"/",className:s},c.b.PREV_PAGE)),r.a.createElement("div",{className:o.a.pagination__next},r.a.createElement(l.Link,{rel:"next",to:n?t:"/",className:m},c.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-0224cf8c6f78e9dcce19.js.map