"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{8346:function(e,t,n){n.d(t,{$:function(){return p},VB:function(){return v},WF:function(){return f},ko:function(){return i},zx:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="8b67a89c3b3cf87de76d1484537ca872";o().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},8871:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),a=n(2791),c=n(6871),u=n(8346),o=n(184);function s(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.VB)(Number(i)).then((function(e){s(e.results)}))}),[i]),(0,o.jsx)("div",{children:n.length>0?(0,o.jsx)("ul",{children:n.map((function(e,t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h2",{children:"Author: ".concat(e.author)}),(0,o.jsx)("p",{children:e.content})]},t)}))}):(0,o.jsx)("p",{children:"We don`t have any reviews for this movie."})})}}}]);
//# sourceMappingURL=Reviews.e5e7cb7f.chunk.js.map