exports.ids = [4];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("350791d6", content, true, context)
};

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_1401744a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_1401744a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_1401744a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_1401744a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_1401744a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-1401744a]{width:18rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostList.vue?vue&type=template&id=26ff1cd3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    container-fluid\n    mt-5\n    d-flex\n    flex-wrap\n    justify-content-center\n    align-items-center\n  "},_vm._l((_vm.posts),function(post){return _c('Post',{key:post.id,attrs:{"post":post,"is-admin":_vm.isAdmin}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/post/PostList.vue?vue&type=template&id=26ff1cd3&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/post/Post.vue?vue&type=template&id=1401744a&scoped=true&
var Postvue_type_template_id_1401744a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card mr-3 mb-3 card-success"},[_vm._ssrNode("<div class=\"card-body\" data-v-1401744a><h5 class=\"card-title\" data-v-1401744a>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h5> <h6 class=\"card-subtitle mb-2 text-muted\" data-v-1401744a>"+_vm._ssrEscape(_vm._s(_vm.post.subtitle))+"</h6> <p class=\"card-text\" data-v-1401744a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.post.text)+"\n    ")+"</p> "+((_vm.isAdmin)?("<div class=\"admin-button-conteiner\" data-v-1401744a><a href=\"#\" class=\"btn btn-outline-warning btn-sm\" data-v-1401744a>Düzenle</a> <a href=\"#\" class=\"btn btn-outline-danger btn-sm\" data-v-1401744a>Sil</a></div>"):("<a href=\"#\" class=\"btn btn-outline-info btn-sm\" data-v-1401744a>Görüntüle</a>"))+"</div>")])}
var Postvue_type_template_id_1401744a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/post/Post.vue?vue&type=template&id=1401744a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/post/Post.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Postvue_type_script_lang_js_ = ({
  props: {
    isAdmin: {
      required: true,
      type: Boolean
    },
    post: {
      required: true,
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./components/post/Post.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_Postvue_type_script_lang_js_ = (Postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/post/Post.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_Postvue_type_script_lang_js_,
  Postvue_type_template_id_1401744a_scoped_true_render,
  Postvue_type_template_id_1401744a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "1401744a",
  "52de4902"
  
)

/* harmony default export */ var Post = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PostListvue_type_script_lang_js_ = ({
  components: {
    Post: Post
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    },
    posts: {
      required: true,
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/post/PostList.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostListvue_type_script_lang_js_ = (PostListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/post/PostList.vue





/* normalize component */

var PostList_component = Object(componentNormalizer["a" /* default */])(
  post_PostListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32e099c0"
  
)

/* harmony default export */ var PostList = __webpack_exports__["a"] = (PostList_component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=cc2f077e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('PostList',{attrs:{"posts":_vm.fetchedPosts}}),_vm._ssrNode(" "),_c('About')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=cc2f077e&scoped=true&

// EXTERNAL MODULE: ./components/post/PostList.vue + 9 modules
var PostList = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/home/About.vue?vue&type=template&id=ad3fd514&
var Aboutvue_type_template_id_ad3fd514_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid p-5 mt-5 bg-secondary text-light"},[_vm._ssrNode("<blockquote class=\"blockquote\"><h3>Hakkımda Söyleyebildiklerim</h3> <p class=\"mb-0\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti\n      eveniet hic ipsa iusto molestias quaerat quisquam tenetur voluptatem!\n      Commodi debitis et facilis impedit in necessitatibus odio, repudiandae\n      sapiente sed veniam. Lorem ipsum dolor sit amet, consectetur adipisicing\n      elit. Adipisci, amet atque dicta dignissimos distinctio dolores enim\n      inventore iure nam quam quis repellat ullam voluptatem! Amet fuga\n      laudantium optio tempore. Ab? Lorem ipsum dolor sit amet, consectetur\n      adipisicing elit. Aliquam commodi harum nemo qui quos reiciendis\n      repudiandae sequi, ut. Adipisci assumenda ducimus explicabo harum\n      impedit minima porro, unde. Ad, neque, quas!Lorem ipsum dolor sit amet,\n      consectetur adipisicing elit. Assumenda, aut dolore impedit mollitia\n      nobis perspiciatis quis reprehenderit sed? Amet beatae debitis dicta\n      libero magnam odio perferendis qui sit velit voluptatibus. Lorem ipsum\n      dolor sit amet, consectetur adipiscing elit. Integer posuere erat a\n      ante.\n    </p> <footer class=\"blockquote-footer text-warning\">\n      Someone famous in <cite title=\"Source Title\">Source Title</cite></footer></blockquote>")])}
var Aboutvue_type_template_id_ad3fd514_staticRenderFns = []


// CONCATENATED MODULE: ./components/home/About.vue?vue&type=template&id=ad3fd514&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/About.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Aboutvue_type_template_id_ad3fd514_render,
  Aboutvue_type_template_id_ad3fd514_staticRenderFns,
  false,
  null,
  null,
  "4dd00c9a"
  
)

/* harmony default export */ var About = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    PostList: PostList["a" /* default */],
    About: About
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    }

  } // data() {
  //   return {
  //     fetchedPosts: [],
  //   };
  // },
  // created() {
  //  this.$store.dispatch("setPosts", this.fetchedPosts);
  // },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch("setPosts", [
  //       {
  //         id: 1,
  //         title: "Title 1 ",
  //         subTitle: "Sub title 1 ",
  //         text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //         author: "gazihan1",
  //       },
  //       {
  //         id: 2,
  //         title: "Title 2",
  //         subTitle: "Sub title 2",
  //         text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //         author: "gazihan2",
  //       },
  //       {
  //         id: 3,
  //         title: "Title 3",
  //         subTitle: "Sub title 3",
  //         text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //         author: "gazihan3",
  //       },
  //     ]);
  //     resolve();
  //   });
  // },
  //işlemler biter sonra sayfa yüklenir.
  //   asyncData(context, callback) { -> promise kullandığımız için callback parametresini siliyoruz
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       fetchedPosts: [
  //         {
  //           id: 1,
  //           title: "Title 1 ",
  //           subTitle: "Sub title 1 ",
  //           text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //           author: "gazihan1",
  //         },
  //         {
  //           id: 2,
  //           title: "Title 2",
  //           subTitle: "Sub title 2",
  //           text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //           author: "gazihan2",
  //         },
  //         {
  //           id: 3,
  //           title: "Title 3",
  //           subTitle: "Sub title 3",
  //           text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //           author: "gazihan3",
  //         },
  //       ],
  //     });
  //   })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       context.error(new Error());
  //     });
  //   // setTimeout(() => {
  //   //   // 1. parametre hatalar için -> callback(new Error(), {
  //   //   callback(null, {
  //   //     fetchedPosts: [
  //   //       {
  //   //         id: 1,
  //   //         title: "Title 1 ",
  //   //         subTitle: "Sub title 1 ",
  //   //         text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //   //         author: "gazihan1",
  //   //       },
  //   //       {
  //   //         id: 2,
  //   //         title: "Title 2",
  //   //         subTitle: "Sub title 2",
  //   //         text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //   //         author: "gazihan2",
  //   //       },
  //   //       {
  //   //         id: 3,
  //   //         title: "Title 3",
  //   //         subTitle: "Sub title 3",
  //   //         text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //   //         author: "gazihan3",
  //   //       },
  //   //     ],
  //   //   });
  //   // }, 2000);
  // },

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cc2f077e",
  "474cf99e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map