import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27520f6e = () => interopDefault(import('..\\pages\\aboutme.vue' /* webpackChunkName: "pages/aboutme" */))
const _8145c7ae = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _4d9e9111 = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _2294201b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutme",
    component: _27520f6e,
    name: "aboutme"
  }, {
    path: "/contact",
    component: _8145c7ae,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _4d9e9111,
    name: "portfolio"
  }, {
    path: "/",
    component: _2294201b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
