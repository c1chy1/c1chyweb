import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41d0420c = () => interopDefault(import('..\\pages\\aboutme.vue' /* webpackChunkName: "pages/aboutme" */))
const _4c496272 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7d4ad7a2 = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _34cb3b8e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutme",
    component: _41d0420c,
    name: "aboutme"
  }, {
    path: "/contact",
    component: _4c496272,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _7d4ad7a2,
    name: "portfolio"
  }, {
    path: "/",
    component: _34cb3b8e,
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
