import Vue from 'vue'

/** prop 설정 */
Vue.prototype.$commMessage = message;
/** prop 설정 끝 */

/** config 설정 */
Vue.config.productionTip = false;
/** config 설정 끝 */

Vue.directive('table-resizable', tableResizable)

new Vue({
  el: '#app',
  router,
  store,
  Quasar,
  // i18n,
  template: '<App/>',
  components: { App }
});
