import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _927203ce = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7c0ccb15 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _645b6aa8 = () => interopDefault(import('..\\pages\\admin\\posts\\index.vue' /* webpackChunkName: "pages/admin/posts/index" */))
const _5eb2ed32 = () => interopDefault(import('..\\pages\\admin\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/admin/posts/_postId/index" */))
const _285a9136 = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _752f8e4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _927203ce,
    name: "admin"
  }, {
    path: "/posts",
    component: _7c0ccb15,
    name: "posts"
  }, {
    path: "/admin/posts",
    component: _645b6aa8,
    name: "admin-posts"
  }, {
    path: "/admin/posts/:postId",
    component: _5eb2ed32,
    name: "admin-posts-postId"
  }, {
    path: "/posts/:postId",
    component: _285a9136,
    name: "posts-postId"
  }, {
    path: "/",
    component: _752f8e4c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
