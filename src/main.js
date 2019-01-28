import Vue from 'vue'
import App from './App.vue'

import clearakiUI from 'clearaki-ui'
import 'clearaki-ui/theme/index.css'
Vue.use(clearakiUI)

import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-light.css'
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript)
Vue.prototype.$hljs = hljs

Vue.config.productionTip = false

Vue.directive('hljs', el => {
  const blocks = el.querySelectorAll('pre code')
  Array.from(blocks).forEach(block => hljs.highlightBlock(block))
})

import router from './router'
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
