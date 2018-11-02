import Vue from 'vue'
import CxltToAstr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.use(CxltToAstr, {
  position: 'top right',
  timeOut: 2000,
  showMethod:'bounceInRight',
  hideMethod:'bounceOutRight'
})

// 导出 $toast方法
export default Vue.prototype.$toast
