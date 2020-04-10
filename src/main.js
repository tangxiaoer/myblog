// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// 引用API文件
import axios from 'axios';
import qs from 'qs'
import VueResource from 'vue-resource'
import VueParticles from 'vue-particles'
Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.use(VueParticles);
Vue.use(VueResource);
Vue.config.productionTip = false
import './assets/incofont/iconfont.js'
import './assets/incofont/inco.css'
import LazyRender from 'vue-lazy-render'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)


Vue.use(LazyRender)
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
