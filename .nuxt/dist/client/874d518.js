(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(t,e,n){"use strict";n.r(e);var o=n(62),c=n.n(o),l={props:{post:{required:!0,type:Object,default:{}}}},r=n(9),f={components:{PostDetail:Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    container\n    mt-5\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n  "},[n("blockquote",{staticClass:"blockquote"},[n("h3",[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.subTitle))]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n      "+t._s(t.post.text)+"\n    ")]),t._v(" "),n("footer",{staticClass:"blockquote-footer"},[t._v(t._s(t.post.author))])])])}),[],!1,null,null,null).exports},asyncData:function(t){return c.a.get("https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts/".concat(t.params.postId,".json")).then((function(t){return{fetchedPost:t.data}}))}},d=Object(r.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostDetail",{attrs:{post:t.fetchedPost}})}),[],!1,null,"abd78eba",null);e.default=d.exports}}]);