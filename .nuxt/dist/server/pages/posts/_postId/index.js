exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_postId/index.vue?vue&type=template&id=abd78eba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PostDetail',{attrs:{"post":_vm.fetchedPost}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_postId/index.vue?vue&type=template&id=abd78eba&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostDetail.vue?vue&type=template&id=fd593da8&
var PostDetailvue_type_template_id_fd593da8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    container\n    mt-5\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n  "},[_vm._ssrNode("<blockquote class=\"blockquote\"><h3>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h3> <p>"+_vm._ssrEscape(_vm._s(_vm.post.subTitle))+"</p> <p class=\"mb-0\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.post.text)+"\n    ")+"</p> <footer class=\"blockquote-footer\">"+_vm._ssrEscape(_vm._s(_vm.post.author))+"</footer></blockquote>")])}
var PostDetailvue_type_template_id_fd593da8_staticRenderFns = []


// CONCATENATED MODULE: ./components/post/PostDetail.vue?vue&type=template&id=fd593da8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostDetail.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostDetailvue_type_script_lang_js_ = ({
  props: {
    post: {
      required: true,
      type: Object,
      default: {}
    }
  }
});
// CONCATENATED MODULE: ./components/post/PostDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostDetailvue_type_script_lang_js_ = (PostDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/post/PostDetail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostDetailvue_type_script_lang_js_,
  PostDetailvue_type_template_id_fd593da8_render,
  PostDetailvue_type_template_id_fd593da8_staticRenderFns,
  false,
  null,
  null,
  "2ee0951a"
  
)

/* harmony default export */ var PostDetail = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_postId/index.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var _postIdvue_type_script_lang_js_ = ({
  components: {
    PostDetail: PostDetail
  },

  asyncData(context) {
    return external_axios_default.a.get(`https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`).then(response => {
      return {
        fetchedPost: response.data
      };
    });
  }

});
// CONCATENATED MODULE: ./pages/posts/_postId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_postIdvue_type_script_lang_js_ = (_postIdvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/posts/_postId/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var _postId_component = Object(componentNormalizer["a" /* default */])(
  posts_postIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "abd78eba",
  "1026e71a"
  
)

/* harmony default export */ var _postId = __webpack_exports__["default"] = (_postId_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map