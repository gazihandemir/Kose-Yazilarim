exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/PostForm.vue?vue&type=template&id=431eb43e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    container-fluid\n    mt-5\n    d-flex\n    flex-wrap\n    justify-content-center\n    align-items-center\n  "},[_vm._ssrNode("<form style=\"width: 500px\"><fieldset>"+((_vm.isUpdate)?("<legend>Köşe Yazısı Düzenle</legend>"):("<legend>Yeni Köşe Yazısı</legend>"))+" <div class=\"form-group\"><label>Yazar Adı</label> <input type=\"text\" placeholder=\"Yazarın adını giriniz..\""+(_vm._ssrAttr("value",(_vm.post.author)))+" class=\"form-control\"></div> <div class=\"form-group\"><label>Baslık</label> <input type=\"text\" placeholder=\"Yazının baslıgını giriniz..\""+(_vm._ssrAttr("value",(_vm.post.title)))+" class=\"form-control\"></div> <div class=\"form-group\"><label>Alt Baslık</label> <input type=\"text\" placeholder=\"Yazının alt baslıgını giriniz..\""+(_vm._ssrAttr("value",(_vm.post.subTitle)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"exampleTextarea\">Köse Yazısı</label> <textarea rows=\"5\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.post.text))+"</textarea></div> <button class=\"btn btn-danger\">\n        İptal\n      </button> <button type=\"submit\" class=\"btn btn-primary\">Kaydet</button></fieldset></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/PostForm.vue?vue&type=template&id=431eb43e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/PostForm.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var PostFormvue_type_script_lang_js_ = ({
  data() {
    return {
      post: {
        id: null,
        title: null,
        subTitle: null,
        author: null,
        text: null
      }
    };
  },

  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false
    },
    post: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    }

  },

  created() {
    this.post = this.post ? this.post : {
      id: null,
      title: null,
      subTitle: null,
      text: null,
      author: null
    };
  }

});
// CONCATENATED MODULE: ./components/admin/PostForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_PostFormvue_type_script_lang_js_ = (PostFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/admin/PostForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_PostFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "041af47b"
  
)

/* harmony default export */ var PostForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/_postId/index.vue?vue&type=template&id=caec7696&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PostForm',{attrs:{"is-update":true,"post":_vm.fetchedPost},on:{"submit":function($event){return _vm.updatePost($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/_postId/index.vue?vue&type=template&id=caec7696&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/admin/PostForm.vue + 4 modules
var PostForm = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/_postId/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var _postIdvue_type_script_lang_js_ = ({
  components: {
    PostForm: PostForm["a" /* default */]
  },

  asyncData(context) {
    return external_axios_default.a.get(`https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`).then(response => {
      return {
        fetchedPost: response.data
      };
    });
  },

  methods: {
    updatePost(editedPost) {
      this.$store.dispatch("updatePost", { ...editedPost,
        id: this.$route.params.postId
      }).then(response => {
        this.$router.push("/admin");
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/_postId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_postIdvue_type_script_lang_js_ = (_postIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/_postId/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_postIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d930a622"
  
)

/* harmony default export */ var _postId = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map