(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1xLx":function(e,a,t){},"6V6j":function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t("q1tI"),r=t.n(n),i=t("wd/R"),s=t.n(i),l=t("Wbzz"),c=t("1xLx"),o=t.n(c),m=function(e){var a=e.edges;return r.a.createElement("div",{className:o.a.feed},a.map(function(e){return r.a.createElement("div",{className:o.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:o.a["feed__item-meta"]},r.a.createElement("time",{className:o.a["feed__item-meta-time"],dateTime:s()(e.node.frontmatter.date).format("MMMM D, YYYY")},s()(e.node.frontmatter.date).format("MMMM YYYY")),r.a.createElement("span",{className:o.a["feed__item-meta-divider"]}),r.a.createElement("span",{className:o.a["feed__item-meta-category"]},r.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:o.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:o.a["feed__item-title"]},r.a.createElement(l.Link,{className:o.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:o.a["feed__item-description"]},e.node.frontmatter.description),r.a.createElement(l.Link,{className:o.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))}},"999l":function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return d});var n=t("q1tI"),r=t.n(n),i=t("Zttt"),s=t("/d1K"),l=t("6V6j"),c=t("RXmK"),o=t("v0M6"),m=t("gGy4"),d="3533721328";a.default=function(e){var a=e.data,t=e.pageContext,n=Object(m.b)(),d=n.title,f=n.subtitle,u=t.currentPage,p=t.hasNextPage,g=t.hasPrevPage,_=t.prevPagePath,v=t.nextPagePath,P=a.allMarkdownRemark.edges,E=u>0?"Posts - Page "+u+" - "+d:d;return r.a.createElement(i.a,{title:E,description:f},r.a.createElement(s.a,{isIndex:!0}),r.a.createElement(c.a,null,r.a.createElement(l.a,{edges:P}),r.a.createElement(o.a,{prevPagePath:_,nextPagePath:v,hasPrevPage:g,hasNextPage:p})))}},U4DU:function(e,a,t){},UbMB:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===i)for(var s in n)t.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},v0M6:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t("q1tI"),r=t.n(n),i=t("UbMB"),s=t.n(i),l=t("Wbzz"),c=t("WlAH"),o=t("U4DU"),m=t.n(o),d=s.a.bind(m.a),f=function(e){var a=e.prevPagePath,t=e.nextPagePath,n=e.hasNextPage,i=e.hasPrevPage,s=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),o=d({"pagination__next-link":!0,"pagination__next-link--disable":!n});return r.a.createElement("div",{className:m.a.pagination},r.a.createElement("div",{className:m.a.pagination__prev},r.a.createElement(l.Link,{rel:"prev",to:i?a:"/",className:s},c.b.PREV_PAGE)),r.a.createElement("div",{className:m.a.pagination__next},r.a.createElement(l.Link,{rel:"next",to:n?t:"/",className:o},c.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-322564b52a9f61aebfdf.js.map