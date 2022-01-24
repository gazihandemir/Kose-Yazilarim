exports.ids = [3];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/new-post.vue?vue&type=template&id=395cdc10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PostForm',{on:{"submit":function($event){return _vm.savePost($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/new-post.vue?vue&type=template&id=395cdc10&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/admin/PostForm.vue + 4 modules
var PostForm = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/new-post.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var new_postvue_type_script_lang_js_ = ({
  components: {
    PostForm: PostForm["a" /* default */]
  },
  methods: {
    savePost(post) {
      this.$store.dispatch("addPost", post).then(response => {
        this.$router.push("/admin");
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/new-post.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_new_postvue_type_script_lang_js_ = (new_postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/new-post.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_new_postvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5434177e"
  
)

/* harmony default export */ var new_post = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new-post.js.map